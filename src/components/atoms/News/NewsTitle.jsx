import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function NewsTitle({ item }) {
  return (
    <Head>
      {' '}
      {item.split('\n').map((line, idx) => (
        <>
          {line}
          <br />
        </>
      ))}
    </Head>
  );
}

export default NewsTitle;

const Head = styled.h1`
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -1.6px;
  text-align: center;
  color: var(--text-in-light-text-10);

  ${mp[0]} {
    font-size: 32px;
    line-height: 1.31;
    letter-spacing: -1.28px;

    & > br {
      display: none;
    }
  }

  ${mp[1]} {
    font-size: 72px;
    line-height: 1.28;
    letter-spacing: 0.72px;
  }
`;
