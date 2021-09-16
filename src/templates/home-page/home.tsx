import * as React from 'react';
import Seo from 'src/components/seo';
import HomeHeader from 'src/components/home-header/home-header';

export default function Home(): JSX.Element {
  return (
    <>
      <Seo title="Home SEO title" />
      <HomeHeader></HomeHeader>
    </>
  );
}
