import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'src/components/layout/layout';
import CategoryTitle from 'src/components/categories/category-title/category-title';
import Seo from 'src/components/seo';
import { CartInterface } from 'src/shared/interfaces/components/cart.interface';
import * as styles from './category-page.module.css';
import Product from 'src/components/products/product/product';

export default function CategoryPage({
  data: { category }
}: {
  data: { category: any };
}): JSX.Element {
  const { products } = category;

  return (
    <Layout>
      <Seo title={`All ${category.name} SEO title`} />

      <div className={styles.categoryContainer}>
        <CategoryTitle
          title={category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          description={category.description}
        />

        <>
          <h1 className={styles.collectionTitle}>Lorem ipsum</h1>
          <div className={styles.productsContainer}>
            {products.map((product: CartInterface) => {
              return <Product product={product} key={product.name}></Product>;
            })}
          </div>
        </>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query CategoryPageQuery($id: String!) {
    category: checCategory(id: { eq: $id }) {
      id
      name
      slug
      description
      products {
        images {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, quality: 90, formats: WEBP)
          }
          name
        }
        name
        permalink
        price {
          formatted
        }
        variant_groups {
          name
          options {
            name
          }
        }
        id
      }
    }
  }
`;
