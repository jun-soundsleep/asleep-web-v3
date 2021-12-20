import React from 'react';
import styled from '@emotion/styled';
// import CompanyHistoryBodyTitle from '../../atoms/Company/CompanyHistoryBodyTitle';
import CompanyHistoryBigCard from '../../mocules/Company/CompanyHistoryBigCard';
import CompanyBodyTitle from '../../atoms/Company/CompanyBodyTitle';

const temp = [
  {
    quarter: 'asdsad',
    content:
      'askdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhjaskdjhasdkjhaksdhj'
  },
  { quarter: 'asdsad', content: 'asldksajdlakjdl' },
  { quarter: 'asdsad', content: 'asldksajdlakjdl' },
  { quarter: 'asdsad', content: 'asldksajdlakjdl' }
];

function CompanyHistorySection(props) {
  return (
    <Container>
      <CompanyBodyTitle item={'에이슬립이 만들어가는새로운 수면 여정'} />
      <CompanyHistoryBigCard title={'2021'} body={temp} highlight={true} />
      <CompanyHistoryBigCard title={'2021'} body={temp} />
    </Container>
  );
}

export default CompanyHistorySection;

const Container = styled.section`
  margin: 64px 0 127px;
  padding: 64px 20px;
  background-color: var(--backgorund-bg-01);
`;
