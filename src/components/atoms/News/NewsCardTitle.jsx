import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function NewsCardTitle({ item }) {
  return <Contents dangerouslySetInnerHTML={{ __html: item }} />;
}

export default NewsCardTitle;

const Contents = styled.h2`
  word-break: break-all;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.72px;
  text-align: left;
  color: var(--text-in-light-text-10);

  ${mp[0]} {
    font-size: 17px;
    line-height: 1.41;
    letter-spacing: -0.68px;
  }

  ${mp[1]} {
    font-size: 40px;
    line-height: 1.35;
  }
`;
