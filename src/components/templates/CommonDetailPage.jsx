import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Nav from '../organisms/Nav/Nav';

function CommonDetail({ src, title, body, originLocation }) {
  const router = useRouter();

  const goToBack = () => {
    if (window.innerWidth > 768) {
      router.push(originLocation);
    }
  };

  useEffect(() => {
    goToBack();
    window.addEventListener('resize', goToBack);

    return () => {
      window.removeEventListener('resize', goToBack);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" href={src} as="image" />
      </Head>
      <Nav />
      <FullImageContainer>
        <FullImage src={src} />
        <HeadContainer>
          <Head>{title}</Head>
        </HeadContainer>
        <ImageContainer onClick={() => router.push(originLocation)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.53 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 1 1 1.06 1.06L5.56 11.5H20a.75.75 0 0 1 0 1.5H5.56l4.97 4.97a.75.75 0 0 1 0 1.06z"
              fill="#DDD"
            />
          </svg>
        </ImageContainer>
      </FullImageContainer>
      <Body dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}

export default CommonDetail;

const Head = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.96px;
  text-align: left;
  color: var(--text-in-dark-text-01);
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 32px;
  left: 28px;
`;

const FullImageContainer = styled.div`
  position: relative;
  margin-top: 58px;
`;

const HeadContainer = styled.div`
  position: absolute;
  left: 20px;
  bottom: 40px;
`;

const FullImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src && src}) 50% / cover no-repeat;
  padding-top: ${({ ratio }) => (ratio ? ratio : 100)}%;
`;

const Body = styled.div`
  margin: 64px 20px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.72px;
  text-align: left;
  padding-bottom: 64px;
  color: var(--text-in-dark-text-03);

  b > {
    color: var(--text-in-light-text-10);
  }
`;
