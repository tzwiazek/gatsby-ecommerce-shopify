import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { CartTotal } from 'src/shared/hooks/cart-total';
import { CartInterface } from 'src/shared/interfaces/components/cart.interface';
import { CardElementStyled } from './checkout.styles';

interface CheckoutInterface {
  cart: CartInterface[];
  complete: boolean;
  email: string;
  emptyCart: () => void;
  updateCartUI: any;
  updateComplete: React.Dispatch<React.SetStateAction<boolean>>;
  elements: any;
  stripe: any;
}

class Checkout extends React.Component<CheckoutInterface> {
  handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    this.props.stripe.createToken().then(async () => {
      try {
        await axios
          .post(
            '/.netlify/functions/index',
            {
              stripeEmail: this.props.email,
              stripeAmt: Math.floor(CartTotal(this.props.cart) * 100),
              stripeToken: 'tok_visa',
              stripeIdempotency: uuidv4()
            },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          .then((res) => {
            if (res.status === 200) {
              this.props.updateCartUI('success');
              setTimeout(() => this.props.emptyCart(), 3000);
            } else {
              this.props.updateCartUI('failure');
              setTimeout(() => this.props.updateCartUI('checkout'), 3000);
            }
            console.log(JSON.stringify(res, null, 2));
          });
      } catch (err) {
        console.log(err);
        this.props.updateCartUI('failure');
      }
    });
  };

  render() {
    return (
      <>
        <CardElementStyled
          onChange={(event) => this.props.updateComplete(event.complete)}
          style={{ base: { fontSize: '16px' } }}
        />
        <button
          onClick={this.handleSubmit}
          className="pay-with-stripe button"
          disabled={!this.props.complete || !this.props.email}>
          Pay with credit card
        </button>
      </>
    );
  }
}

export default injectStripe(Checkout);
