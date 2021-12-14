import React from 'react';
import styled from '@emotion/styled';
import useTranslate from 'next-translate/useTranslation';
import MainCardLabel from '../../atoms/Main/MainCardLabel';
import MainCard from '../../mocules/Main/MainCard';
import { mp } from '../../../../styles/device';

function MainBusinessSection(props) {
  const { t } = useTranslate();
  const title = t(
    'main:making_history_in_the_sleep_tech_industry_with_ai_technology'
  );
  return (
    <MainBusinessSectionContainer>
      <MainCardLabel item={'Business'} />
      <CardContainer>
        <MainCard
          src="/images/main/home_7_s_2x.jpg"
          srcM="/images/main/home_7_m_2x.jpg"
          srcL="/images/main/home_7_l_2x.jpg"
          href={'/'}
          title={title}
          margin="32px auto 0px"
          category={'Business'}
        />
      </CardContainer>
    </MainBusinessSectionContainer>
  );
}

export default MainBusinessSection;

const MainBusinessSectionContainer = styled.div`
  padding: 43px 0 64px;
  /* min-height: 404px; */
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
