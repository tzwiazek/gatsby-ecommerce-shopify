import React from 'react';
import { SEO } from 'src/components/seo';
import HomeHeader from 'src/components/home-header/home-header';

export default function Home(): JSX.Element {
  return (
    <>
      <SEO title="Home SEO title" />
      <HomeHeader></HomeHeader>
    </>
  );
}
