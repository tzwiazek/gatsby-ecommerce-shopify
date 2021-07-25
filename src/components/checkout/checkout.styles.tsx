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