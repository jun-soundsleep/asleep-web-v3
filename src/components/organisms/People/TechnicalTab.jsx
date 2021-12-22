import React from 'react';
import styled from '@emotion/styled';
import PeopleBodyCard from '../../mocules/people/PeopleBodyCard';
import PeopleBodyFullImage from '../../mocules/people/PeopleBodyFullImage';
import useTranslation from 'next-translate/useTranslation';
import { mp } from '../../../../styles/device';
import SectionContainer from '../../atoms/people/SectionContainer';

function TechnicalTab() {
  const { t } = useTranslation();
  const title = t('people:tech_title');
  const cardFirst = t('people:tech_card_1');
  const cardSecond = t('people:tech_card_2');
  const cardThird = t('people:tech_card_3');

  return (
    <SectionContainer>
      <PeopleBodyFullImage
        src={[
          '/images/people/people_3_s_2x.jpg',
          '/images/people/people_3_m_2x.jpg',
          '/images/people/people_3_l_2x.jpg'
        ]}
        title={title}
        href={'https://asleep.ai/en'}
      />
      <CardContainer style={{ marginTop: '48px' }}>
        <PeopleBodyCard
          title={'Technical Product Team'}
          subtitle={cardFirst}
          href={'/en'}
        />
      </CardContainer>
      <CardOverTablet>
        <CardContainer>
          <PeopleBodyCard
            title={'App/Web Service Team'}
            subtitle={cardSecond}
            href={'/en'}
          />
        </CardContainer>
        <CardContainer>
          <PeopleBodyCard
            title={'AI Service Team'}
            subtitle={cardThird}
            href={'/en'}
          />
        </CardContainer>
      </CardOverTablet>
    </SectionContainer>
  );
}

export default TechnicalTab;

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

const CardOverTablet = styled.div`
  display: block;
  ${mp[0]} {
    display: flex;
    max-width: 560px;
    margin: 20px auto;

    & > div {
      width: 270px;
      height: 312px;
    }
  }

  ${mp[1]} {
    display: flex;
    max-width: 1400px;
    margin: 60px auto;

    & > div {
      width: 670px;
      height: 670px;
    }
  }
`;
