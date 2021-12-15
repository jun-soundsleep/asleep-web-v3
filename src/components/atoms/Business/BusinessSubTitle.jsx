import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import { MXFlexCentering } from '../../mixin/MXFlex';

function BusinessSubTitle({ margin, item }) {
  return (
    <BusinessSubTitleContainer margin={margin}>
      <BusinessSubTitleItem>{item}</BusinessSubTitleItem>
    </BusinessSubTitleContainer>
  );
}

export default BusinessSubTitle;

const BusinessSubTitleContainer = styled(MXFlexCentering)`
  margin: ${({ margin }) => margin && margin};
  max-width: 320px;
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 4px 70px 0 rgba(214, 214, 214, 0.25);
  background-color: var(--text-in-dark-text-00);

  ${mp[0]} {
    max-width: 560px;
    padding: 39px 42px;
  }

  ${mp[1]} {
    max-width: 1440px;
    padding: 88px 155px 73px;
  }
`;

const BusinessSubTitleItem = styled.h2`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.72px;
  text-align: center;
  color: var(--text-in-light-text-05);

  ${mp[0]} {
    line-height: 1.56;
    letter-spacing: -0.72px;
  }

  ${mp[1]} {
    font-size: 36px;
    line-height: 1.58;
    letter-spacing: -1.62px;
  }
`;
