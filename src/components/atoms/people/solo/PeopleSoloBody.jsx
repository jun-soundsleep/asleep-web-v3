import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../../styles/device';
import { useRouter } from 'next/router';

function PeopleSoloBody({ item }) {
  const router = useRouter();
  return (
    <Container
      dangerouslySetInnerHTML={{ __html: item }}
      locale={router.locale}
    />
  );
}

export default PeopleSoloBody;

const Container = styled.p`
  word-break: ${({ locale }) => (locale === 'ko' ? 'break-all' : 'keep-all')};
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.72px;
  text-align: left;
  color: #898989;

  b {
    color: var(--text-in-light-text-10);
  }

  ${mp[0]} {
    max-width: ${({ locale }) => (locale === 'ko' ? '290px' : '320px')};
  }
  ${mp[1]} {
    max-width: ${({ locale }) => (locale === 'ko' ? '677px' : '707px')};
    font-size: 24px;
    line-height: 1.58;
    letter-spacing: -1.08px;
  }
`;
