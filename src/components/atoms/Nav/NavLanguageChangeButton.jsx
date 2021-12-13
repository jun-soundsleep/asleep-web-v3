import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Link from 'next/link';

function NavLanguageChangeButton() {
  const router = useRouter();
  console.log(router.path);

  return (
    <LanguageButton>
      <Link locale="ko" href={router.pathname}>
        <a>
          {' '}
          <LanguageSpan active={router.locale === 'ko'}>Kor</LanguageSpan>
        </a>
      </Link>
      <HorizontalDivider> | </HorizontalDivider>
      <Link locale="en" href={router.pathname}>
        <a>
          <LanguageSpan active={router.locale === 'en'}>Eng</LanguageSpan>
        </a>
      </Link>
    </LanguageButton>
  );
}

export default NavLanguageChangeButton;

const LanguageButton = styled.button`
  margin-top: 64px;
  font-family: RedHatDisplay;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: 0.64px;
  text-align: left;
`;

const HorizontalDivider = styled.span`
  color: var(--text-in-light-text-02);
`;

const LanguageSpan = styled.span`
  color: ${({ active }) =>
    active ? 'var(--text-in-light-text-10)' : 'var(--text-in-light-text-02)'};
`;
