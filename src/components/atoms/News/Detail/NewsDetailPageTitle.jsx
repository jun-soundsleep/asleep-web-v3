import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../.././../styles/device';

function NewsDetailPageTitle({ item }) {
  return <Title>{item}</Title>;
}

export default NewsDetailPageTitle;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.96px;
  text-align: left;
  color: var(--text-in-light-text-10);

  ${mp[0]} {
    font-size: 30px;
    line-height: 1.27;
    letter-spacing: -1.2px;
  }

  ${mp[1]} {
    font-size: 72px;
    line-height: 1.28;
    letter-spacing: -2.88px;
  }
`;
