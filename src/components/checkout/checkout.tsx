import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
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
}

const Checkout = ({
  cart,
  complete,
  email,
  emptyCart,
  updateCartUI,
  updateComplete
}: CheckoutInterface) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const cardElement = elements!.getElement(CardElement);

    stripe!.createToken(cardElement!).then(async () => {
      try {
        await axios
          .post(
            '/.netlify/functions/index',
            {
              stripeEmail: email,
              stripeAmt: Math.floor(CartTotal(cart) * 100),
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
              updateCartUI('success');
              setTimeout(() => emptyCart(), 3000);
            } else {
              updateCartUI('failure');
              setTimeout(() => updateCartUI('checkout'), 3000);
            }
            console.log(JSON.stringify(res, null, 2));
          });
      } catch (err) {
        console.log(err);
        updateCartUI('failure');
      }
    });
  };

  return (
    <>
      <CardElementStyled
        onChange={(event) => updateComplete(event.complete)}
        style={{ base: { fontSize: '16px' } }}
      />
      <button
        onClick={handleSubmit}
        className="pay-with-stripe button"
        disabled={!complete || !email}>
        Pay with credit card
      </button>
    </>
  );
};

export default Checkout;
