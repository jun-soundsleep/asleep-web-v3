import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import TechTitle from '../../atoms/Tech/TechTitle';
import TechSubText from '../../mocules/Tech/TechSubText';
import Head from 'next/head';
import BigArrrowButton from '../../atoms/Common/BigArrrowButton';

function TechMainSection({ title, srcM, srcL, clickListener }) {
  return (
    <>
      <Head>
        <link rel="preload" href={srcM} as="image" />
        <link rel="preload" href={srcL} as="image" />
      </Head>
      <TechMainSectionContainer srcM={srcM} srcL={srcL}>
        <TechTitle item={title} />
        <TechSubText />
        <BigArrrowButton clickListener={clickListener} />
      </TechMainSectionContainer>
    </>
  );
}

export default TechMainSection;

const TechMainSectionContainer = styled.section`
  position: relative;
  height: 100vh;
  background-color: var(--backgorund-bg-05);

  ${mp[0]} {
    background: url(${({ srcM }) => srcM && srcM}) 50% / cover no-repeat;
    height: auto;
    padding: 198px 0px 200px;
  }

  ${mp[1]} {
    height: auto;
    background: url(${({ srcL }) => srcL && srcL}) 50% / cover no-repeat;
    padding-top: 338px;
    padding-bottom: 500px;
  }
`;
