import React, { useContext, useEffect, useState } from 'react';
import { CartInterface } from 'src/shared/interfaces/components/cart.interface';
import { CartContext, CartContextType } from 'src/components/cart/cart-provider';
import { HeaderService } from 'src/components/header/header.service';
import {
  Favorite,
  Menu,
  MenuBottomContainer,
  MenuBottomLink,
  MenuBottomWrapper,
  MenuElement,
  MenuElementLink,
  Nav,
  Text
} from './mobile-menu.styles';

export default function MobileMenu(): JSX.Element {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [toggleHeader, setToggleHeader] = useState<boolean>(false);
  const [cart] = useContext<CartContextType>(CartContext);
  const [cartCount, updateCartCount] = useState<number>(0);

  useEffect(() => {
    updateCartCount(cart.reduce((acc: number, next: CartInterface) => acc + next.quantity!, 0));

    if (window.pageYOffset > 60) {
      setToggleHeader(true);
    } else {
      setToggleHeader(false);
    }

    HeaderService.toggleMenu$.subscribe((isActive: boolean) => {
      const bodyElement: HTMLElement = document.getElementsByTagName('body')[0];
      isActive
        ? bodyElement.classList.add('stop-scrolling')
        : bodyElement.classList.remove('stop-scrolling');

      setToggleMenu(isActive);
    });

    const handleScroll = () => {
      const top: number = window.pageYOffset || document.documentElement.scrollTop;
      if (top < 60) {
        setToggleHeader(false);
      } else {
        setToggleHeader(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [toggleHeader, cart]);

  return (
    <Nav id="mobile-navigation" active={toggleMenu} scroll={toggleHeader}>
      <Menu>
        <MenuElement>
          <MenuElementLink to="/watches" onClick={() => HeaderService.toggleMenu$.next(false)}>
            Watches
          </MenuElementLink>
        </MenuElement>

        <MenuElement>
          <MenuElementLink to="/jewelry" onClick={() => HeaderService.toggleMenu$.next(false)}>
            Jewelry
          </MenuElementLink>
        </MenuElement>

        <MenuElement>
          <MenuElementLink to="/watch-bands" onClick={() => HeaderService.toggleMenu$.next(false)}>
            Watch bands
          </MenuElementLink>
        </MenuElement>

        <MenuElement>
          <MenuElementLink to="#" onClick={() => HeaderService.toggleMenu$.next(false)}>
            Blog
          </MenuElementLink>
        </MenuElement>

        <MenuBottomWrapper>
          <MenuBottomContainer>
            <MenuBottomLink href="#">
              <Text>Favorite</Text>
              {cart.length > 0 ? <Favorite>{cartCount}</Favorite> : null}
            </MenuBottomLink>
          </MenuBottomContainer>

          <MenuBottomContainer>
            <MenuBottomLink href="#">
              <Text>Register</Text>
            </MenuBottomLink>
          </MenuBottomContainer>
        </MenuBottomWrapper>
      </Menu>
    </Nav>
  );
}
