import React from 'react';
import { Link } from 'gatsby';
import SEO from 'src/components/seo';
import Layout from 'src/components/layout/layout';
import CartDisplay from 'src/components/checkout/checkout-cart';
import { CartUIProvider, CartUIContext } from 'src/components/cart/cartUI';
import * as styles from '../components/checkout/checkout.module.css';

const displayCartUIContext = (context: string) => {
  if (context === 'checkout') {
    return <CartDisplay />;
  } else if (context === 'loading') {
    return (
      <section className={styles.loading}>
        <h2>Loading...</h2>
      </section>
    );
  } else if (context === 'success') {
    return (
      <section className={styles.success}>
        <h2>Success!</h2>
        <p>Thank you for your purchase. You will be receiving your items in4 business days.</p>
        <p>Forgot something?</p>
        <button className="pay-with-stripe">
          <Link style={{ color: 'white' }} to="/">
            Back to Home
          </Link>
        </button>
      </section>
    );
  } else if (context === 'failure') {
    return (
      <section>
        <p>Oops, something went wrong. Redirecting you to your cart to try again.</p>
      </section>
    );
  } else {
    return;
  }
};

const Cart = () => {
  return (
    <Layout>
      <SEO title="Cart" />
      <CartUIProvider>
        <hr />
        <h1>Your Cart</h1>
        <CartUIContext.Consumer>
          {(context) => displayCartUIContext(context[0])}
        </CartUIContext.Consumer>
      </CartUIProvider>
    </Layout>
  );
};

export default Cart;
