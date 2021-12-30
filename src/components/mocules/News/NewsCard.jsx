import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import NewsCardTitle from '../../atoms/News/NewsCardTitle';
import NewsCardDate from '../../atoms/News/NewsCardDate';
import NewsCardTag from '../../atoms/News/NewsCardTag';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NewsCard({ title, enTitle, category, date, href }) {
  const router = useRouter();
  return (
    <CardContainer>
      <a href={href} target="_blank" rel="noreferrer">
        <ListSection>
          <TagConatiner>
            <NewsCardTag item={category} />
          </TagConatiner>
          <TitleContainer>
            {router.locale === 'ko' ? (
              <NewsCardTitle item={title} />
            ) : (
              <NewsCardTitle item={enTitle} />
            )}
          </TitleContainer>
          <NewsCardDate item={date} />
        </ListSection>
      </a>
    </CardContainer>
  );
}

export default NewsCard;

const ListSection = styled.div`
  padding: 20px 16px;
  height: 239px;
  border-radius: 18px;
  background-color: var(--backgorund-bg-01);

  ${mp[0]} {
    height: 270px;
  }

  ${mp[1]} {
    height: 544px;
    padding: 44px 44px 44px 32px;
  }
`;

const CardContainer = styled.li`
  display: inline-block;
  width: 50%;
  padding: 10px;
  cursor: pointer;

  ${mp[0]} {
    width: 33%;
  }
`;

const TagConatiner = styled.div`
  margin-bottom: 12px;
`;

const TitleContainer = styled.div`
  height: 126px;
  margin-bottom: 24px;
  overflow: hidden;

  ${mp[0]} {
    height: 158px;
    margin-bottom: 10px;
  }
  ${mp[1]} {
    height: 370px;
    margin-bottom: 10px;
  }
`;
