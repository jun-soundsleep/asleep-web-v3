import React from 'react';
import styled from '@emotion/styled';
import TechTitle from '../../atoms/Tech/TechTitle';
import TechBodySubTitle from '../../atoms/Tech/TechBodySubTitle';
import IconImage from '../../atoms/Common/IconImage';
import TechSectionLabel from '../../mocules/Tech/TechSectionLabel';
import TechCard from '../../mocules/Tech/TechCard';

function TechBodySection({
  title,
  subTitle,
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
  ssrcl
}) {
  return (
    <Container>
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
      <TechCard
        title={fcardtitle}
        subtitle={fcardsubtitle}
        href={fhref}
        src={fsrc}
        srcM={fsrcm}
        srcL={fsrcl}
      />
      <TechCard
        title={scardtitle}
        subtitle={scardsubtitle}
        href={shref}
        src={ssrc}
        srcM={ssrcm}
        srcL={ssrcl}
      />
    </Container>
  );
}

export default TechBodySection;

const Container = styled.div`
  padding: 64px 20px;
  background-color: var(--dark);
`;
