import React from 'react';
import styled from '@emotion/styled';
import { MXFlexCenteringSB } from '../../mixin/MXFlex';
import { mp } from '../../.././../styles/device';

function NewsDetailPageTag({ width, height, background, color, item }) {
  return <Content>{item}</Content>;
}

export default NewsDetailPageTag;

const Content = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 11px 15px;
  height: 36px;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: center;
  color: var(--text-in-dark-text-03);
  border-radius: 8px;
  background-color: var(--components-components-02);

  ${mp[0]} {
    height: 40px;
    padding: 8.5px 20px;
    font-size: 13px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.77;
    letter-spacing: -0.59px;
  }

  ${mp[1]} {
    height: 61px;
    padding: 11.5px 33.5px;
    font-size: 13px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.77;
    letter-spacing: -0.59px;
  }
`;
