import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function BusinessBodyContent({ item }) {
  return (
    <BusinessBodyContentSubTitleContainer>
      {item}
    </BusinessBodyContentSubTitleContainer>
  );
}

export default BusinessBodyContent;

const BusinessBodyContentSubTitleContainer = styled.h3`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.72px;
  text-align: left;
  color: var(--text-in-light-text-06);

  ${mp[0]} {
    max-width: 360px;
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: -0.63px;
  }

  ${mp[1]} {
    max-width: 726px;
    font-size: 32px;
    line-height: 1.63;
    letter-spacing: -1.44px;
  }
`;
