import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function CategoryTab({ item, active, clickListener }) {
  return (
    <Content active={active} onClick={clickListener}>
      {item}
    </Content>
  );
}

export default CategoryTab;

const Content = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 11px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.72px;
  text-align: left;
  color: ${({ active }) =>
    active ? 'var(--components-components-02)' : 'var(--sub-sub-05)'};

  border-radius: 13px;
  background-color: ${({ active }) =>
    active ? 'var(--sub-sub-05)' : 'var(--components-components-02)'};
  cursor: pointer;

  ${mp[0]} {
    padding: 11px 9.5px;
    height: 45px;
    font-size: 13px;
  }

  ${mp[1]} {
    height: 98px;
    padding: 26px 30px;
    font-size: 24px;
    line-height: 1.64;
    letter-spacing: -1.26px;
    border-radius: 24px;
  }
`;
