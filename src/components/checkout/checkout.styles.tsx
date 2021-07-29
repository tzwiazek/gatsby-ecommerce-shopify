// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { CardElement } from "react-stripe-elements";
import styled from "styled-components";

export const CardElementStyled = styled(CardElement)`
  margin-top: 10px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px 10px;
  font-size: 16px;
`

export const CardStyled = styled.section`
  margin-top: 20px;

  input,
  button {
    width: 100%;
  }

  button {
    margin-top: 20px;
  }

  .empty-btn {
    margin-bottom: 30px;
  }
`

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
`

export const TR = styled.tr`
  text-align: center;
`

export const TH = styled.th`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`

export const TD = styled.td`
  border-bottom: 1px solid #ccc;
`

export const ProductName = styled.h3`
  padding-top: 36px;
  text-align: left;
`

export const Payment = styled.section`
  .total {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px;
  }

  .golden {
    background: #f2eee2;
    font-weight: bold;
    padding: 10px;
  }

  .num {
    text-align: right;
  }

  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px;
  }

  @media screen and (max-width: 699px) {
    width: 94%;
    margin-left: 2%;
  }

  .total {
    width: 90%;
  }
`

export const ProductImg = styled.img`
  float: left;
  margin-right: 15px;
  width: 100px;
`

export const Loading = styled.section`
  display: flex;
  justify-content: center;
`

export const Success = styled.section`
  text-align: center;
`