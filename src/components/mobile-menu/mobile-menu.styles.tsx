import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import {
  FavoriteInterface,
  MenuBottomContainerInterface,
  MenuBottomLinkInterface,
  MenuBottomWrapperInterface,
  MenuElementInterface,
  MenuElementLinkInterface,
  MenuInterface,
  NavInterface,
  TextInterface
} from "../../shared/interfaces/components/mobile-menu.interface";

export const Nav = styled.nav<NavInterface>`
  margin-top:80px;
  text-transform:uppercase;
  overflow:hidden;
  width:100%;
  position:fixed;
	top:0;
	bottom:0;
	left:0;
	z-index:9999;
	background:#fff;
	-webkit-transform:translateX(-100%);
	transform:translateX(-100%);
	-webkit-transition:.35s -webkit-transform ease;
	transition:.35s -webkit-transform ease;
	transition:.35s transform ease, .35s -webkit-transform ease;
	padding:10px 20px 20px;
	overflow-y:scroll;
	-webkit-overflow-scrolling:touch;

  ${({ active }) => active && `
    -webkit-transform:translateX(0);
    transform:translateX(0);
  `}

  ${({ scroll }) => scroll && `
    margin-top:40px;
    -webkit-transition:0.4s;
    -o-transition:0.4s;
    transition:0.4s;
  `}
`;

export const Menu = styled.ul<MenuInterface>`
  margin:0;
`;

export const MenuElement = styled.li<MenuElementInterface>`
  text-align:center;
  border-top:1px solid #F2F2F2;
  text-transform:capitalize;
`;

export const MenuElementLink = styled((props: MenuElementLinkInterface) => <Link {...props} />)`
  padding:15px 20px;
  font-size:0.9rem;
  letter-spacing:0.8px;
  display:block;
  color:black;
`;

export const MenuBottomWrapper = styled.div<MenuBottomWrapperInterface>`
  width:100%;
  height:50px;
  position:absolute;
  bottom:0;
  left:0;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
`;

export const MenuBottomContainer = styled.div<MenuBottomContainerInterface>`
  width:50%;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
`;

export const MenuBottomLink = styled.a<MenuBottomLinkInterface>`
  margin:0;
  padding:0;
  letter-spacing:0.5px;
  text-transform:none;
  width:100%;
  height:100%;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  color:black;
`;

export const Text = styled.span<TextInterface>`
  font-size:0.9rem;
`;

export const Favorite = styled.span<FavoriteInterface>`
  font-size:0.72rem;
  margin-top:-8px;
  margin-left:1px;
  font-weight:500;
`;