import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import AsleepLayout from '../../src/components/organisms/AppLayout/AsleepLayout';
import MainBigImageSection from '../components/organisms/Main/MainBigImageSection';

export default function Index() {
  const { locale, locales, defaultLocale } = useRouter();
  const router = useRouter();
  const { t, lang } = useTranslation();
  const title = t('common:greeting');

  return (
    <>
      <Head>
        <title>Asleep Web</title>
      </Head>
      {/* <IndexMainImageFull
        src={'https://static.toss.im/3d/toss-im-web-intro-still-start.jpg'}
      /> */}
      {/* <img src="https://www.lunit.io/img/news/hero.jpg" alt="" /> */}
      {/* <ImageTestContainer>
        <ImageTest />
      </ImageTestContainer> */}
      <AsleepLayout>
        <MainBigImageSection />
      </AsleepLayout>
    </>
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
