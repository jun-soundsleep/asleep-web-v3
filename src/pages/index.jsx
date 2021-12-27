import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import AsleepLayout from '../../src/components/organisms/AppLayout/AsleepLayout';
import MainBigImageSection from '../components/organisms/Main/MainBigImageSection';
import MainTechSection from '../components/organisms/Main/MainTechSection';
import MainBusinessSection from '../components/organisms/Main/MainBusinessSection';
import MainPeopleSection from '../components/organisms/Main/MainPeopleSection';
import { mp } from '../../styles/device';

const MainAsleepVisionComponent = dynamic(
  import('../components/organisms/Main/MainAsleepVision')
);

// eslint-disable-next-line react/display-name
const ForwardedRefComponent = forwardRef((props, ref) => {
  return <MainAsleepVisionComponent {...props} forwardedRef={ref} />;
});

export default function Index() {
  const section = React.createRef();

  const goToNextSection = () => {
    section.current?.scrollIntoView({
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
        <Wrapper>
          <MainBigImageSection clickListener={goToNextSection} />
          <ForwardedRefComponent ref={section} />
          <MainTechSection />
          <MainBusinessSection />
          <MainPeopleSection />
        </Wrapper>
      </AsleepLayout>
    </>
  );
}

const Wrapper = styled.div`
  padding-bottom: 140px;

  ${mp[1]} {
    padding-bottom: 280px;
  }
`;
