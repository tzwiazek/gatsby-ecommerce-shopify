import React from 'react';
import {
  HeaderTitleWrapper,
  HeaderTitleContainer,
  HeaderTitle,
  Text
} from './category-title.styles';

export default function CategoryTitle({
  title,
  description
}: {
  title: string;
  description: string;
}): JSX.Element {
  return (
    <>
      <HeaderTitleWrapper>
        <HeaderTitleContainer>
          <HeaderTitle>{title}</HeaderTitle>
          <Text>{description}</Text>
        </HeaderTitleContainer>
      </HeaderTitleWrapper>
    </>
  );
}
