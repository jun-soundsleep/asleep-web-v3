import React, { useState } from 'react';
import styled from '@emotion/styled';
import NewsCard from '../components/mocules/News/NewsCard';
import AsleepLayout from '../components/organisms/AppLayout/AsleepLayout';
import NewsMoreButton from '../components/atoms/News/NewsMoreButton';
import NewsNavigation from '../components/organisms/News/NewsNavigation';
import NewsCategory from '../components/atoms/News/NewsCategory';
import useTranslation from 'next-translate/useTranslation';
import NewsContents from '../components/organisms/News/NewsContents';
import NewsAllTab from '../components/organisms/News/NewsAllTab';
import { ABOUT_DATA } from '../data/News/ABOUT_DATA';
import { mp } from '../../styles/device';
import NewsCorporate from '../components/organisms/News/NewsCorporate';
import NewsBusinessTab from '../components/organisms/News/NewsBusinessTab';
import NewsMedicalTab from '../components/organisms/News/NewsMedicalTab';
import NewsInvestment from '../components/organisms/News/NewsInvestment';
import NewsAboutTab from '../components/organisms/News/NewsAboutTab';

function News({ allList, about }) {
  const [currentTab, setCurrentTab] = useState('all');

  const content = {
    all: <NewsAllTab data={allList} />,
    corporate: <NewsCorporate data={about} />,
    business: <NewsBusinessTab data={about} />,
    medical: <NewsMedicalTab data={about} />,
    tech: <NewsContents data={about} />,
    investment: <NewsInvestment data={about} />,
    about: <NewsAboutTab data={about} />
  };

  const checkTabActive = tab => {
    return currentTab === tab;
  };

  const allButonClick = () => {
    setCurrentTab('all');
  };

  const corporateClick = () => {
    setCurrentTab('corporate');
  };

  const businessClick = () => {
    setCurrentTab('business');
  };

  const medicalClick = () => {
    setCurrentTab('medical');
  };

  const techClick = () => {
    setCurrentTab('tech');
  };

  const investmentClick = () => {
    setCurrentTab('investment');
  };

  const aboutClick = () => {
    setCurrentTab('about');
  };

  return (
    <AsleepLayout>
      <NewsNavigation />
      <CategoryWrapper>
        <NewsCategory
          item={'All'}
          active={checkTabActive('all')}
          clickListener={allButonClick}
        />
        <NewsCategory
          item={'Corporate'}
          active={checkTabActive('corporate')}
          clickListener={corporateClick}
        />
        <NewsCategory
          item={'Business'}
          active={checkTabActive('business')}
          clickListener={businessClick}
        />
        <NewsCategory
          item={'Medical'}
          active={checkTabActive('medical')}
          clickListener={medicalClick}
        />
        <NewsCategory
          item={'Tech'}
          active={checkTabActive('tech')}
          clickListener={techClick}
        />
        <NewsCategory
          item={'Investment'}
          active={checkTabActive('investment')}
          clickListener={investmentClick}
        />
        <NewsCategory
          item={'About'}
          active={checkTabActive('about')}
          clickListener={aboutClick}
        />
      </CategoryWrapper>
      {content[currentTab]}
    </AsleepLayout>
  );
}

export default News;

const CategoryWrapper = styled.div`
  margin: 32px 20px 32px;
  padding: 10px;
  text-align: center;

  & > span {
    margin: 0px 10px 16px 0px;
  }

  ${mp[1]} {
    margin: 72px auto 72px;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      allList: [...ABOUT_DATA, ...ABOUT_DATA],
      about: [...ABOUT_DATA]
    }
  };
}
