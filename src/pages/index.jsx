import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import AsleepLayout from '../../src/components/organisms/AppLayout/AsleepLayout';
import MainBigImageSection from '../components/organisms/Main/MainBigImageSection';
import MainCard from '../components/mocules/Main/MainCard';

export default function Index() {
  const { t, lang } = useTranslation();
  const title = t('common:greeting');

  return (
    <>
      <Head>
        <title>Asleep Web</title>
      </Head>
      <AsleepLayout>
        <MainBigImageSection />
        <MainCard src="https://www.lunit.io/img/news/hero.jpg" />
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
