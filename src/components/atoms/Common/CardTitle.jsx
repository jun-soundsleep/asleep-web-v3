import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function CardTitle({ item, margin, whiteColor }) {
  return (
    <MainCardTitleContainer margin={margin} whiteColor={whiteColor}>
      {item}
    </MainCardTitleContainer>
  );
}

export default CardTitle;

const MainCardTitleContainer = styled.div`
  margin: ${({ margin }) => margin && margin};
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.16px;
  text-align: left;
  color: ${({ whiteColor }) =>
    whiteColor ? whiteColor : 'var(--text-in-light-text-10)'};
  ${mp[0]} {
    font-size: 20px;
  }

  ${mp[1]} {
    font-size: 46px;
  }
`;
