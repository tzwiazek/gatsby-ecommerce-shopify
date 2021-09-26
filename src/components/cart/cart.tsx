import React, { useContext, useState, useEffect } from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { CartTotal } from 'src/shared/hooks/cart-total';
import { CartInterface } from 'src/shared/interfaces/components/cart.interface';
import { CartContext, CartContextType } from '../../contexts/cart.context';
import { Link } from 'gatsby';
import * as styles from './cart.module.css';
import { ToggleContext } from 'src/contexts/toggle.context';

const Cart = (): JSX.Element => {
  const { cartVisible, setCartVisible } = useContext(ToggleContext);
  const [cart, , , removeItemFromCart, changeItemQuantity] =
    useContext<CartContextType>(CartContext);
  const [toggleCart, setToggleCart] = useState<boolean>(false);

  useEffect(() => {
    let isCartMount = false;

    if (!isCartMount) {
      setToggleCart(cartVisible);
    }

    return () => {
      isCartMount = true;
    };
  }, [cartVisible]);

  return (
    <div className={`${styles.cartWrapper} ${toggleCart ? styles.toggle : ''}`}>
      <div className={styles.titleContainer}>
        <span className={styles.text}>Your Cart</span>
        <span className={styles.closeButton} onClick={() => setCartVisible(false)}></span>
      </div>
      <div className={styles.cartContainer}>
        {cart.length === 0 ? (
          <div className={styles.emptyCartWrapper}>
            <div className={styles.emptyCartContainer}>
              <div className={styles.emptyCartImage}>
                <StaticImage
                  layout="constrained"
                  formats={['auto', 'webp', 'avif']}
                  src="../../assets/img/empty-cart.png"
                  height={80}
                  quality={90}
                  alt="Empty cart"
                />
              </div>
              <span className={styles.emptyCartText}>You have no products in your cart</span>
              <button className={styles.emptyCartButton} onClick={() => setCartVisible(false)}>
                Continue shopping
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.productsContainer}>
            {cart.map((cartItem: CartInterface) => {
              return (
                <div className={styles.product} key={cartItem.id}>
                  <Link
                    className={styles.productImageContainer}
                    to={cartItem.permalink}
                    onClick={() => setCartVisible(false)}>
                    <GatsbyImage
                      image={cartItem.images[0].childImageSharp.gatsbyImageData}
                      alt=""
                    />
                  </Link>
                  <div className={styles.productDetailsContainer}>
                    <div className={styles.productDetailsTitleContainer}>
                      <Link
                        className={styles.productDetailsTitleLink}
                        to={cartItem.permalink}
                        onClick={() => setCartVisible(false)}>
                        {cartItem.name}
                      </Link>
                      <span
                        className={styles.removeProduct}
                        onClick={() => removeItemFromCart(cartItem.id)}>
                        <StaticImage
                          layout="fixed"
                          formats={['auto', 'webp', 'avif']}
                          src="../../assets/img/icons/garbage.png"
                          width={15}
                          height={15}
                          quality={80}
                          alt="garbage"
                        />
                      </span>
                    </div>

                    <div className={styles.productPriceContainer}>
                      <span>
                        {cartItem.quantity} X {cartItem.price.formatted} zł
                      </span>
                    </div>

                    <div className={styles.quantityContainer}>
                      <div
                        className={styles.button}
                        onClick={() => changeItemQuantity(cartItem.id, -1)}>
                        -
                      </div>
                      <div className={styles.quantity}>{cartItem.quantity}</div>
                      <div
                        className={styles.button}
                        onClick={() => changeItemQuantity(cartItem.id, +1)}>
                        +
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className={styles.cartFooter}>
          <div className={styles.subtotalContainer}>
            <div className={styles.subtotal}>
              <span className={styles.textSubtotal}>grand total</span>
              <span>{CartTotal(cart)} zł</span>
            </div>
          </div>
          <div className={styles.checkoutContainer}>
            <Link
              className={styles.checkoutLink}
              to="/checkout"
              onClick={() => setCartVisible(false)}>
              go to checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
