import React, { forwardRef } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import TechTitle from '../../atoms/Tech/TechTitle';
import BigArrrowButton from '../../atoms/Common/BigArrrowButton';

const TechSubTextComponent = dynamic(import('../../mocules/Tech/TechSubText'));

// eslint-disable-next-line react/display-name
const ForwardedTechMobileMainComponent = forwardRef((props, ref) => {
  return <TechSubTextComponent {...props} forwardedRef={ref} />;
});

function TechMobileMainSection({ title, src }) {
  const mobileSection = React.createRef();

  const goToSubTitleInMobileSection = () => {
    mobileSection.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Head>
        <link rel="preload" href={src} as="image" />
      </Head>
      <MobileTechMainSectionContainer>
        <TechTitleContainer>
          <TechTitle item={title} />
        </TechTitleContainer>
        <BigArrrowButton clickListener={goToSubTitleInMobileSection} />
      </MobileTechMainSectionContainer>
      <Container src={src}>
        <ForwardedTechMobileMainComponent ref={mobileSection} />
      </Container>
    </>
  );
}

export default TechMobileMainSection;

const Container = styled.section`
  background-color: var(--backgorund-bg-05);
  background: url(${({ src }) => src && src}) bottom / cover no-repeat;
  padding-top: ${({ ratio }) => (ratio ? ratio : 46)}%;
  padding-bottom: 64px;
  position: relative;
`;

const MobileTechMainSectionContainer = styled.div`
  height: 100vh;
  background-color: var(--backgorund-bg-05);

  & > button {
    /* position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */
  }
`;

const TechTitleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
