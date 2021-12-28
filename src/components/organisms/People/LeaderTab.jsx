import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import PeopleSoleSection from './PeopleSoleSection';
import { mp } from '../../../../styles/device';

function LeaderTab(props) {
  const { t } = useTranslation();
  const davidName = t('people:david_name');
  const davidBody = t('people:david_body');
  const louisName = t('people:louise_name');
  const louisBody = t('people:louise_body');
  const jadenName = t('people:jaden_name');
  const jadenBody = t('people:jaden_body');

  return (
    <>
      <PeopleSoleSection
        src={[
          '/images/people/solo/1_David_s_2x.jpg',
          '/images/people/solo/1_David2_m_2x.jpg',
          '/images/people/solo/1_David2_l_2x.jpg'
        ]}
        name={davidName}
        body={davidBody}
        href={
          'https://medium.com/asleepblog/people-in-asleep-개발자는-4번째-창업-아이템으로-왜-잠을-골랐을까-182b1168dac9'
        }
      />
      <PeopleSoleSection
        src={[
          '/images/people/solo/1_Louis_s_2x.jpg',
          '/images/people/solo/1_Louis_m_2x.jpg',
          '/images/people/solo/1_Louis_l_2x.jpg'
        ]}
        name={louisName}
        body={louisBody}
        href={'https://asleep.ai'}
      />
      <PeopleSoleSection
        src={[
          '/images/people/solo/1_Jaden_s_2x.jpg',
          '/images/people/solo/1_Jaden_m_2x.jpg',
          '/images/people/solo/1_Jaden_l_2x.jpg'
        ]}
        name={jadenName}
        body={jadenBody}
        href={'https://asleep.ai'}
      />
    </>
  );
}

export default LeaderTab;
