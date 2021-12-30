import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import { mp } from '../../../../styles/device';

function PeopleBigImage(props) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/images/people/people_1_l_2x.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/images/people/people_1_m_2x.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/images/people/people_1_s_2x.jpg"
          as="image"
        />
      </Head>
      <ImageContainer />
    </>
  );
}

export default PeopleBigImage;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url('/images/people/people_1_s_2x.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;

  ${mp[0]} {
    background: url('/images/people/people_1_m_2x.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  ${mp[1]} {
    background: url('/images/people/people_1_l_2x.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
`;
