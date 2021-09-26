import React from 'react';
import Layout from 'src/components/layout/layout';
import { SEO } from 'src/components/seo';
import Home from 'src/templates/home-page/home';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Ecommerce home page" />
      <Home />
    </Layout>
  );
};

export default IndexPage;
