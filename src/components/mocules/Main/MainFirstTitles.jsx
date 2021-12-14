import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import MainBigTitle from '../../atoms/Main/MainBigTitle';
import MainSubTitle from '../../atoms/Main/MainBigSubTitle';
import Head from 'next/head';
import { keyframes } from '@emotion/react';
import { mp } from '../../../../styles/device';

function MainFirstTitles({ clickListener }) {
  const { t } = useTranslation();
  const mainTitle = t('main:main_title');
  const subTitle = t('main:sub_title');

  return (
    <>
      <Head>
        <link
          rel="preload"
          href={'/images/icon/components-icons-icons-chevron-down-white.svg'}
          as="image"
        />
      </Head>
      <ContentsContainer>
        <MainBigTitle item={mainTitle} margin=" 0px 0px 32px 0px" />
        <MainSubTitle item={subTitle} />
      </ContentsContainer>
      <button onClick={clickListener}>
        <ArrowContainer>
          <Arrow />
        </ArrowContainer>
      </button>
    </>
  );
}

export default MainFirstTitles;

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

const ContentsContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ArrowContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  margin-bottom: 64px;
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
