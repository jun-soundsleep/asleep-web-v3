import React from 'react';
import styled from '@emotion/styled';
import MainBigTitle from '../../atoms/Main/MainBigTitle';
import MainSubTitle from '../../atoms/Main/MainBigSubTitle';
import Head from 'next/head';

function MainFirstTitles() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={'/images/icon/components-icons-icons-chevron-down.svg'}
          as="image"
        />
      </Head>
      <Temp>
        <MainBigTitle
          item={'기술과 휴머니즘으로 더 나은 삶을 만들 수 있다는 믿음'}
        />
        <MainSubTitle
          item={
            '좋은 잠이 세상을 바꿀 수 있다고 믿습니다 . 사람들이 스스로의 잠을 컨트롤 하고, 그로써 더 나은 가치가 실현될 수 있다고 믿습니다'
          }
        />
        {/* <img
          src="/images/icon/components-icons-icons-chevron-down.svg"
          alt="arrowDown"
        /> */}
      </Temp>
    </>
  );
}

export default MainFirstTitles;

const Temp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
