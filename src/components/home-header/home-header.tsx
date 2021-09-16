import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  HeaderWrapper,
  PictureContainer,
  HeaderContainer,
  HeaderBox,
  TitleContainer,
  Title,
  Text,
  Button,
  ButtonLink
} from './home-header.styles';
import { isMobile } from 'react-device-detect';

export default function HomeHeader(): JSX.Element {
  return (
    <HeaderWrapper>
      <PictureContainer>
        {isMobile ? (
          <StaticImage src="../../assets/img/home-header-640x730.webp" alt="home header image" />
        ) : (
          <StaticImage src="../../assets/img/home-header-2800x900.webp" alt="home header image" />
        )}
      </PictureContainer>

      <HeaderContainer>
        <HeaderBox type={2} hidden></HeaderBox>
        <HeaderBox type={2} hidden></HeaderBox>
        <HeaderBox type={1}>
          <TitleContainer type={1}>
            <Title>Lorem ipsum</Title>
            <Text>Lorem impsum dolor sit amet</Text>
            <Button>
              <ButtonLink to="#">shop now</ButtonLink>
            </Button>
          </TitleContainer>
        </HeaderBox>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
