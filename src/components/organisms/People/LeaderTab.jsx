import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleSoleSection from './PeopleSoleSection';
import SectionContainer from '../../atoms/people/SectionContainer';

function LeaderTab(props) {
  const { t } = useTranslation();
  const davidName = t('people:david_name');
  const davidBody = t('people:david_body');
  const louisName = t('people:louise_name');
  const louisBody = t('people:louise_body');
  const jadenName = t('people:jaden_name');
  const jadenBody = t('people:jaden_body');

  return (
    <SectionContainer>
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
        href={
          'https://medium.com/asleepblog/people-in-asleep-대기업의-오퍼를-거절하고-창업에-뛰어든-에이슬립-cro의-이야기-587548f78dc7?p=587548f78dc7'
        }
      />
      <PeopleSoleSection
        src={[
          '/images/people/solo/1_Jaden_s_2x.jpg',
          '/images/people/solo/1_Jaden_m_2x.jpg',
          '/images/people/solo/1_Jaden_l_2x.jpg'
        ]}
        name={jadenName}
        body={jadenBody}
        href={
          'https://medium.com/asleepblog/people-in-asleep-이게되나-를-이게-된다-로-만드는-에이슬립의-cto-3c25d60c5605'
        }
      />
    </SectionContainer>
  );
}

export default LeaderTab;
