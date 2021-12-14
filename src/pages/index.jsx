import styled from '@emotion/styled';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import AsleepLayout from '../../src/components/organisms/AppLayout/AsleepLayout';
import MainBigImageSection from '../components/organisms/Main/MainBigImageSection';
import MainAsleepVision from '../components/organisms/Main/MainAsleepVision';

export default function Index() {
  const { t, lang } = useTranslation();
  const asleepWorld = t('main:the_world_that_we_dream_of');

  return (
    <>
      <Head>
        <title>Asleep Web</title>
      </Head>
      <AsleepLayout>
        <MainBigImageSection />
        <MainAsleepVision />
      </AsleepLayout>
    </>
  );
}

const ImageTest = styled.div`
  background: url('https://www.lunit.io/img/news/hero.jpg');
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
`;
