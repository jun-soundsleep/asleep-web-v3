import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function NewsCardTag({ item, margin }) {
  return <Content margin={margin}>{item}</Content>;
}

export default NewsCardTag;

const Content = styled.span`
  margin: ${({ margin }) => margin && margin};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 11px;
  height: 23px;
  font-size: 10px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.45px;
  text-align: left;
  border-radius: 8px;
  color: var(--text-in-dark-text-03);
  background-color: var(--components-components-02);

  ${mp[0]} {
    padding: 11px 9.5px;
    height: 30px;
    font-size: 10px;
  }

  ${mp[1]} {
    padding: 11px 9.5px;
    height: 45px;
    font-size: 13px;
  }

  /* ${mp[1]} {
    height: 47px;
    padding: 26px 12.5px;
    font-size: 13px;
    line-height: 1.64;
    letter-spacing: -1.26px;
  } */
`;
