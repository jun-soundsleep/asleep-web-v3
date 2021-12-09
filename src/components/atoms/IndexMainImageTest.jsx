import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../styles/device';
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `https://image.ceneostatic.pl/data/products/{src}/i-dixit.jpg`;
  // return 'https://www.lunit.io/img/news/hero.jpg';
};

function IndexMainImageTest({ src, ...props }) {
  console.log(src);
  console.log(props);
  return (
    <IndexMainImageContainer>
      <Image
        src={'https://www.lunit.io/img/news/hero.jpg'}
        // priority={true}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        // height={1000}
        alt={'aksjdhdkjh'}
        quality={100}
      />
    </IndexMainImageContainer>
  );
}

export default IndexMainImageTest;

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

  .imageTest {
    object-fit: cover;
  }
`;

const ImageContainer = styled(Image)`
  /* background: url(${({ src }) => src && src}); */
  /* background-size: cover; */
  /* background-position: 50%; */
  /* height: 100%; */
`;
