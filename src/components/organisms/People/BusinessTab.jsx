import React from 'react';
import styled from '@emotion/styled';
import PeopleBodyCard from '../../mocules/people/PeopleBodyCard';
import PeopleBodyFullImage from '../../mocules/people/PeopleBodyFullImage';
import useTranslation from 'next-translate/useTranslation';
import { mp } from '../../../../styles/device';
import SectionContainer from '../../atoms/people/SectionContainer';

function BusinessTab(props) {
  const { t } = useTranslation();
  const title = t('people:businee_title');
  const cardFirst = t('people:business_card_1');
  const cardSecond = t('people:business_card_2');
  const cardThird = t('people:business_card_3');
  const cardFourth = t('people:business_card_4');

  return (
    <SectionContainer>
      <PeopleBodyFullImage
        src={[
          '/images/people/people_4_s_2x.jpg',
          '/images/people/people_4_m_2x.jpg',
          '/images/people/people_4_l_2x.jpg'
        ]}
        title={title}
        href={'https://asleep.ai/en'}
      />
      <CardContainer style={{ marginTop: '48px' }}>
        <PeopleBodyCard
          title={'Product Team'}
          subtitle={cardFirst}
          href={'/people/product'}
        />
      </CardContainer>
      <CardOverTablet>
        <div className="bizLeft">
          <Temp>
            <PeopleBodyCard
              className="bizBd"
              title={'Business Development Team'}
              subtitle={cardSecond}
              href={'/people/businessdevelopment'}
            />
          </Temp>
          <Temp>
            <PeopleBodyCard
              title={'Marketing & Branding Team'}
              subtitle={cardThird}
              href={'/people/marketing'}
            />
          </Temp>
        </div>
        <div className="bizRight">
          <Temp>
            <PeopleBodyCard
              title={'Operating Team'}
              subtitle={cardFourth}
              href={'/people/operating'}
            />
          </Temp>
        </div>
      </CardOverTablet>
    </SectionContainer>
  );
}

export default BusinessTab;

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
    width: 560px;
    height: 640px;
    margin: 20px auto;

    & > div.bizLeft {
      width: 50%;
      height: 50%;
      margin-right: 15px;

      & > div:first-child {
        padding-bottom: 15px;
      }

      & > div:last-child {
        padding-top: 15px;
      }
    }

    & > div.bizRight {
      width: 50%;
      height: 100%;
      margin-left: 15px;
    }
  }

  ${mp[1]} {
    display: flex;
    width: 1400px;
    height: 1400px;
    margin: 20px auto;

    & > div.bizLeft {
      width: 50%;
      height: 50%;
      margin-right: 15px;

      & > div:first-child {
        padding-bottom: 30px;
      }

      & > div:last-child {
        padding-top: 15px;
      }
    }

    & > div.bizRight {
      width: 50%;
      height: 100%;
      margin-left: 15px;
    }
  }
`;

const Temp = styled.div`
  width: 320px;
  height: 264px;
  margin: 0px auto 24px;

  ${mp[0]} {
    width: 100%;
    height: 100%;
    margin: 0px auto;
  }
`;

const OverTabletDivision = styled.div``;
