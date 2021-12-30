import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import TechBodyTitle from '../../atoms/Tech/TechBodyTitle';
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
      <TitleWrapper>
        <TechBodyTitle item={title} />
      </TitleWrapper>
      <SubTitleWrapper>
        <TechBodySubTitle item={subTitle} />
      </SubTitleWrapper>
      {src && (
        <IconWrapper>
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
        </IconWrapper>
      )}
    </TechSectionLabelContainer>
  );
}

export default TechSectionLabel;

const TechSectionLabelContainer = styled.div`
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  margin-bottom: 10px;

  ${mp[0]} {
    margin-bottom: 16px;
  }

  ${mp[1]} {
    margin-bottom: 48px;
  }
`;

const SubTitleWrapper = styled.div`
  margin-bottom: 32px;
  ${mp[0]} {
    margin-bottom: 16px;
  }

  ${mp[1]} {
    margin-bottom: 48px;
  }
`;

const IconWrapper = styled.div`
  ${mp[0]} {
    margin: 36px 0;
  }
  ${mp[1]} {
    margin-bottom: 72px;
  }
`;
