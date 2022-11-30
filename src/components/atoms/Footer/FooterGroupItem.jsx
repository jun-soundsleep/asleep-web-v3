import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function FooterGroupItem({ item, margin, href, darkMode }) {
  return (
    <Container margin={margin} darkMode={darkMode}>
      <Link href={href}>
        {item}
      </Link>
    </Container>
  );
}

export default FooterGroupItem;

const Container = styled.li`
  margin: ${({ margin }) => (margin ? margin : ' 0px 0px 12px 0px')};
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.86;
  letter-spacing: -0.63px;
  text-align: left;
  color: ${({ darkMode }) =>
    darkMode
      ? ' var(--text-in-dark-text-03) '
      : 'var(--text-in-light-text-06)'};
  cursor: pointer;

  & :hover {
    text-decoration: underline;
    color: ${({ darkMode }) =>
      darkMode
        ? ' var(--text-in-dark-text-01) '
        : 'var(--text-in-light-text-06)'};
  }

  ${mp[0]} {
    line-height: 1.73;
    letter-spacing: 0.11px;
    margin: ${({ margin }) => (margin ? margin : ' 0px 0px 6px 0px')};
  }

  ${mp[1]} {
    font-size: 16px;
  }
`;
