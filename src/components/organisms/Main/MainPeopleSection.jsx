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
      <CardWrapper>
        <CardContainer>
          <MainCard
            src="/images/main/home_8_s_2x.jpg"
            srcM="/images/main/home_8_m_2x.jpg"
            srcL="/images/main/home_8_l_2x.jpg"
            href={'/people'}
            title={title}
            category={'People'}
            whiteDim={true}
            moreButtonColor={'var(--sub-sub-07)'}
          />
        </CardContainer>
        <CardContainer>
          <MainCard
            src="/images/main/home_9_s_2x.jpg"
            srcM="/images/main/home_9_m_2x.jpg"
            srcL="/images/main/home_9_l_2x.jpg"
            href={'https://medium.com/asleepblog'}
            title={secondTitle}
            category={'People  |  Blog Interview'}
            whiteDim={true}
            outer
            moreButtonColor={'var(--sub-sub-07)'}
          />
        </CardContainer>
      </CardWrapper>
    </MainPeopleSectionContainer>
  );
}

export default MainPeopleSection;

const MainPeopleSectionContainer = styled.div`
  padding: 60px 0px;

  ${mp[0]} {
    background-color: var(--backgorund-bg-01);
    padding: 120px 0px;
  }
  ${mp[1]} {
    padding: 240px 0px;
  }
`;

const CardContainer = styled.div`
  width: 320px;
  height: 212px;
  margin: 0 auto;

  ${mp[0]} {
    width: 270px;
    height: 337px;
    margin: unset;
  }

  ${mp[1]} {
    width: 602px;
    height: 725px;
  }
`;

const CardWrapper = styled.div`
  ${mp[0]} {
    display: flex;
    justify-content: center;
    margin: 0 auto;

    & > div:first-child {
      margin-right: 20px;
    }
  }
`;
