import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function NewsMoreButton({ clickListener }) {
  return (
    <Button onClick={clickListener}>
      <span>More</span>
      <img src="/images/icon/plus_button.svg" alt="" />
    </Button>
  );
}

export default NewsMoreButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px auto 0px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.56px;
  text-align: left;
  color: var(--primary-primary-in-light);

  span {
    margin-right: 8px;
  }

  cursor: pointer;

  ${mp[0]} {
    font-size: 16px;
    line-height: 1.56;
    letter-spacing: 0.16px;
  }

  ${mp[0]} {
    font-size: 24px;
    line-height: 1.58;
    letter-spacing: 0.24px;
  }
`;
