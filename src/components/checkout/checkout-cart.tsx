import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { CartContext, CartContextType } from 'src/contexts/cart.context';
import Card from './checkout-payment';
import { SEO } from 'src/components/seo';
import { CartTotal } from 'src/shared/hooks/cart-total';
import { CartInterface } from 'src/shared/interfaces/components/cart.interface';
import * as styles from './checkout.module.css';

const CartDisplay = () => {
  const [cart] = useContext<CartContextType>(CartContext);
  return <>{cart.length > 0 ? CheckoutDisplay(cart) : cartEmpty()}</>;
};

const cartEmpty = () => {
  return (
    <section className="center">
      <p>Your cart is empty, fill it up!</p>
      <button className="pay-with-stripe">
        <Link style={{ color: 'white' }} to="/">
          Back Home
        </Link>
      </button>
    </section>
  );
};

const CheckoutDisplay = (cart: CartInterface[]) => {
  return (
    <>
      <SEO title="Checkout page" />
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tr}>
            <th className={styles.th}>Product</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Quantity</th>
            <th className={styles.th}>Total</th>
          </tr>
          {cart.map((item, index) => (
            <tr className={styles.tr} key={index}>
              <td className={styles.td}>
                <h3 className={styles.productName}>{item.name}</h3>
              </td>
              <td className={styles.td}>
                <h4 className="price">{item.price.formatted}</h4>
              </td>
              <td className={styles.td}>
                <strong>{item.quantity}</strong>
              </td>
              <td className={styles.td}>{item.quantity! * Number(item.price.formatted)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className={styles.payment}>
        <Card />
        <div className={styles.total}>
          <div className="caption">
            <p>
              <strong>Subtotal:</strong>
            </p>
            <p>Shipping:</p>
            <p className={styles.golden}>Total:</p>
          </div>
          <div className={styles.num}>
            <p>
              <strong>{CartTotal(cart)}</strong>
            </p>
            <p>Free Shipping</p>
            <p className={styles.golden}>{CartTotal(cart)}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartDisplay;
