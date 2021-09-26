import React, { useContext, useEffect, useState } from 'react';
import logoSVG from 'assets/img/azavo-logo.svg';
import { isMobile } from 'react-device-detect';
import { CartContext, CartContextType } from 'src/contexts/cart.context';
import { CartInterface } from 'src/shared/interfaces/components/cart.interface';
import * as styles from './header.module.css';
import { Link } from 'gatsby';
import { ToggleContext } from 'src/contexts/toggle.context';

export default function Header(): JSX.Element {
  const { setMenuVisible, setCartVisible } = useContext(ToggleContext);
  const [cart] = useContext<CartContextType>(CartContext);
  const [cartCount, updateCartCount] = useState<number>(0);

  useEffect(() => {
    updateCartCount(cart.reduce((acc: number, next: CartInterface) => acc + next.quantity!, 0));
  }, [cart]);

  return (
    <header className={styles.headerElement}>
      <nav className={`${styles.nav} ${styles.left}`}>
        {isMobile ? (
          <i
            className={`${styles.menuIcon} ${styles.menu}`}
            onClick={() => setMenuVisible((toggle: boolean) => !toggle)}
          />
        ) : (
          <div className={styles.menu}>
            <Link to="/watches" className={`${styles.menuLink} ${styles.category}`}>
              Watches
            </Link>
            <Link to="/watches" className={`${styles.menuLink} ${styles.category}`}>
              Jewelry
            </Link>
            <Link to="/watches" className={`${styles.menuLink} ${styles.category}`}>
              Watch bands
            </Link>
          </div>
        )}
      </nav>

      <Link to="/" className={styles.logoLink}>
        <img className={styles.logoImg} src={logoSVG} alt="logo" />
      </Link>

      <nav className={`${styles.nav} ${styles.right}`}>
        {isMobile ? (
          <div className={styles.menuCart} onClick={() => setCartVisible(true)}>
            <i className={`${styles.menuIcon} ${styles.shoppingBag}`} />
            {cart.length > 0 ? (
              <span className={`${styles.count} ${styles.isActive}`}>{cartCount}</span>
            ) : null}
          </div>
        ) : (
          <div className={styles.menu}>
            <Link to="/" className={styles.menuLink} aria-label="Favorite">
              <i className={`${styles.menuIcon} ${styles.favorite}`} />
              <span className={styles.count}></span>
            </Link>
            <Link to="/" className={styles.menuLink} aria-label="Account">
              <i className={`${styles.menuIcon} ${styles.account}`} />
            </Link>
            <div className={styles.menuCart} onClick={() => setCartVisible(true)}>
              <i className={`${styles.menuIcon} ${styles.shoppingBag}`} />
              {cart.length > 0 ? (
                <span className={`${styles.count} ${styles.isActive}`}>{cartCount}</span>
              ) : null}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
