import React, { useEffect, SetStateAction, Dispatch, useState } from "react";
import Header from "../header/header";
import Notifications from "../header/notifications/notifications";
import { isMobile } from "react-device-detect";
import MobileMenu from "../mobile-menu/mobile-menu";
import styled from "styled-components";
import device from "../../shared/responsive/Device";
import Cart from "../cart/cart";

const HeaderContainer = styled.div<any>`
  margin-top:0px;
  height:88px;
  -webkit-transition:0.3s;
  -o-transition:0.3s;
  transition:0.3s;

  @media screen and ${device.laptop} {
    height:100px;
  }

  ${({ scroll }) => scroll && `
    margin-top:-40px;
  `}
`;

const Layout = ({ children }: any) => {
  const [toggleHeader, setToggleHeader]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(undefined);

  useEffect(() => {
    if (window.pageYOffset > 60) {
      setToggleHeader(true);
    } else {
      setToggleHeader(false);
    }

    const handleScroll = () => {
      const top: number = window.pageYOffset || document.documentElement.scrollTop;
      if (top < 60) {
        setToggleHeader(false);
      } else {
        setToggleHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggleHeader]);

  return (
    <>
      {toggleHeader !== undefined &&
        <HeaderContainer scroll={toggleHeader}>
          <Notifications />
          <Header />
        </HeaderContainer>
      }

      {isMobile && <MobileMenu />}

      <Cart />
      <main>{children}</main>
    </>
  )
}

export default Layout
