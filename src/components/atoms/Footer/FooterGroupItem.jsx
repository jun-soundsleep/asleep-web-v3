import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function FooterGroupItem({ item, margin, href }) {
  return (
    <Container margin={margin}>
      <Link href={href}>
        <a>{item}</a>
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
  color: var(--brownish-grey);
  cursor: pointer;

  & :hover {
    text-decoration: underline;
    color: var(--black);
  }
`;
