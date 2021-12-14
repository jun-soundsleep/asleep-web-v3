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
          본사: 06178 서울특별시 강남구 테헤란로82길 15(대치동 942-15,
          디아이타워 7층)
          <br /> 미국 지사: 3003 North 1st Street #221, San Jose, CA 95134
        </span>
      ) : (
        <span>
          Corporate Registration Number: 840-81-02142 | CEO: Dongheon Lee <br />
          Headquarters: 15, Teheran-ro 82-gil, Gangnam-gu, Seoul, 06178,
          Republic of Korea(DI Tower 7F) <br />
          U.S Office: 3003 North 1st Street #221, San Jose, CA 95134
        </span>
      )}
    </Address>
  );
}

export default FooterAddress;

const Address = styled.address`
  margin: ${({ margin }) => margin && margin};
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
