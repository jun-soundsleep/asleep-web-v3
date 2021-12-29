import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { mp } from '../../../../styles/device';

function NavLanguageChangeButton({ margin, clickListener }) {
  const router = useRouter();

  return (
    <LanguageButton margin={margin} onClick={clickListener}>
      <Link locale="ko" href={router.pathname}>
        <a>
          {' '}
          <LanguageSpan active={router.locale === 'ko'}>Kor</LanguageSpan>
        </a>
      </Link>
      <HorizontalDivider>&nbsp;&nbsp;|&nbsp;&nbsp;</HorizontalDivider>
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
  margin: ${({ margin }) => (margin ? margin : '64px 0px 0px')};
  font-family: RedHatDisplay;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: 0.64px;
  text-align: left;

  ${mp[0]} {
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: 0.4px;
  }

  ${mp[1]} {
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.72px;
  }
`;

const HorizontalDivider = styled.span`
  color: var(--text-in-light-text-02);
`;

const LanguageSpan = styled.span`
  color: ${({ active }) =>
    active ? 'var(--text-in-light-text-10)' : 'var(--text-in-light-text-02)'};
`;
