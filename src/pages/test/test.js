import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

function TestComp() {
  const s = useRef(null);

  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    const request = await fetch('http://localhost:80/api/people');
    const json = await request.json();
    console.log(json);
  };

  return (
    <>
      <div>
        <Link href="/test/test" locale="en">
          <a>영어</a>
        </Link>
        <Link href="/test/test" locale="kr">
          <a>한국어</a>
        </Link>
      </div>
      {/* <Image width={900} height={900} src="/images/test.jpeg" />
      <Image width={900} height={900} src="/images/test.jpeg" />
      <Image width={900} height={900} src="/images/test.jpeg" />
      <Image width={900} height={900} src="/images/test.jpeg" />
      <Image width={900} height={900} src="/images/test.jpeg" />
      <Image width={900} height={900} src="/images/test.jpeg" />
      <Image width={900} height={900} src="/images/test.jpeg" />
      <Image
        width={900}
        height={900}
        src="/images/test.jpeg"
        placeholder="blur"
        blurDataURL="https://lh3.googleusercontent.com/proxy/OrHvfZYPP94tlcR4YTux_73Vozs3rY7tXjqgTUqcWhmhgKOOGoIoWUFFxlqEhIpMJmhog0EJUywfE3ep9L9RqJIUhgY"
      /> */}
    </>
  );
}

// export async function getStaticProps({ locale }) {
//   const request = await fetch('http://localhost:3000/api/people');
//   const json = await request.json();
//   console.log('locale of getStaticProps', locale);

//   return {
//     props: {
//       data: json,
//       ...(await serverSideTranslations(locale, ['common']))
//     }
//   };
// }

const ImageTest = styled.div``;

const Test = styled.div`
  font-family: 'Pretendard';
  width: 500px;
  height: 500px;
  background-color: var(--main-color);
`;

const Test2 = styled.div`
  font-family: 'RedHatDisplay';
  width: 500px;
  height: 500px;
  background-color: var(--main-color);
`;

const Test3 = styled.div`
  font-family: 'Pretendard';
  font-weight: 800;
  width: 500px;
  height: 500px;
  background-color: var(--main-color);
`;

const Test4 = styled.div`
  font-family: 'Pretendard';
  font-weight: 700;
  width: 500px;
  height: 500px;
  background-color: var(--main-color);
`;

export default TestComp;
