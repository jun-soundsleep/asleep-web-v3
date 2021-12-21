import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import NewsCardTitle from '../../atoms/News/NewsCardTitle';
import NewsCardDate from '../../atoms/News/NewsCardDate';
import NewsCardTag from '../../atoms/News/NewsCardTag';
import Link from 'next/link';

function NewsCard({ title, category, date, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <CardContainer>
        <Temp>
          <TagConatiner>
            <NewsCardTag item={category} />
          </TagConatiner>
          <TitleContainer>
            <NewsCardTitle item={title} />
          </TitleContainer>
          <NewsCardDate item={date} />
        </Temp>
      </CardContainer>
    </a>
  );
}

export default NewsCard;

const Temp = styled.div`
  padding: 20px 16px;
  border-radius: 18px;
  background-color: var(--backgorund-bg-01);
`;

const CardContainer = styled.li`
  display: inline-block;
  width: 50%;
  padding: 10px;
  word-wrap: break-word;
  cursor: pointer;

  ${mp[0]} {
    width: 33%;
  }
`;

const TagConatiner = styled.div`
  margin-bottom: 12px;
`;

const TitleContainer = styled.div`
  min-height: 126px;
  margin-bottom: 24px;
`;
