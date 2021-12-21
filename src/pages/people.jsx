import React from 'react';
import AsleepLayout from '../components/organisms/AppLayout/AsleepLayout';
import PeopBodySection from '../components/organisms/People/PeopBodySection';
import PeopleMainSection from '../components/organisms/People/PeopleMainSection';

function People() {
  return (
    <AsleepLayout>
      <PeopleMainSection />
      <PeopBodySection />
    </AsleepLayout>
  );
}

export default People;
