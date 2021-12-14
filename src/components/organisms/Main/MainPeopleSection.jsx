import React from 'react';
import styled from '@emotion/styled';
import useTranslate from 'next-translate/useTranslation';
import MainCardLabel from '../../atoms/Main/MainCardLabel';
import MainCard from '../../mocules/Main/MainCard';
import { mp } from '../../../../styles/device';

function MainPeopleSection(props) {
  const { t } = useTranslate();
  const title = t('main:bringin_imaginations_to_life');
  const secondTitle = t('main:life_as_a_member_of_asleep');
  return (
    <MainPeopleSectionContainer>
      <MainCardLabel item={'People'} />
      <CardContainer>
        <MainCard
          src="/images/main/home_8_s_2x.jpg"
          srcM="/images/main/home_8_m_2x.jpg"
          srcL="/images/main/home_8_l_2x.jpg"
          href={'/'}
          title={title}
          margin="32px auto 0px"
          category={'People'}
        />
        <MainCard
          src="/images/main/home_9_s_2x.jpg"
          srcM="/images/main/home_9_m_2x.jpg"
          srcL="/images/main/home_9_l_2x.jpg"
          href={'/'}
          title={secondTitle}
          margin="32px auto 0px"
          category={'People  |  Blog Interview'}
        />
      </CardContainer>
    </MainPeopleSectionContainer>
  );
}

export default MainPeopleSection;

const MainPeopleSectionContainer = styled.div`
  padding: 43px 0 64px;
  min-height: 704px;

  ${mp[0]} {
    min-height: 1004px;
  }

  ${mp[1]} {
    min-height: 2004px;
  }
`;

const CardContainer = styled.div`
  width: 320px;
  height: 212px;
  margin: 0 auto;
  ${mp[0]} {
    width: 560px;
    height: 310px;
  }

  ${mp[1]} {
    width: 1400px;
    height: 725px;
  }
`;
