import React, { useState } from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function CompanyVisionHoveredContents({ item }) {
  return <HoverContents>{item}</HoverContents>;
}

export default CompanyVisionHoveredContents;

const HoverContents = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 272px;
  padding: 33px 20px 24px;
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
  box-shadow: 0 4px 30px 0 rgba(183, 183, 183, 0.25);
  background-color: var(--alpha-alpha-04);
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.56px;
  text-align: left;
  color: var(--text-in-light-text-04);

  :after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--alpha-alpha-04);
    box-shadow: 0 4px 30px 0 rgba(183, 183, 183, 0.25);
    content: '';
    position: absolute;
    top: -10px;
    left: 20px;
  }

  ${mp[0]} {
    right: 0;
    transform: translateX(-50%);
    width: 380px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: -0.54px;
  }

  ${mp[1]} {
    width: 820px;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
  }
`;
