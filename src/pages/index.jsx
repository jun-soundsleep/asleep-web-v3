import React, { useRef, forwardRef } from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import AsleepLayout from '../../src/components/organisms/AppLayout/AsleepLayout';
import MainBigImageSection from '../components/organisms/Main/MainBigImageSection';
import MainAsleepVision from '../components/organisms/Main/MainAsleepVision';
import MainTechSection from '../components/organisms/Main/MainTechSection';
import MainBusinessSection from '../components/organisms/Main/MainBusinessSection';
import MainPeopleSection from '../components/organisms/Main/MainPeopleSection';

const MainAsleepVisionComponent = dynamic(
  import('../components/organisms/Main/MainAsleepVision')
);

// eslint-disable-next-line react/display-name
const ForwardedRefComponent = forwardRef((props, ref) => {
  return <MainAsleepVisionComponent {...props} forwardedRef={ref} />;
});

export default function Index() {
  const { t, lang } = useTranslation();
  const asleepWorld = t('main:the_world_that_we_dream_of');

  const foo = React.createRef();

  const goToNextSection = () => {
    foo.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Head>
        <title>Asleep Web</title>
      </Head>
      <AsleepLayout>
        <MainBigImageSection clickListener={goToNextSection} />
        <ForwardedRefComponent ref={foo} />
        <MainTechSection />
        <MainBusinessSection />
        <MainPeopleSection />
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
