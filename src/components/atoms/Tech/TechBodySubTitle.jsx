import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function TechBodySubTitle({ item }) {
  return <TechBodySubTitleContainer>{item}</TechBodySubTitleContainer>;
}

export default TechBodySubTitle;

const TechBodySubTitleContainer = styled.h2`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.72px;
  text-align: center;
  color: var(--text-in-dark-text-02);

  ${mp[0]} {
    font-size: 16px;
    line-height: 1.56;
    letter-spacing: -0.72px;
  }

  ${mp[1]} {
    font-size: 36px;
    line-height: 1.67;
    letter-spacing: -1.62px;
  }
`;
