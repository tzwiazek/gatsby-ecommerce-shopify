import styled from 'styled-components';
import device from "shared/responsive/Device";

export const HeaderTitleWrapper = styled.header<any>`
  width:100%;
  text-align:center;
  border-bottom:1px solid #e5e5e5;
  padding:25px 0;

  @media screen and ${device.laptop} {
    padding:50px 0;
  }
`;

export const HeaderTitleContainer = styled.div<any>`
	width:100%;
	text-align:center;
`;

export const HeaderTitle = styled.h1<any>`
  font-size:1.6rem;
  font-weight:400;
  margin:0 0 18px 0;
  letter-spacing:1.5px;
  width:100%;

  @media screen and ${device.laptop} {
    letter-spacing:1.5px;
    font-weight:300;
    font-size:1.8rem;
  }
`;

export const Text = styled.span<any>`
  letter-spacing:.5px;
  font-weight:300;
  font-size:.9rem;
  color:#7f7f7f;
  width:90%;
  display:inline-block;

  @media screen and ${device.laptop} {
    width:75%;
  }

  @media screen and ${device.laptopL} {
    width:60%;
  }

  @media screen and ${device.desktop} {
    width:50%;
  }
`;