import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import TechBodyTitle from '../../atoms/Tech/TechBodyTitle';
// import TechSubTitle from '../../mocules/Tech/TechSubTitle';
import IconImage from '../../atoms/Common/IconImage';
import TechTitle from '../../atoms/Tech/TechTitle';
import TechBodySubTitle from '../../atoms/Tech/TechBodySubTitle';
import { mp } from '../../../../styles/device';

function TechSectionLabel({
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
  lh
}) {
  return (
    <TechSectionLabelContainer>
      <TechTitle item={title} />
      <TechBodySubTitle item={subTitle} />
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
