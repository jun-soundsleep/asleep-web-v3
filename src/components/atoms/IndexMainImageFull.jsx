import React, { useRef, forwardRef } from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../styles/device';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import IndexMainImage from './IndexMainImage';

const Component = dynamic(import('./TempC'));
// eslint-disable-next-line react/display-name
const ForwardedRefComponent = forwardRef((props, ref) => {
  return <Component {...props} forwardedRef={ref} />;
});

function IndexMainImageFull({ src, ...props }) {
  const foo = React.createRef();

  const hell = () => {
    foo.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Head>
        <link rel="preload" href={src} as="image" />
      </Head>
      <IndexMainImageContainer onClick={hell}>
        <ImageContainer src={src} />
      </IndexMainImageContainer>
      <IndexMainImage src={'https://www.lunit.io/img/news/hero.jpg'} />
      <IndexMainImage src={'https://www.lunit.io/img/news/hero.jpg'} />
      <ForwardedRefComponent ref={foo} />
      <IndexMainImage src={'https://www.lunit.io/img/news/hero.jpg'} />
      <IndexMainImage src={'https://www.lunit.io/img/news/hero.jpg'} />
      <IndexMainImage src={'https://www.lunit.io/img/news/hero.jpg'} />
    </>
  );
}

export default IndexMainImageFull;

const IndexMainImageContainer = styled.div`
  position: relative;
  height: 100vh;
  ${mp[0]} {
    background-color: red;
  }

  ${mp[1]} {
    background-color: blueviolet;
  }

  ${mp[2]} {
    background-color: greenyellow;
  }
`;

const ImageContainer = styled.div`
  background: url(${({ src }) => src && src});
  background-size: cover;
  background-position: 50%;
  height: 100%;
  width: 100%;
`;
