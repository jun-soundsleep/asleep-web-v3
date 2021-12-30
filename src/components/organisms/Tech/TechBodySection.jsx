import React from 'react';
import styled from '@emotion/styled';
import TechSectionLabel from '../../mocules/Tech/TechSectionLabel';
import TechCard from '../../mocules/Tech/TechCard';
import { mp } from '../../../../styles/device';

function TechBodySection({
  title,
  subTitle,
  background,
  src,
  srcM,
  srcL,
  sw,
  sh,
  mw,
  mh,
  lw,
  lh,
  fcardtitle,
  fcardsubtitle,
  fhref,
  fsrc,
  fsrcm,
  fsrcl,
  scardtitle,
  scardsubtitle,
  shref,
  ssrc,
  ssrcm,
  ssrcl,
  whiteTitleColor,
  forwardedRef,
  fmodalListener,
  smodalListener
}) {
  return (
    <Container background={background} ref={forwardedRef}>
      <TechSectionLabel
        title={title}
        subTitle={subTitle}
        src={src}
        srcM={srcM}
        srcL={srcL}
        sw={sw}
        sh={sh}
        mw={mw}
        mh={mh}
        lw={lw}
        lh={lh}
      />
      <CardContainer>
        <CardWrapper>
          <TechCard
            title={fcardtitle}
            subtitle={fcardsubtitle}
            href={fhref}
            src={fsrc}
            srcM={fsrcm}
            srcL={fsrcl}
            whiteTitleColor={whiteTitleColor}
            modalListener={fmodalListener}
          />
        </CardWrapper>
        <CardWrapper>
          <TechCard
            title={scardtitle}
            subtitle={scardsubtitle}
            href={shref}
            src={ssrc}
            srcM={ssrcm}
            srcL={ssrcl}
            whiteTitleColor={whiteTitleColor}
            modalListener={smodalListener}
          />
        </CardWrapper>
      </CardContainer>
    </Container>
  );
}

export default TechBodySection;

const Container = styled.div`
  padding: 64px 20px;
  background-color: ${({ background }) =>
    background ? background : 'var(--backgorund-bg-05)'};
  ${mp[0]} {
    padding: 140px 0px;
  }

  ${mp[1]} {
    padding: 280px 0px;
  }
`;

const CardContainer = styled.div`
  ${mp[0]} {
    max-width: 560px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  ${mp[1]} {
    max-width: 1266px;
    display: flex;
    margin: auto;
  }
`;

const CardWrapper = styled.div`
  width: 320px;
  height: 212px;
  margin: 0 auto;

  ${mp[0]} {
    margin: unset;
    width: 270px;
    height: 311px;
  }

  ${mp[1]} {
    width: 603px;
    height: 570px;
  }
`;
