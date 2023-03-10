import React from 'react';
import styled from '@emotion/styled';
import useTranslate from 'next-translate/useTranslation';
import MainCardLabel from '../../atoms/Main/MainCardLabel';
import MainCard from '../../mocules/Main/MainCard';
import { mp } from '../../../../styles/device';
import MainSectionContainer from '../../atoms/Main/MainSectionContainer';

function MainBusinessSection(props) {
  const { t } = useTranslate();
  const title = t(
    'main:making_history_in_the_sleep_tech_industry_with_ai_technology'
  );
  return (
    <MainSectionContainer>
      <MainCardLabel item={'Business'} />
      <CardContainer>
        <MainCard
          src="/images/main/home_7_s_2x.jpg"
          srcM="/images/main/home_7_m_2x.jpg"
          srcL="/images/main/home_7_l_2x.jpg"
          href={'/business'}
          title={title}
          category={'Business'}
          whiteDim={true}
          moreButtonColor={'var(--sub-sub-04)'}
        />
      </CardContainer>
    </MainSectionContainer>
  );
}

export default MainBusinessSection;

const MainBusinessSectionContainer = styled.div`
  padding: 43px 0 64px;
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
