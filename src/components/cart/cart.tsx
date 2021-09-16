import React, { useContext, useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CartTotal } from 'src/shared/hooks/cart-total';
import { CartInterface } from 'src/shared/interfaces/components/cart.interface';
import { HeaderService } from 'src/components/header/header.service';
import { CartContext, CartContextType } from './cart-provider';
import {
  CartWrapper,
  CloseButton,
  TitleContainer,
  Text,
  CartContainer,
  EmptyCartContainer,
  EmptyCartWrapper,
  EmptyCartImage,
  EmptyCartText,
  EmptyCartButton,
  Product,
  ProductsContainer,
  Amount,
  CartFooter,
  CheckoutContainer,
  CheckoutLink,
  Subtotal,
  SubtotalContainer,
  TextSubtotal,
  ProductImageContainer,
  ProductDetailsTitleContainer,
  ProductDetailsTitleLink,
  RemoveProduct,
  ProductDetailsContainer,
  ProductPrice,
  ProductPriceContainer,
  QuantityContainer,
  Button,
  Quantity
} from './cart.styles';

const Cart = (): JSX.Element => {
  const [cart, , , removeItemFromCart, changeItemQuantity] =
    useContext<CartContextType>(CartContext);
  const [toggleCart, setToggleCart] = useState<boolean>(false);

  useEffect(() => {
    let isCartMount = false;

    HeaderService.toggleCart$.subscribe((isActive: boolean) => {
      if (!isCartMount) {
        setToggleCart(isActive);
      }
    });

    return () => {
      isCartMount = true;
    };
  }, []);

  return (
    <CartWrapper toggle={toggleCart}>
      <TitleContainer>
        <Text>Your Cart</Text>
        <CloseButton onClick={() => HeaderService.toggleCart$.next(false)}></CloseButton>
      </TitleContainer>
      <CartContainer>
        {cart.length === 0 ? (
          <EmptyCartWrapper>
            <EmptyCartContainer>
              <EmptyCartImage></EmptyCartImage>
              <EmptyCartText>You have no products in your cart</EmptyCartText>
              <EmptyCartButton onClick={() => HeaderService.toggleCart$.next(false)}>
                Continue shopping
              </EmptyCartButton>
            </EmptyCartContainer>
          </EmptyCartWrapper>
        ) : (
          <ProductsContainer>
            {cart.map((cartItem: CartInterface) => {
              return (
                <Product key={cartItem.id}>
                  <ProductImageContainer
                    to={cartItem.permalink}
                    onClick={() => HeaderService.toggleCart$.next(false)}>
                    <GatsbyImage
                      image={cartItem.images[0].childImageSharp.gatsbyImageData}
                      alt=""
                    />
                  </ProductImageContainer>
                  <ProductDetailsContainer>
                    <ProductDetailsTitleContainer>
                      <ProductDetailsTitleLink
                        to={cartItem.permalink}
                        onClick={() => HeaderService.toggleCart$.next(false)}>
                        {cartItem.name}
                      </ProductDetailsTitleLink>
                      <RemoveProduct onClick={() => removeItemFromCart(cartItem.id)} />
                    </ProductDetailsTitleContainer>

                    <ProductPriceContainer>
                      <ProductPrice>
                        {cartItem.quantity} X {cartItem.price.formatted} zł
                      </ProductPrice>
                    </ProductPriceContainer>

                    <QuantityContainer>
                      <Button type="minus" onClick={() => changeItemQuantity(cartItem.id, -1)}>
                        -
                      </Button>
                      <Quantity>{cartItem.quantity}</Quantity>
                      <Button type="minus" onClick={() => changeItemQuantity(cartItem.id, +1)}>
                        +
                      </Button>
                    </QuantityContainer>
                  </ProductDetailsContainer>
                </Product>
              );
            })}
          </ProductsContainer>
        )}
      </CartContainer>
      {cart.length > 0 && (
        <CartFooter>
          <SubtotalContainer>
            <Subtotal>
              <TextSubtotal>grand total</TextSubtotal>
              <Amount>{CartTotal(cart)} zł</Amount>
            </Subtotal>
          </SubtotalContainer>
          <CheckoutContainer>
            <CheckoutLink to="/checkout" onClick={() => HeaderService.toggleCart$.next(false)}>
              go to checkout
            </CheckoutLink>
          </CheckoutContainer>
        </CartFooter>
      )}
    </CartWrapper>
  );
};

export default Cart;
