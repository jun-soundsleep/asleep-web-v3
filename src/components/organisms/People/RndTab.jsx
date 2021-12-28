import React from 'react';
import styled from '@emotion/styled';
import PeopleBodyCard from '../../mocules/people/PeopleBodyCard';
import PeopleBodyFullImage from '../../mocules/people/PeopleBodyFullImage';
import useTranslation from 'next-translate/useTranslation';
import { mp } from '../../../../styles/device';
import SectionContainer from '../../atoms/people/SectionContainer';

function RndTab(props) {
  const { t } = useTranslation();
  const title = t('people:rnd_title');
  const cardFirst = t('people:rd_card_1');
  const cardSecond = t('people:rd_card_2');

  return (
    <SectionContainer>
      <PeopleBodyFullImage
        src={[
          '/images/people/people_2_s_2x.jpg',
          '/images/people/people_2_m_2x.jpg',
          '/images/people/people_2_l_2x.jpg'
        ]}
        title={title}
        href={
          'https://aboard-haircut-fe6.notion.site/Job-Board-fd68685235fd47fb98e0932bdeff6ebd'
        }
      />
      <CardContainer style={{ marginTop: '48px' }}>
        <PeopleBodyCard
          title={'Sleep Sensor Team'}
          subtitle={cardFirst}
          href={'/people/rnd'}
        />
      </CardContainer>
      <CardContainer>
        <PeopleBodyCard
          title={'AI Research Team'}
          subtitle={cardSecond}
          href={'/people/research'}
        />
      </CardContainer>
    </SectionContainer>
  );
}

export default RndTab;

const CardContainer = styled.div`
  width: 320px;
  height: 264px;
  margin: 0px auto 24px;

  ${mp[0]} {
    width: 560px;
    height: 310px;
  }

  ${mp[1]} {
    width: 1400px;
    height: 674px;
  }
`;
