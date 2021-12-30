import React, { forwardRef } from 'react';
import dynamic from 'next/dynamic';
import AsleepLayout from '../components/organisms/AppLayout/AsleepLayout';
import PeopleMainSection from '../components/organisms/People/PeopleMainSection';

const BodyComponent = dynamic(
  import('../components/organisms/People/PeopBodySection')
);

// eslint-disable-next-line react/display-name
const ForwardedOverTabletThumbnailContainer = forwardRef((props, ref) => {
  return <BodyComponent {...props} forwardedRef={ref} />;
});

function People() {
  const body = React.createRef();

  const goToBodySection = () => {
    body.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <AsleepLayout>
      <PeopleMainSection clickListener={goToBodySection} />
      <ForwardedOverTabletThumbnailContainer ref={body} />
    </AsleepLayout>
  );
}

export default People;
