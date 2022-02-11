import React, { forwardRef } from 'react';
import dynamic from 'next/dynamic';
import AsleepLayout from '../../src/components/organisms/AppLayout/AsleepLayout';
import MainBigImageSection from '../components/organisms/Main/MainBigImageSection';
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
  const section = React.createRef();

  const goToNextSection = () => {
    section.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <AsleepLayout>
      <MainBigImageSection clickListener={goToNextSection} />
      <ForwardedRefComponent ref={section} />
      <MainTechSection />
      <MainBusinessSection />
      <MainPeopleSection />
    </AsleepLayout>
  );
}
