import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

function FooterAddress({ margin, darkMode }) {
  const router = useRouter();
  return (
    <Address margin={margin} darkMode={darkMode}>
      {router.locale === 'ko' ? (
        <span>
          사업자 등록번호: 840-81-02142 | 대표: 이동헌
          <br />
          본사: 06193 서울특별시 강남구 테헤란로 420 19층 에이슬립 (대치동 890-16)
          <br />
          미국 지사: 3003 North 1st Street #221, San Jose, CA 95134
        </span>
      ) : (
        <span>
          Corporate Registration Number: 840-81-02142 | CEO: Dongheon Lee <br />
          Headquarters: 06193 Asleep (890-16) 19F in Daechi-dong, 420 Teheran-ro, Gangnam-gu, Seoul, Republic of Korea<br />
          U.S Office: 3003 North 1st Street #221, San Jose, CA 95134
        </span>
      )}
    </Address>
  );
}

export default FooterAddress;

const Address = styled.address`
  margin: ${({ margin }) => margin };
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.54px;
  text-align: left;
  color: ${({ darkMode }) =>
    darkMode
      ? 'var(--components-components-02)'
      : 'var(--text-in-light-text-10)'};
`;
