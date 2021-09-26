import React, { useEffect, useState } from 'react';
import Header from 'src/components/header/header';
import Notifications from 'src/components/header/notifications/notifications';
import { isMobile } from 'react-device-detect';
import MobileMenu from 'src/components/mobile-menu/mobile-menu';
import Cart from 'src/components/cart/cart';
import 'assets/styles/globalStyles.css';
import * as styles from './layout.module.css';

const Layout = ({ children }: any) => {
  const [toggleHeader, setToggleHeader] = useState<boolean>(false);

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

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [toggleHeader]);

  return (
    <>
      <div className={`${styles.headerContainer} ${toggleHeader ? styles.scroll : ''}`}>
        <Notifications />
        <Header />
      </div>
      {isMobile && <MobileMenu />}
      <Cart />
      <main>{children}</main>
    </>
  );
};

export default Layout;
