import React from 'react';
import Layout from 'src/components/layout/layout';
import Seo from 'src/components/seo';
import Home from 'src/templates/home-page/home';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Ecommerce home page" />
      <Home />
    </Layout>
  );
};

export default IndexPage;
