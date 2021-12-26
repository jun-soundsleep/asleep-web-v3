import React, { useState } from 'react';
import styled from '@emotion/styled';
import Moment from 'moment';
import AsleepLayout from '../components/organisms/AppLayout/AsleepLayout';
import NewsNavigation from '../components/organisms/News/NewsNavigation';
import CategoryTab from '../components/atoms/Common/CategoryTab';
import NewsContents from '../components/organisms/News/NewsContents';
import NewsAllTab from '../components/organisms/News/NewsAllTab';
import { ABOUT_DATA } from '../data/News/ABOUT_DATA';
import { mp } from '../../styles/device';
import NewsCorporate from '../components/organisms/News/NewsCorporate';
import NewsBusinessTab from '../components/organisms/News/NewsBusinessTab';
import NewsMedicalTab from '../components/organisms/News/NewsMedicalTab';
import NewsInvestment from '../components/organisms/News/NewsInvestment';
import NewsAboutTab from '../components/organisms/News/NewsAboutTab';
import { INVEST_DATA } from '../data/News/INVEST_DATA';
import { TECH_DATA } from '../data/News/TECH_DATA';
import { MEDICAL_DATA } from '../data/News/MEDICAL_DATA';
import { BUSINESS_DATA } from '../data/News/BUSINESS_DATA';
import { CORPORATE_DATA } from '../data/News/CORPORATE_DATA';

function News({ allList, about, invest, tech, medical, business, corporate }) {
  const [currentTab, setCurrentTab] = useState('all');

  const content = {
    all: <NewsAllTab data={allList} />,
    corporate: <NewsCorporate data={corporate} />,
    business: <NewsBusinessTab data={business} />,
    medical: <NewsMedicalTab data={medical} />,
    tech: <NewsContents data={tech} />,
    investment: <NewsInvestment data={invest} />,
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
        <CategoryTab
          item={'All'}
          active={checkTabActive('all')}
          clickListener={allButonClick}
        />
        <CategoryTab
          item={'Corporate'}
          active={checkTabActive('corporate')}
          clickListener={corporateClick}
        />
        <CategoryTab
          item={'Business'}
          active={checkTabActive('business')}
          clickListener={businessClick}
        />
        <CategoryTab
          item={'Medical'}
          active={checkTabActive('medical')}
          clickListener={medicalClick}
        />
        <CategoryTab
          item={'Tech'}
          active={checkTabActive('tech')}
          clickListener={techClick}
        />
        <CategoryTab
          item={'Investment'}
          active={checkTabActive('investment')}
          clickListener={investmentClick}
        />
        <CategoryTab
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

  & > button {
    margin: 0px 10px 16px 0px;
  }

  ${mp[1]} {
    margin: 72px auto 72px;
  }
`;

export async function getStaticProps() {
  const sortLatest = data => {
    return data.sort(
      (a, b) =>
        new Moment(b.date).format('YYYYMMDD') -
        new Moment(a.date).format('YYYYMMDD')
    );
  };

  return {
    props: {
      allList: [
        ...sortLatest([
          ...ABOUT_DATA,
          ...CORPORATE_DATA,
          ...BUSINESS_DATA,
          ...MEDICAL_DATA,
          ...TECH_DATA,
          ...INVEST_DATA,
          ...ABOUT_DATA
        ])
      ],
      corporate: [...sortLatest(CORPORATE_DATA)],
      business: [...sortLatest(BUSINESS_DATA)],
      medical: [...sortLatest(MEDICAL_DATA)],
      tech: [...sortLatest(TECH_DATA)],
      invest: [...sortLatest(INVEST_DATA)],
      about: [...sortLatest(ABOUT_DATA)]
    }
  };
}
