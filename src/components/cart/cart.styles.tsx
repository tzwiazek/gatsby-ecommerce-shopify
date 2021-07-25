import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import device from "../../shared/responsive/Device";
import emptyCart from "../../assets/img/empty-cart.png";
import garbage from "../../assets/img/icons/garbage.png";

export const CartWrapper = styled.div<any>`
  width:100%;
  position:fixed;
  z-index:999999;
  background-color:#fff;
  max-width:100%;
  top:0;
  bottom:0;
  right:-450px;
  transition:0.4s;

  ${({ toggle }) => toggle && `
    right:0;
    transition:0.4s;
  `}

  @media screen and ${device.mobileL} {
    width:450px;
  }
`;

export const TitleContainer = styled.div`
  position:relative;
  padding:15px;
`;

export const Text = styled.span`
  padding-left:10px;
  letter-spacing:1.5px;
  font-weight:300;
  text-transform:uppercase;
  font-size:20px;
`;

export const CloseButton = styled.span`
  width:30px;
  height:30px;
  transform:translateY(-50%);
  top:50%;
  right:20px;
  cursor:pointer;
  position:absolute;

  &::before {
    background:#1e1c1c;
    content:''!important;
    position:absolute;
    width:22px;
    height:1px;
    transform-origin:50% 50%;
    transition:all .3s .3s ease;
    left:calc(50% - 11px);
    top:50%;
    transform:rotate(-45deg);
  }

  &::after {
    background:#1e1c1c;
    content:''!important;
    position:absolute;
    width:22px;
    height:1px;
    transform-origin:50% 50%;
    transition:all .3s .3s ease;
    left:calc(50% - 11px);
    top:50%;
    transform:rotate(45deg);
  }
`;

export const CartContainer = styled.div`
  border-bottom:none;
  margin:0 25px;
  overflow-y:auto;
  position:relative;
  overflow-x:hidden;
  height:100%;
`;

export const EmptyCartWrapper = styled.div`
  text-transform:uppercase;
  height:100%;
  display:flex;
  align-items:center;
`;

export const EmptyCartContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
`;

export const EmptyCartImage = styled.div`
  background:url(${emptyCart}) 50% 50%/contain;
  height:80px;
  width:100%;
  display:block;
  background-repeat:no-repeat;
`;

export const EmptyCartText = styled.span`
  font-size:0.9rem;
  text-align:center;
  padding:15px;
`;

export const EmptyCartButton = styled.button`
  display:block;
  margin:auto;
  transition:0.7s;
  background:#000;
  padding:1rem;
  color:#fff;
  border:none;
  cursor:pointer;
  letter-spacing:1.5px;
  font-size:.8rem;
  text-transform:uppercase;
`;

export const ProductsContainer = styled.div`
  position:relative;
  font-size:14px;
  height:100%;
`;

export const Product = styled.div<any>`
  padding:10px 15px;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  overflow:hidden;
  margin-bottom:4px;
  width:100%;
  border-top:1px solid #eee;
`;

export const ProductImageContainer = styled((props: any) => <Link {...props} />)`
  display:block;
  width:100px;
  max-height:125px;
`;

export const ProductDetailsContainer = styled.div`
  width:260px;
  height:100px;
  margin-left:10px!important;
`;

export const ProductDetailsTitleContainer = styled.div`
  display:flex;
  justify-content:space-between;
`;

export const ProductDetailsTitleLink = styled((props: any) => <Link {...props} />)`
  color:black;
`;

export const RemoveProduct = styled.span<any>`
  background:url(${garbage}) 50% 50%/contain;
  background-repeat:no-repeat;
  width:15px;
  height:15px;
  min-width:15px;
  min-height:15px;
  margin-top:5px;
  display:inline-block;
  text-transform:uppercase;
  font-size:10px;
  cursor:pointer;
`;

export const ProductPriceContainer = styled.div`
  margin:3px 0;
`;

export const ProductPrice = styled.span``;

export const QuantityContainer = styled.div`
  display:flex;
  margin-top:6px;
`;

export const Button = styled.div<any>`
  width:18px;
  height:18px;
  display:flex;
  justify-content:center;
  align-items:center;
  border:1px solid #000;
  border-radius:2px;
  cursor:pointer;
  transition:0.4s;

  &:hover {
    background:#000;
    transition:0.4s;
    color:#fff;
  }
`;

export const Minus = styled.span`
  height:100%;
  line-height:0;
  margin-top:11px;
  font-size:1.6rem;
  font-weight:300;
`;

export const Plus = styled.div`
  height:100%;
  line-height:0;
  margin-top:14px;
  font-size:1.6rem;
  font-weight:300;
  padding:1px 0 0 1px;
`;

export const Quantity = styled.div`
  display:flex;
  height:18px;
  width:18px;
  justify-content:center;
  align-items:center;
  font-size:.93rem;
`;

export const CartFooter = styled.div`
  position:absolute;
  width:100%;
  display:block;
  bottom:0;
  padding:10px;
  box-sizing:border-box;
  border-top:1px solid #eee;
`;

export const SubtotalContainer = styled.div`
  margin-bottom:10px;
`;

export const Subtotal = styled.div`
  text-align:center;
  display:flex;
  justify-content:space-between;
  padding:20px 20px 15px 20px;
  align-items:center;
  font-size:1.2rem;
  line-height:1.35;
  letter-spacing:1px;
  font-weight:300;
`;

export const TextSubtotal = styled.span`
  text-transform:uppercase;
`;

export const Amount = styled.span``;

export const CheckoutContainer = styled.div`
  padding:0 20px;
`;

export const CheckoutLink = styled((props: any) => <Link {...props} />)`
  background:#000;
  color:white!important;
  padding:12px;
  letter-spacing:1.5px;
  width:100%;
  margin:auto;
  margin-bottom:15px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:.9rem;
  font-weight:300;
  transition:0.4s;
  text-transform:uppercase;
  cursor:pointer;

  &:hover {
    opacity:.85;
    background:#000000!important;
    transition:0.7s;
    color:white!important;
  }
`;