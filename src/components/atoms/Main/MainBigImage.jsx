import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import { mp } from '../../../../styles/device';

function MainBigImage() {
  return (
    <>
      <Head>
        <link rel="preload" href="/images/main/home_s.jpg" as="image" />
        <link rel="preload" href="/images/main/home_m.jpg" as="image" />
        <link rel="preload" href="/images/main/home_l.jpg" as="image" />
      </Head>
      <ImageContainer />
    </>
  );
}

export default MainBigImage;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url('/images/main/home_s.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;

  ${mp[0]} {
    background: url('/images/main/home_m.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  ${mp[1]} {
    background: url('/images/main/home_l.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
`;
