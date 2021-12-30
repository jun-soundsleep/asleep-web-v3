import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { mp } from '../../../../styles/device';

function BigArrrowButton({ clickListener }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={'/images/icon/components-icons-icons-chevron-down-white.svg'}
          as="image"
        />
      </Head>
      <Button onClick={clickListener}>
        <ArrowContainer>
          <Arrow />
        </ArrowContainer>
      </Button>
    </>
  );
}

export default BigArrrowButton;

const Button = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  margin-bottom: 64px;
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const ArrowContainer = styled.div`
  width: 28px;
  height: 28px;
  animation: ${bounce} 1.5s ease infinite;
  cursor: pointer;

  ${mp[0]} {
    width: 34px;
    height: 34px;
  }

  ${mp[1]} {
    width: 56px;
    height: 56px;
  }
`;

const Arrow = styled.div`
  background: url('/images/icon/components-icons-icons-chevron-down-white.svg');
  background-size: cover;
  width: 100%;
  height: 100%;
`;
