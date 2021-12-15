import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import TechBodyTitle from '../../atoms/Tech/TechBodyTitle';
// import TechSubTitle from '../../mocules/Tech/TechSubTitle';
import IconImage from '../../atoms/Common/IconImage';
import { mp } from '../../../../styles/device';

function TechSectionLabel({
  bodyTitle,
  subTitle,
  src,
  srcM,
  srcL,
  sw,
  sh,
  mw,
  mh,
  lw,
  lh
}) {
  return (
    <TechSectionLabelContainer>
      <TechBodyTitle item={'aksjd'} />
      {/* <TechSubTitle item={'aksjd'} /> */}
      {src && (
        <IconImage
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
      )}
    </TechSectionLabelContainer>
  );
}

export default TechSectionLabel;

const TechSectionLabelContainer = styled.div`
  margin: 0 auto;
`;
