import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function FooterGroup({ title, margin, darkMode }) {
  return (
    <Title margin={margin} darkMode={darkMode}>
      {title}
    </Title>
  );
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
  color: ${({ darkMode }) =>
    darkMode ? 'var(--very-light-pink-two)' : 'var(--black)'};

  ${mp[0]} {
    line-height: 1.67;
    letter-spacing: 0.12px;
    margin-bottom: 12px;
  }

  ${mp[1]} {
    font-size: 18px;
  }
`;
