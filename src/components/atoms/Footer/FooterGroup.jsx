import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function FooterGroup({ title, margin }) {
  return <Title margin={margin}>{title}</Title>;
}

export default FooterGroup;

const Title = styled.li`
  margin: ${({ margin }) => margin && margin};
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.86;
  letter-spacing: -0.63px;
  text-align: left;
  color: var(--black);

  ${mp[1]} {
    font-size: 22px;
  }
`;
