import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import IndexMainImage from '../components/atoms/IndexMainImage';
import IndexMainImageTest from '../components/atoms/IndexMainImageTest';
import { useEffect, useRef } from 'react';
import IndexMainImageFull from '../components/atoms/IndexMainImageFull';

export default function Index() {
  const { locale, locales, defaultLocale } = useRouter();
  const router = useRouter();
  const { t, lang } = useTranslation();
  const title = t('common:greeting');

  return (
    <div>
      <Head>
        <title>Asleep Web</title>
      </Head>
      <IndexMainImageFull
        src={'https://static.toss.im/3d/toss-im-web-intro-still-start.jpg'}
      />

      {/* <div>{t('common:greeting')}</div>
      <Link href="/" locale="en">
        <a>영어</a>
      </Link>
      <Link href="/" locale="ko">
        <a>한국어</a>
      </Link> */}
      {/* <img src="https://www.lunit.io/img/news/hero.jpg" alt="" /> */}
      {/* <ImageTestContainer>
        <ImageTest />
      </ImageTestContainer> */}
      {/* <IndexMainImageTest src={'https://www.lunit.io/img/news/hero.jpg'} /> */}
    </div>
  );
}

const ImageTestContainer = styled.div`
  /* position: relative; */
  /* height: 100%; */
  height: 100vh;
  /* width: 100vw; */
`;

const ImageTest = styled.div`
  background: url('https://www.lunit.io/img/news/hero.jpg');
  /* background-position-y: center; */
  /* background-position-x: center; */
  background-repeat: no-repeat;
  background-position: center;
  /* background-size: cover; */
  height: 100%;
`;
