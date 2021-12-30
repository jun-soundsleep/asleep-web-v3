import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../../styles/device';

function NewsDetailPageBody({ item }) {
  return <Body dangerouslySetInnerHTML={{ __html: item }} />;
}

export default NewsDetailPageBody;

const Body = styled.p`
  width: 100%;
  font-size: 28px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -1.26px;
  text-align: left;
  color: var(--text-in-light-text-04);
  margin: 44px 20px;

  & > b {
    color: var(--text-in-light-text-10);
  }

  ${mp[0]} {
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: -0.63px;
  }
  ${mp[1]} {
    font-size: 28px;
  }
`;
