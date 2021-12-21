import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../.././../styles/device';

function NewsDetailPageDate({ item }) {
  return <Date>{item}</Date>;
}

export default NewsDetailPageDate;

const Date = styled.span`
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  color: var(--text-in-dark-text-03);

  ${mp[0]} {
    font-size: 11px;
    line-height: 1.73;
    letter-spacing: 0.11px;
  }

  ${mp[1]} {
    font-size: 24px;
    line-height: 1.58;
    letter-spacing: -1.08px;
  }
`;
