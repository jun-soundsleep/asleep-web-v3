import React from 'react';
import styled from '@emotion/styled';
import FullImageContainer from '../../atoms/Common/FullImageContainer';
import useTranslation from 'next-translate/useTranslation';
import BusinessBodyTitle from '../../atoms/Business/BusinessBodyTitle';
import BusinessBodySubTitle from '../../atoms/Business/BusinessBodySubTitle';
import { mp } from '../../../../styles/device';
import BusinessBodyContent from '../../atoms/Business/BusinessBodyContent';
import IconImage from '../../atoms/Common/IconImage';

function BusinessSection({
  title,
  subTitle,
  contents,
  bsrc,
  bsrcM,
  bsrcL,
  logosrc,
  logosrcM,
  logosrcL,
  logoSw,
  logoSh,
  logoMw,
  logoMh,
  logoLw,
  logoLh
}) {
  return (
    <BusinessSleepAnalysisSolutionContainer>
      <FullImageContainer src={bsrc} srcL={bsrcM} srcM={bsrcL} />
      <ContentsDivision>
        <ContentsContainer>
          <BusinessBodyTitleContainer>
            <BusinessBodyTitle item={title} />
          </BusinessBodyTitleContainer>
          <div>
            <BusinessBodySubTitleContainer>
              <BusinessBodySubTitle item={subTitle} />
            </BusinessBodySubTitleContainer>
            <BusinessBodyContent item={contents} />
          </div>
        </ContentsContainer>
        {logosrc && (
          <LogoContainer>
            <IconImage
              src={logosrc}
              srcM={logosrcM}
              srcL={logosrcL}
              sw={logoSw}
              sh={logoSh}
              mw={logoMw}
              mh={logoMh}
              lw={logoLw}
              lh={logoLh}
            />
          </LogoContainer>
        )}
      </ContentsDivision>
    </BusinessSleepAnalysisSolutionContainer>
  );
}

export default BusinessSection;

const BusinessSleepAnalysisSolutionContainer = styled.section``;

const ContentsDivision = styled.div`
  padding: 32px 20px 128px;

  ${mp[0]} {
    margin: 0 auto;
    padding: 46px 0px 128px;
  }

  ${mp[1]} {
    max-width: 1300px;
    padding: 88px 0px 290px;
  }
`;

const ContentsContainer = styled.div`
  ${mp[0]} {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 560px;
  }

  ${mp[1]} {
    max-width: 1300px;
  }
`;

const BusinessBodyTitleContainer = styled.div`
  margin: 0 0 24px 0;
  ${mp[0]} {
    margin: 0 24px 0 0;
  }

  ${mp[1]} {
    margin: 0 90px 0 0;
  }
`;

const BusinessBodySubTitleContainer = styled.div`
  margin: 0 0 20px 0;
`;

const LogoContainer = styled.div`
  margin: 56px auto 0;
  display: flex;
  justify-content: space-between;

  ${mp[0]} {
    margin: 64px auto 0px;
    max-width: 560px;
  }

  ${mp[1]} {
    max-width: 1300px;
  }
`;
