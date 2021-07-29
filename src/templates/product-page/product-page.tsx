import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { graphql } from "gatsby";
import { reactLocalStorage } from "reactjs-localstorage";
import { CartContext, CartContextType } from "components/cart/cart-provider";
import { HeaderService } from "components/header/header.service";
import Layout from "components/layout/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { CartInterface } from "shared/interfaces/components/cart.interface";

export default function ProductPage({ data: { product } }) {
  const [mainImage] = product.images;
  const [quantity]: [number, Dispatch<SetStateAction<number>>] = useState(1);
  const [cart, setCart, , , changeItemQuantity]: CartContextType = useContext(CartContext);

  const addToCart = () => {
    const tempCart: CartInterface[] = cart;
    let itemFound = false;

    tempCart.forEach(el => {
      if (el.id === product.id) {
        changeItemQuantity(product.id, +1)
        itemFound = true
      }
    })

    if (!itemFound) {
      product.quantity = quantity
      tempCart.push(product)
      setCart(tempCart);
      reactLocalStorage.setObject("cart", tempCart);
    }
    HeaderService.toggleCart$.next(true);
  }

  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>{product.price.formatted_with_symbol}</p>
      <div onClick={() => addToCart()}>Add to cart</div>
      {mainImage && (
        <GatsbyImage image={mainImage.childImageSharp.gatsbyImageData} alt="" />
      )}
    </Layout>
  );
}

export const pageQuery = graphql`
  query ProductPageQuery($id: String!) {
    product: checProduct(id: {eq: $id}) {
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
`;