import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Layout } from 'gatsby-plugin-image';
import { MainImageProps } from 'gatsby-plugin-image/dist/src/components/main-image';
import { SetStateAction } from 'react';

export interface CartInterface {
  length: number;
  id: string;
  images: ImagesSharpInterface[];
  name: string;
  permalink: string;
  price: {
    formatted: string;
  };
  quantity?: number;
  variant_groups: VariantGroups[];
  reduce(arg0: (acc: number, next: CartInterface) => number, arg1: number): SetStateAction<number>;
}

export interface ImagesSharpInterface extends IGatsbyImageData {
  name: string;
  childImageSharp: {
    gatsbyImageData: {
      backgroundColor?: string;
      height: number;
      images: Pick<MainImageProps, 'sources' | 'fallback'>;
      layout: Layout;
      width: number;
    };
  };
}

export interface VariantGroups {
  name: string;
  options: VariantGroupsOptions[];
}

export interface VariantGroupsOptions {
  [key: string]: string;
}
