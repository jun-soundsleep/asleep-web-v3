import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import BigTitle from '../../atoms/Common/BigTitle';
import MainSubTitle from '../../atoms/Main/MainBigSubTitle';
import BigArrrowButton from '../../atoms/Common/BigArrrowButton';

function PeopleMainTitle({ clickListener }) {
  const { t } = useTranslation();
  const mainTitle = t('people:title');
  const subTitle = t('people:sub_title');

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
        <BigTitle item={mainTitle} margin="0px 0px 32px 0px" />
        <MainSubTitle item={subTitle} />
      </ContentsContainer>
      <BigArrrowButton clickListener={clickListener} />
    </>
  );
}

export default PeopleMainTitle;

const ContentsContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
