import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import {
  HeaderWrapperInterface,
  PictureContainerInterface,
  HeaderContainerInterface,
  HeaderBoxInterface,
  TitleContainerInterface,
  TitleInterface,
  ButtonInterface,
  ButtonLinkInterface,
  TextInterface
} from "../../shared/interfaces/components/home-header.interface";
import device from "../../shared/responsive/Device";

export const HeaderWrapper = styled.div<HeaderWrapperInterface>`
  width:100%;
  position:relative;
  display:flex;
  cursor:pointer;
`;

export const PictureContainer = styled.picture<PictureContainerInterface>`
  max-width:100%;
  top:0px;
  left:0px;
  width:100%;
  display:flex;
  justify-content:center;
`;

export const HeaderContainer = styled.div<HeaderContainerInterface>`
  position:absolute;
  left:0;
  top:0;
  display:flex;
  width:100%;
  height:100%;
`;

export const HeaderBox = styled.div<HeaderBoxInterface>`
  ${ ({ hidden }) => hidden && `
    display:none;
  `};

  ${ ({ type }) => type === 1 ? `
    width:100%;
    position:relative;
  ` : type === 2 ? `
    width:100%;

    @media screen and ${device.tablet} {
      width:75%;
    }

    @media screen and ${device.laptop} {
      width:60%;
      position:relative;
    }
  ` : ``}
`;

export const TitleContainer = styled.div<TitleContainerInterface>`
  bottom:-10%;
  position:absolute;
  left:50%;
  -webkit-transform:translate(-50%, -50%);
  transform:translate(-50%, -50%);
  top:auto;
  width:100%;
  text-align:center;

  @media screen and ${device.mobileL} {
    bottom:auto;
    top:50%;
  }

  @media screen and ${device.tablet} {
    vottom:0%;
  }
`;

export const Title = styled.h1<TitleInterface>`
  font-size:28px;
  font-weight:500;
  color:white!important;
  text-transform:uppercase;
  letter-spacing:1px;
  margin-bottom:0px;

  @media screen and ${device.mobileL} {
    font-size:2.3rem;
  }

  @media screen and ${device.tablet} {
    font-size:2.6rem;
  }
`;

export const Text = styled.p<TextInterface >`
  font-size:16px;
  letter-spacing:1px;
  color:white!important;
  text-align:center;
  margin-bottom:1.6em;
  margin:0;

  @media screen and ${device.laptop} {
    font-size:1.4rem;
  }
`;

export const Button = styled.div<ButtonInterface>`
  display:flex;
  justify-content:center;
`;

export const ButtonLink = styled((props: ButtonLinkInterface) => <Link {...props} />)`
  padding:10px 50px;
  font-weight:500;
  letter-spacing:1px;
  font-size:14px;
  text-transform:uppercase;
  background:white;
  margin-top:20px;
  transition:0.4s;
  color:black!important;

  &:hover {
    background:black!important;
    color:white!important;
    transition:0.7s;
  }
`;