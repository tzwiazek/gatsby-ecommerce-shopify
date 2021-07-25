import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";
import favoriteIcon from '../../assets/img/icons/favorite.svg';
import shoppingBagIcon from '../../assets/img/icons/shopping-bag.svg';
import accountIcon from '../../assets/img/icons/account.svg';
import barsIcon from '../../assets/img/icons/menu.svg';
import device from "../../shared/responsive/Device";
import {
  CountInterface,
  HeaderElementInterface,
  LogoImgInterface,
  LogoLinkInterface,
  MenuCartInterface,
  MenuElementInterface,
  MenuIconInterface,
  MenuInterface,
  MenuLinkInterface,
  NavInterface,
  SiteBrandingInterface
} from "../../shared/interfaces/components/header.interface";

export const HeaderElement = styled.header<HeaderElementInterface>`
  width:100%;
  max-width:100%;
  position:fixed;
  margin-top:40px;
  -webkit-transition:0.7s;
  -o-transition:0.7s;
  transition:0.7s;
  top: inherit;
  padding:10px 18px;
  display:flex;
  align-items:center;
  background:white;
  z-index:9999;

  @media screen and ${device.laptop} {
    border-bottom:1px solid #F1F0F0;
    height:60px;
    padding:0 20px;
  }
`;

export const Nav = styled.nav<NavInterface>`
  width:50%;
  display:flex;

  ${ ({ type }) => type === 'left' ? `
    justify-content:flex-start
  ` : `
    justify-content:flex-end;
  `}
`;

export const Menu = styled.div<MenuInterface>`
  font-size:0.93rem;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:end;
  -ms-flex-pack:end;
  justify-content:flex-end;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
`;

export const MenuElement = styled.div<MenuElementInterface>``;

export const MenuLink = styled((props: MenuLinkInterface) => <Link {...props} />)`
  position:relative;
  -webkit-transition:0s;
  -o-transition:0s;
  transition:0s;
  letter-spacing:1px;
  font-size:14px;
  transition:0.4s;
  color:#4D4545;
  margin:0 10px;
  display:inline-block;

  ${({ category }) => category && `
    &::before {
      content:'';
      position:absolute;
      left:0;
      display:inline-block;
      width:100%;
      border-bottom:1px solid #000000;
      margin-top:23px;
      opacity:0;
      -webkit-transition:opacity 0.45s, -webkit-transform 0.45s;
      transition:opacity 0.45s, -webkit-transform 0.45s;
      -o-transition:opacity 0.45s, transform 0.45s;
      transition:opacity 0.45s, transform 0.45s, -webkit-transform 0.45s;
      transform:scale(0,1);
    }

    &:hover {
      &::before {
        opacity:1;
        transform:scale(1);
      }
    }
  `}
`;

export const MenuCart = styled.div<MenuCartInterface>`
  position:relative;
  -webkit-transition:0s;
  -o-transition:0s;
  transition:0s;
  letter-spacing:1px;
  font-size:14px;
  transition:0.4s;
  color:#4D4545;
  display:inline-block;
  cursor:pointer;
  display:flex;

  @media screen and ${device.tablet} {
    margin:0 10px;
  }
`;

export const SiteBranding = styled.div<SiteBrandingInterface>``;

export const LogoLink = styled((props: LogoLinkInterface) => <Link {...props} />)`
  display:flex;
  align-items:center;
`;

export const LogoImg = styled.img<LogoImgInterface>`
  height:28px;

  @media screen and ${device.laptop} {
    width:56px;
    height:40px;
  }
`;

export const MenuIcon = styled.i<MenuIconInterface>`
  display:inline-block;
  background-repeat:no-repeat;

  ${ ({ type }) => type === 'favorite' ? `
    margin-top:6px;
    width:18px;
    height:18px;
    background:url(${favoriteIcon}) 50% 50%/contain;
  ` : type === 'shopping-cart' ? `
    width:20px;
    height:20px;
    margin-right:-3px;
    background:url(${shoppingBagIcon}) 50% 50%/contain;
  ` : type === 'account' ? `
    margin-top:6px;
    width:18px;
    height:18px;
    background:url(${accountIcon}) 50% 50%/contain;
  ` : type === 'bars' ? `
    width:23px;
    height:23px;
    background:url(${barsIcon}) 50% 50%/contain;
  ` : ``}
`;

export const Count = styled.span<CountInterface>`
  background:#000000;
  border-radius:100%;
  height:18px;
  width:18px;
  color:white;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  font-size:0.8rem;
  font-weight:600;
  position:absolute;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  padding-left:1px;
  display:none;
  right:-10px;
  top:-10px;

  ${({ toggle }) => toggle === 'is-active' && `
  	display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
  `}
`;