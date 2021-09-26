import React, { useContext, useEffect, useState } from 'react';
import { CartInterface } from 'src/shared/interfaces/components/cart.interface';
import { CartContext, CartContextType } from 'src/contexts/cart.context';
import * as styles from './mobile-menu.module.css';
import { Link } from 'gatsby';
import { ToggleContext } from 'src/contexts/toggle.context';

export default function MobileMenu(): JSX.Element {
  const { menuVisible, setMenuVisible } = useContext(ToggleContext);
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

  useEffect(() => {
    const bodyElement: HTMLElement = document.getElementsByTagName('body')[0];
    menuVisible
      ? bodyElement.classList.add('stop-scrolling')
      : bodyElement.classList.remove('stop-scrolling');
  }, [menuVisible]);

  return (
    <nav
      id="mobile-navigation"
      className={`${styles.nav} ${menuVisible ? styles.isActive : ''} ${
        toggleHeader ? styles.scroll : ''
      }`}>
      <ul className={styles.menu}>
        <li className={styles.menuElement}>
          <Link
            to="/watches"
            className={styles.menuElementLink}
            onClick={() => setMenuVisible(false)}>
            Watches
          </Link>
        </li>

        <li className={styles.menuElement}>
          <Link
            to="/jewelry"
            className={styles.menuElementLink}
            onClick={() => setMenuVisible(false)}>
            Jewelry
          </Link>
        </li>

        <li className={styles.menuElement}>
          <Link
            to="/watch-bands"
            className={styles.menuElementLink}
            onClick={() => setMenuVisible(false)}>
            Watch bands
          </Link>
        </li>

        <li className={styles.menuElement}>
          <Link to="#" className={styles.menuElementLink} onClick={() => setMenuVisible(false)}>
            Blog
          </Link>
        </li>

        <div className={styles.menuBottomWrapper}>
          <div className={styles.menuBottomContainer}>
            <a className={styles.menuBottomLink} href="#">
              <span className={styles.text}>Favorite</span>
              {cart.length > 0 ? <span className={styles.favorite}>{cartCount}</span> : null}
            </a>
          </div>

          <div className={styles.menuBottomContainer}>
            <a className={styles.menuBottomLink} href="#">
              <span className={styles.text}>Register</span>
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
}
