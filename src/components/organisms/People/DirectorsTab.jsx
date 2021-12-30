import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleSoleSection from './PeopleSoleSection';
import SectionContainer from '../../atoms/people/SectionContainer';

function DirectorsTab() {
  const { t } = useTranslation();
  const paulName = t('people:paul_name');
  const paulBody = t('people:paul_body');
  return (
    <SectionContainer>
      <PeopleSoleSection
        src={[
          '/images/people/solo/1_Paul_s_2x.jpg',
          '/images/people/solo/1_Paul2_m_2x.jpg',
          '/images/people/solo/1_Paul_l_2x.jpg'
        ]}
        name={paulName}
        body={paulBody}
        href={'https://medium.com/asleepblog/people-in-asleep-df3822468aa6'}
      />
    </SectionContainer>
  );
}

export default DirectorsTab;
