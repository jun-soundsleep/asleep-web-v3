import React from 'react';
import AdvisorsTitle from '../../atoms/people/AdvisorsTitle';
import AdvisorCard from '../../mocules/people/AdvisorCard';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function AdvisorSection({ title, fname, fbody, fsrc, ssrc, sname, sbody }) {
  return (
    <>
      <BackgroundContainer>
        <AdvisorsTitle item={title} />
        <CardContainer>
          <AdvisorCard name={fname} body={fbody} src={fsrc} />
          <AdvisorCard name={sname} body={sbody} src={ssrc} />
        </CardContainer>
      </BackgroundContainer>
    </>
  );
}

export default AdvisorSection;

const CardContainer = styled.div`
  display: flex;
  width: 320px;
  margin: 30px auto 0;

  & > div:first-child {
    margin-right: 8px;
  }

  & > div:last-child {
    margin-left: 8px;
  }

  ${mp[0]} {
    width: auto;

    & > div:first-child {
      margin-right: 12.5px;
    }

    & > div:last-child {
      margin-left: 12.5px;
    }
  }

  ${mp[1]} {
    & > div:first-child {
      margin-right: 39px;
    }

    & > div:last-child {
      margin-left: 39px;
    }
  }
`;

const BackgroundContainer = styled.div`
  ${mp[0]} {
    width: 560px;
    margin: 44px auto;
    padding: 44px 203px 44px 24px;
    border-radius: 20px;
    background-color: var(--backgorund-bg-01);
  }
  ${mp[1]} {
    width: 1400px;
    padding: 88px 64px;
    border-radius: 24px;
    background-color: var(--backgorund-bg-01);
  }
`;
