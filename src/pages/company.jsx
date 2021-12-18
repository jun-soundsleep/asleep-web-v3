import React from 'react';
import styled from '@emotion/styled';
import AsleepLayout from '../components/organisms/AppLayout/AsleepLayout';
import CompanyMainSection from '../components/organisms/Company/CompanyMainSection';
import MissionSection from '../components/organisms/Company/MissionSection';
import CompanyBodySection from '../components/organisms/Company/CompanyBodySection';
import CompanyVisionSection from '../components/organisms/Company/CompanyVisionSection';
import CompanyFaithSection from '../components/organisms/Company/CompanyFaithSection';
import CompanyHistorySection from '../components/organisms/Company/CompanyHistorySection';

function Company(props) {
  return (
    <AsleepLayout>
      <CompanyMainSection
        title={'asdasdlkasjdlaksjdlaksdjlaksjd'}
        subTitle={'asldkjasd'}
      />
      <MissionSection
        missionTitle={'Mission'}
        missionBody={
          'Taking a third of our day, sleep is an essential part of our lives. Asleep seeks to unveil what fundamentally causes sleep disorders with medical experts and aspires to find a non-temporary solution that can permanently liberate us from insomnia. We are the innovators of sleep tech, leading the sleep tech industry with our sleep analysis and AI technology.'
        }
      />
      <CompanyBodySection
        item={
          'Asleep started with these simple questions. How can people sleep better at night and start the day feeling refreshed? Not getting enough sleep at night negatively affects daytime activities, which means that sleep can reduce the overall quality of life. Asleep started with these simple questions. How can people sleep better at night and start the day feeling refreshed? Not getting enough sleep at night negatively affects daytime activities, which means that sleep can reduce the overall quality of life.Asleep started with these simple questions. How can people sleep better at night and start the day feeling refreshed? Not getting enough sleep at night negatively affects daytime activities, which means that sleep can reduce the overall quality of life.Asleep started with these simple questions. How can people sleep better at night and start the day feeling refreshed? Not getting enough sleep at night negatively affects daytime activities, which means that sleep can reduce the overall quality of life.Asleep started with these simple questions. How can people sleep better at night and start the day feeling refreshed? Not getting enough sleep at night negatively affects daytime activities, which means that sleep can reduce the overall quality of life.'
        }
      />
      <CompanyVisionSection item={'asldjalskdj'} />
      <CompanyFaithSection />
      <CompanyHistorySection />
    </AsleepLayout>
  );
}

export default Company;
