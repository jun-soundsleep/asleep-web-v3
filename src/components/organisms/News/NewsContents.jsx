import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import NewsMoreButton from '../../atoms/News/NewsMoreButton';
import NewsCard from '../../mocules/News/NewsCard';
import { mp } from '../../../../styles/device';

function NewsContents({ data }) {
  const nextList = 6;
  const [currentIndex, setcurrentIndexIndex] = useState(0);
  const [list, setList] = useState([...data.slice(0, 6)]);

  useEffect(() => {
    if (currentIndex === 0) return;
    setList([...list, ...data.slice(currentIndex, currentIndex + nextList)]);
  }, [currentIndex]);

  const handleMoreBUttonClick = () => {
    setcurrentIndexIndex(currentIndex + nextList);
  };

  return (
    <CardContainer>
      {list?.map(({ category, title, enTitle, date, href }, idx) => (
        <NewsCard
          category={category}
          title={title}
          enTitle={enTitle}
          date={date}
          key={idx}
          href={href}
        />
      ))}
      {currentIndex + nextList < data.length && (
        <NewsMoreButton clickListener={handleMoreBUttonClick} />
      )}
    </CardContainer>
  );
}

export default NewsContents;

const CardContainer = styled.ul`
  margin: 0 auto;
  padding-bottom: 128px;

  ${mp[0]} {
    max-width: 560px;
    margin: 0 auto;
  }

  ${mp[1]} {
    max-width: 1260px;
    margin: 0 auto;
  }
`;
