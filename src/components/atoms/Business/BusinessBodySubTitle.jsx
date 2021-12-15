import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function BusinessBodySubTitle({ item }) {
  return <BusinessBodySubTitleContainer>{item}</BusinessBodySubTitleContainer>;
}

export default BusinessBodySubTitle;

const BusinessBodySubTitleContainer = styled.h3`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.72px;
  text-align: left;
  color: var(--text-in-light-text-08);

  ${mp[0]} {
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: -0.63px;
  }

  ${mp[1]} {
    font-size: 32px;
    line-height: 1.63;
    letter-spacing: -1.44px;
  }
`;
