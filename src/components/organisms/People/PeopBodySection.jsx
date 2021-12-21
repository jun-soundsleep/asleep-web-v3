import React, { useState } from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { mp } from '../../../../styles/device';
import PeopleBodyTitle from '../../atoms/people/PeopleBodyTitle';
import CategoryTab from '../../atoms/Common/CategoryTab';
import { MXFlexCenteringSB } from '../../mixin/MXFlex';
import IconImage from '../../atoms/Common/IconImage';

function PeopBodySection() {
  const [currentTab, setCurrentTab] = useState('leaders');
  const { t, lang } = useTranslation();
  const title = t('people:body_title');

  const checkTabActive = tab => {
    return currentTab === tab;
  };

  const leaderButonClick = () => {
    setCurrentTab('leaders');
  };

  const rdClick = () => {
    setCurrentTab('rd');
  };

  const technicalClick = () => {
    setCurrentTab('technical');
  };

  const businessClick = () => {
    setCurrentTab('business');
  };

  const directorClick = () => {
    setCurrentTab('directors');
  };

  const advisorClick = () => {
    setCurrentTab('advisors');
  };

  return (
    <>
      <TitleContainer>
        <PeopleBodyTitle item={title} />
      </TitleContainer>
      <ImageContainer>
        <IconImage
          src="/images/icon/01-14995884-2@2x.png"
          srcM="/images/icon/01-14995884-2@2x.png"
          srcL="/images/icon/01-14995884-2@3x.png"
          sw={'23px'}
          sh={'47px'}
          mw={'23px'}
          mh={'47px'}
          lw={'23px'}
          lh={'47px'}
        />
      </ImageContainer>
      <CategoryWrapper>
        <CategoryTab
          item={'Leaders'}
          active={checkTabActive('leaders')}
          clickListener={leaderButonClick}
        />
        <CategoryTab
          item={'R&D'}
          active={checkTabActive('rd')}
          clickListener={rdClick}
        />
        <CategoryTab
          item={'Technical'}
          active={checkTabActive('technical')}
          clickListener={technicalClick}
        />
        <CategoryTab
          item={'Business'}
          active={checkTabActive('business')}
          clickListener={businessClick}
        />
        <CategoryTab
          item={'Directors'}
          active={checkTabActive('directors')}
          clickListener={directorClick}
        />
        <CategoryTab
          item={'Advisors'}
          active={checkTabActive('advisors')}
          clickListener={advisorClick}
        />
      </CategoryWrapper>
    </>
  );
}

export default PeopBodySection;

const CategoryWrapper = styled.div`
  margin: 32px 20px 32px;
  padding: 10px;
  text-align: center;

  & > button {
    margin: 0px 10px 16px 0px;
  }

  ${mp[1]} {
    margin: 72px auto 72px;
  }
`;

const TitleContainer = styled.div`
  margin: 64px 20px 32px;
`;

const ImageContainer = styled(MXFlexCenteringSB)`
  margin: 36px auto;
`;
