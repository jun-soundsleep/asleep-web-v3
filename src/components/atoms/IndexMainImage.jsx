import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../styles/device';
import Head from 'next/head';

function IndexMainImage({ src, ...props }) {
  console.log(src);
  return (
    <>
      <Head>
        <link rel="preload" href={src} as="image" />
      </Head>
      <IndexMainImageContainer>
        <ImageContainer src={src} />
      </IndexMainImageContainer>

      {/* <img
        src={src}
        alt=""
        width={900}
        height={800}
        loading="lazy"
        alt="alskdj"
      />
      <img
        src={src}
        alt=""
        width={900}
        height={800}
        loading="lazy"
        alt="alskdj"
      />
      <img
        src={src}
        alt=""
        width={900}
        height={800}
        loading="lazy"
        alt="alskdj"
      />
      <img
        src={src}
        alt=""
        width={900}
        height={800}
        loading="lazy"
        alt="alskdj"
      />
      <img
        src={src}
        alt=""
        width={900}
        height={800}
        loading="lazy"
        alt="alskdj"
      />
      <img
        src={
          'https://miro.medium.com/max/1838/1*tbpTAns3u_9_lA7VtCmApw.jpegtr=w-1,h-1:w-400,h-300'
        }
        alt=""
        width={900}
        height={800}
        loading="lazy"
        alt="alskdj"
      />
      <img
        src={'https://image.ceneostatic.pl/data/products/{src}/i-dixit.jpg'}
        alt=""
        width={900}
        height={800}
        loading="lazy"
        alt="alskdj"
      />
      <img
        src={'https://image.ceneostatic.pl/data/products/{src}/i-dixit.jpg'}
        alt=""
        width={900}
        height={800}
        loading="lazy"
        alt="alskdj"
      /> */}
    </>
  );
}

export default IndexMainImage;

const IndexMainImageContainer = styled.div`
  position: relative;
  height: 400px;
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
`;
