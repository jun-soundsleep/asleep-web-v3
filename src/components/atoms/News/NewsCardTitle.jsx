import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import { useRouter } from 'next/router';

function NewsCardTitle({ item }) {
  const router = useRouter();
  return (
    <Contents
      dangerouslySetInnerHTML={{ __html: item }}
      locale={router.locale}
    />
  );
}

export default NewsCardTitle;

const Contents = styled.h2`
  word-break: ${({ locale }) => (locale === 'ko' ? 'break-all' : 'keep-all')};
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.72px;
  text-align: left;
  color: var(--text-in-light-text-10);

  ${mp[0]} {
    font-size: 17px;
    line-height: 1.41;
    letter-spacing: -0.68px;
  }

  ${mp[1]} {
    font-size: 26px;
    line-height: 1.35;
  }
`;
