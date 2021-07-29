exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data: { allChecCategory } } = await graphql(`
    {
      allChecCategory {
        nodes {
          id
          slug
          products {
            id
            permalink
            variant_groups {
              name
              options {
                name
              }
            }
          }
        }
      }
    }
  `);

  allChecCategory.nodes.forEach(({ products }) => {
    products.forEach(({ id, permalink }) =>
      createPage({
        path: `/${permalink}`,
        component: require.resolve(`./src/templates/product-page/product-page.tsx`),
        context: {
          id
        },
      })
    )
  });

  allChecCategory.nodes.forEach(({ id, slug }) =>
    createPage({
      path: `/${slug}`,
      component: require.resolve(`./src/templates/category-page/category-page.tsx`),
      context: {
        id
      },
    })
  );
};