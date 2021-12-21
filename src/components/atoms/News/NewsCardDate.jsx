import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function NewsCardDate({ item }) {
  return <Contents>{item}</Contents>;
}

export default NewsCardDate;

const Contents = styled.h2`
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.45px;
  text-align: left;
  color: var(--text-in-light-text-02);

  ${mp[0]} {
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: -0.5px;
  }

  ${mp[1]} {
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: -1.08px;
  }
`;
