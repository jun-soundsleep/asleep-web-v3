import React from 'react';
import styled from '@emotion/styled';
import useTranslate from 'next-translate/useTranslation';
import MainCardLabel from '../../atoms/Main/MainCardLabel';
import MainCard from '../../mocules/Main/MainCard';
import { mp } from '../../../../styles/device';
import MainSectionContainer from '../../atoms/Main/MainSectionContainer';

function MainAsleepVision({ margin, forwardedRef }) {
  const { t } = useTranslate();
  const title = t('main:mission_title');
  const asleepWorld = t('main:the_world_that_we_dream_of');
  const betterLife = t('main:the_believe_that_we_can_make_a_better_life');
  const newExperience = t('main:providing_a_whole_new_sleep_experience');
  const ditialTransformation = t('main:digital_transformation_of_sleep');

  return (
    <MainSectionContainer
      forwardedRef={forwardedRef}
      background={'var(--text-in-dark-text-00)'}
    >
      <MainCardLabel item={title} />
      <ThreeColumnContainer>
        <ThreeColumnsItem>
          <MainCard
            src="/images/main/home_2_s_2x.jpg"
            srcM="/images/main/home_2_m_2x.jpg"
            srcL="/images/main/home_2_l_2x.jpg"
            href={'/company#companyFuture'}
            title={asleepWorld}
            whiteDim={true}
          />
        </ThreeColumnsItem>
        <ThreeColumnsItem>
          <MainCard
            src="/images/main/home_3_s_2x.jpg"
            srcM="/images/main/home_3_m_2x.jpg"
            srcL="/images/main/home_3_l_2x.jpg"
            href={'/company#companyFaith'}
            title={betterLife}
            whiteDim={true}
          />
        </ThreeColumnsItem>
        <ThreeColumnsItem>
          <MainCard
            src="/images/main/home_4_s_2x.jpg"
            srcM="/images/main/home_4_m_2x.jpg"
            srcL="/images/main/home_4_l_2x.jpg"
            href={'/company#companyHistory'}
            title={newExperience}
            whiteDim={true}
          />
        </ThreeColumnsItem>
      </ThreeColumnContainer>
      <OneColumnContainer>
        <MainCard
          src="/images/main/home_5_s_2x.jpg"
          srcM="/images/main/home_5_m_2x.jpg"
          srcL="/images/main/home_5_l_2x.jpg"
          href={'/company'}
          title={ditialTransformation}
          whiteDim={true}
          category="story"
          oneLine={true}
        />
      </OneColumnContainer>
    </MainSectionContainer>
  );
}

export default MainAsleepVision;

const ThreeColumnsItem = styled.div`
  width: 320px;
  height: 222px;
  margin-bottom: 24px;

  ${mp[0]} {
    width: 176px;
    height: 261px;
    margin-bottom: unset;
  }

  ${mp[1]} {
    width: 440px;
    height: 585px;
  }
`;

const Blank = styled.div`
  height: 8px;

  ${mp[0]} {
    height: 24px;
  }

  ${mp[1]} {
    height: 64px;
  }
`;

const ThreeColumnContainer = styled.div`
  width: 320px;
  margin: 0 auto;

  ${mp[0]} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 560px;
    margin: 0 auto 40px;
  }

  ${mp[1]} {
    width: 1400px;
  }
`;

const OneColumnContainer = styled.div`
  margin: 0 auto;
  width: 320px;
  height: 222px;

  ${mp[0]} {
    width: 560px;
    height: 310px;
  }

  ${mp[1]} {
    width: 1400px;
    height: 725px;
  }
`;
