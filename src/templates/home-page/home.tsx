import * as React from "react";
import Seo from "components/seo";
import HomeHeader from "components/home-header/home-header";

export default function Home(): JSX.Element {
  return (
    <>
      <Seo title="Home SEO title" />
      <HomeHeader></HomeHeader>
    </>
  )
}