import React from 'react';
import styled from '@emotion/styled';
import PeopleBodyCard from '../../mocules/people/PeopleBodyCard';
import PeopleBodyFullImage from '../../mocules/people/PeopleBodyFullImage';
import useTranslation from 'next-translate/useTranslation';
import { mp } from '../../../../styles/device';
import SectionContainer from '../../atoms/people/SectionContainer';

function RndTab(props) {
  const { t } = useTranslation();
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
        title={
          'R&D Division is in charge of source technology development and works to make Asleep more competitive.'
        }
        href={'https://asleep.ai/en'}
      />
      <CardContainer style={{ marginTop: '48px' }}>
        <PeopleBodyCard
          title={'Sleep Sensor Team'}
          subtitle={cardFirst}
          href={'/en'}
        />
      </CardContainer>
      <CardContainer>
        <PeopleBodyCard
          title={'AI Reseaerch Team'}
          subtitle={cardSecond}
          href={'/en'}
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
