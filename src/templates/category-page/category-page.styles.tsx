import styled from 'styled-components';
import device from 'src/shared/responsive/Device';

export const CategoryContainer = styled.div<any>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1480px;
  padding: 0 20px;
`;

export const ProductsWrapper = styled.div<any>``;

export const CollectionTitle = styled.ul<any>`
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
  letter-spacing: 1.5px;
  margin: 30px 0;

  @media screen and ${device.mobileL} {
    font-size: 1.6rem;
  }

  @media screen and ${device.tablet} {
    font-size: 1.8rem;
  }
`;
export const ProductsContainer = styled.div<any>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;

  @media screen and ${device.tablet} {
    max-width: 1440px;
  }
`;
