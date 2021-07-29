import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import {
  HeaderElement,
  LogoLink,
  Menu,
  MenuElement,
  MenuLink,
  Nav,
  SiteBranding,
  LogoImg,
  MenuIcon,
  Count,
  MenuCart
} from "./header.styles";
import logoSVG from 'assets/img/azavo-logo.svg';
import { HeaderService } from "./header.service";
import { isMobile } from "react-device-detect";
import { CartContext, CartContextType } from "components/cart/cart-provider";
import { CartInterface } from "shared/interfaces/components/cart.interface";

export default function Header(): JSX.Element {
  const [isActiveMobileMenu, setActiveMobileMenu]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [cart]: CartContextType = useContext(CartContext);
  const [cartCount, updateCartCount]: [number, Dispatch<SetStateAction<number>>] = useState(0);

  useEffect(() => {
    updateCartCount(cart.reduce((acc: number, next: CartInterface) => acc + next.quantity, 0))
  }, [cart]);

  function toggleMenu(): boolean {
    setActiveMobileMenu((value: boolean) => !value);
    return !isActiveMobileMenu;
  }

  return (
    <HeaderElement>
      <Nav type="left">
        {isMobile ? (
          <MenuIcon type="bars" onClick={() => HeaderService.toggleMenu$.next(toggleMenu())}></MenuIcon>
        ) : (
          <Menu>
            <MenuElement>
              <MenuLink to="/watches" category={1}>Watches</MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink to="/jewelry" category={1}>Jewelry</MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink to="/watch-bands" category={1}>Watch bands</MenuLink>
            </MenuElement>
          </Menu>
        )}
      </Nav>

      <SiteBranding>
        <LogoLink to="/">
          <LogoImg src={logoSVG} alt="logo" />
        </LogoLink>
      </SiteBranding>

      <Nav type="right">
        {isMobile ? (
          <MenuCart onClick={() => HeaderService.toggleCart$.next(true)}>
            <MenuIcon type="shopping-cart"></MenuIcon>
            {cart.length > 0 ? <Count toggle="is-active">{cartCount}</Count> : null}
          </MenuCart>
        ) : (
          <Menu>
            <MenuElement>
              <MenuLink to="/">
                <MenuIcon type="favorite"></MenuIcon>
                <Count toggle="hidden"></Count>
              </MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink to="/">
                <MenuIcon type="account"></MenuIcon>
              </MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuCart onClick={() => HeaderService.toggleCart$.next(true)}>
                <MenuIcon type="shopping-cart"></MenuIcon>
                {cart.length > 0 ? <Count toggle="is-active">{cartCount}</Count> : null}
              </MenuCart>
            </MenuElement>
          </Menu>
        )}
      </Nav>
    </HeaderElement>
  )
}