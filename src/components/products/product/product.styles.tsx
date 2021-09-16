import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import device from 'src/shared/responsive/Device';

export const ProductContainer = styled.li<any>`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  width: 48%;
  flex: 0 0 48%;
  margin: 0 0 30px 0;
  height: 100%;
  padding: 0;
  transition: 0.3s;
  position: relative;
  max-width: 460px;

  @media screen and ${device.mobileL} {
    margin: 0 0 50px 0;
  }

  @media screen and ${device.tablet} {
    width: 32%;
    flex: 0 0 32%;
    margin: 0;
  }
`;

export const ProductLink = styled((props: any) => <Link {...props} />)`
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  max-height: 600px;
`;

export const ProductImageContainer = styled.div<any>`
  margin: 0;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  max-height: 600px;
`;

export const PictureWrapper = styled.div<any>`
  position: relative;

  &.hide-wrapper {
    display: none;
  }

  &.is-active {
    display: block;
  }
`;

export const PictureContainer = styled.picture<any>`
  width: 100%;
  height: 100%;
  min-width: 158px;
  min-height: 185px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  max-width: 460px;
  transition: 0.7s;
  visibility: visible;
  opacity: 1;

  &.hide-image {
    visibility: hidden;
    opacity: 0;
    transition: 0.4s;
  }

  &.secondary-image {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ProductImage = styled.img<any>`
  max-width: 100%;
  pointer-events: none;
  height: auto;
  width: auto;
  max-height: 600px;

  @media screen and ${device.laptop} {
    max-width: 450px;
  }

  @media screen and ${device.laptopL} {
    max-width: 600px;
  }
`;

export const ProductDescriptionContainer = styled.div<any>`
  position: unset;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0.5em 12px 15px;
  display: flex;
  width: 100%;

  @media screen and ${device.tablet} {
    position: relative;
    justify-content: space-between;
    padding: 17px 10px 25px 10px;
  }
`;

export const AvailableColors = styled.div<any>`
  display: flex;
  flex-wrap: wrap;
`;

export const ColorContainer = styled.div<any>`
  height: 19px;
  width: 19px;
  margin-right: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  border-radius: 100%;
  border: 1px solid transparent;

  @media screen and ${device.tablet} {
    margin-right: 8px;
    height: 20px;
    width: 20px;
  }

  &.is-active {
    border: 1px solid #000;
    transition: 0.7s;
  }
`;

export const Color = styled.span<any>`
  width: 13px;
  height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;

  @media screen and ${device.tablet} {
    width: 14px;
    height: 14px;
  }

  ${({ color }) =>
    color === 'rose-gold'
      ? `
    background:#e5ae87;
  `
      : color === 'silver'
      ? `
    background:#c1c1c1;
  `
      : color === 'gold'
      ? `
    background:#e3c86d;
  `
      : ``}
`;

export const Favorite = styled.div<any>`
  padding: 15px;
  position: absolute;
  top: 0;
  right: 0;
  width: auto;

  @media screen and ${device.tablet} {
    padding: 17px 10px 25px 10px;
  }
`;

export const FavoriteImageContainer = styled.div<any>`
  height: 18px;
  width: 18px;
  display: block;
`;

export const ProductDescription = styled.div<any>`
  width: 100%;
`;

export const ProductName = styled.span<any>`
  width: 100%;
  padding: 0;
  font-weight: 400;
  margin-bottom: 4px;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0;

  @media screen and ${device.tablet} {
    padding: 8px 0 0 0;
  }
`;

export const ProductPrice = styled.span<any>`
  width: 100%;
  margin-top: -4px;
  font-size: 0.9rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
`;
