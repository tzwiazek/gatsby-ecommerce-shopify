import React from "react"
import Layout from "components/layout/layout"
import Seo from "components/seo";
import Home from "templates/home-page/home";
import 'assets/styles/globalStyles.css';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Seo title="Ecommerce home page" />
      <Home />
    </Layout>
  )
}
