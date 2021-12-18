import React from 'react';
import styled from '@emotion/styled';
import CompanyBodyTitle from '../../atoms/Company/CompanyBodyTitle';
import CompanyBodySubTitle from '../../atoms/Company/CompanyBodySubTitle';

function CompanyVisionSection(props) {
  return (
    <Container>
      <CompanyBodyTitle item={'비접촉 수면 센싱으로 바꾸어가는 새로운 미래'} />

      {/* <CompanyBodySubTitle item={'aslkdjsadlkasjd'} /> */}
    </Container>
  );
}

export default CompanyVisionSection;

const Container = styled.section`
  padding: 64px 20px 66px;
  background-color: var(--backgorund-bg-01);
`;
