import React from 'react';
import styled from '@emotion/styled';
import CompanyBodyTitle from '../../atoms/Company/CompanyBodyTitle';
import CompanyBigCard from '../../mocules/Company/CompanyBigCard';

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
      <CompanyBigCard title={'2021'} body={temp} />
      {/* <CompanyBigCard /> */}
    </Container>
  );
}

export default CompanyHistorySection;

const Container = styled.section`
  margin: 64px 0 127px;
  padding: 64px 20px;
  background-color: var(--backgorund-bg-01);
`;
