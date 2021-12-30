import React from 'react';
import styled from '@emotion/styled';
import useTranslate from 'next-translate/useTranslation';
import MainCardLabel from '../../atoms/Main/MainCardLabel';
import MainCard from '../../mocules/Main/MainCard';
import { mp } from '../../../../styles/device';
import MainSectionContainer from '../../atoms/Main/MainSectionContainer';

function MainTechSection() {
  const { t } = useTranslate();
  const title = t(
    'main:making_history_in_the_sleep_tech_industry_with_ai_technology'
  );
  return (
    <MainSectionContainer background={'var(--backgorund-bg-04)'}>
      <MainCardLabel item={'Technology'} color="var(--text-in-dark-text-00)" />
      <CardContainer>
        <MainCard
          src="/images/main/home_6_s_2x.jpg"
          srcM="/images/main/home_6_m_2x.jpg"
          srcL="/images/main/home_6_l_2x.jpg"
          href={'/technology'}
          title={title}
          category={'Technology'}
          whiteTitleColor={'var(--text-in-dark-text-01)'}
          missionColor={'var(--text-in-dark-text-01)'}
          moreButtonColor={'var(--primary-primary-in-dark)'}
        />
      </CardContainer>
    </MainSectionContainer>
  );
}

export default MainTechSection;

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
