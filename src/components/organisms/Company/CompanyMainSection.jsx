import React from 'react';
import styled from '@emotion/styled';
import BigTitle from '../../atoms/Common/BigTitle';
import CompanySubtitle from '../../atoms/Company/CompanySubtitle';
import IconImage from '../../atoms/Common/IconImage';
import { mp } from '../../../../styles/device';

function CompanyMainSection({ title, subTitle }) {
  return (
    <Container>
      <BigTitleWrapper>
        <BigTitle item={title} color={'var(--text-in-light-text-10)'} />
      </BigTitleWrapper>
      <SubTitleWrapper>
        <CompanySubtitle item={subTitle} />
      </SubTitleWrapper>
      <LogoContainer>
        <IconImage
          src={'/images/icon/bulb.jpg'}
          srcM={'/images/icon/bulb@2x.jpg'}
          srcL={'/images/icon/bulb@3x.jpg'}
          sw={'17px'}
          sh={'31px'}
          mw={'20px'}
          mh={'35px'}
          lw={'43px'}
          lh={'78px'}
        />
      </LogoContainer>
    </Container>
  );
}

export default CompanyMainSection;

const BigTitleWrapper = styled.div``;

const SubTitleWrapper = styled.div`
  margin-bottom: 32px;
`;

const Container = styled.section`
  padding: 146px 0px 88px;
  padding-top: 146px;
`;

const LogoContainer = styled.div`
  margin: 32px auto 0;
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
