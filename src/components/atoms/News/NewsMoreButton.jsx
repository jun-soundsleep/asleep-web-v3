import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function NewsMoreButton({ clickListener }) {
  return (
    <Button onClick={clickListener}>
      <span>More</span>
      <ImageContainer>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.44 4.521a.437.437 0 1 0-.875 0v2.042H4.523a.437.437 0 1 0 0 .875h2.042V9.48a.438.438 0 0 0 .875 0V7.438h2.042a.437.437 0 1 0 0-.875H7.44V4.521z"
            fill="#406BFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.003.584a6.417 6.417 0 1 0 0 12.833 6.417 6.417 0 0 0 0-12.833zM1.46 7.001a5.542 5.542 0 1 1 11.083 0A5.542 5.542 0 0 1 1.461 7z"
            fill="#406BFF"
          />
        </svg>
      </ImageContainer>
      <OverImageContainer>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.44 4.521a.437.437 0 1 0-.875 0v2.042H4.523a.437.437 0 1 0 0 .875h2.042V9.48a.438.438 0 0 0 .875 0V7.438h2.042a.437.437 0 1 0 0-.875H7.44V4.521z"
            fill="#406BFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.003.584a6.417 6.417 0 1 0 0 12.833 6.417 6.417 0 0 0 0-12.833zM1.46 7.001a5.542 5.542 0 1 1 11.083 0A5.542 5.542 0 0 1 1.461 7z"
            fill="#406BFF"
          />
        </svg>
      </OverImageContainer>
    </Button>
  );
}

export default NewsMoreButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px auto 0px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.56px;
  text-align: left;
  color: var(--primary-primary-in-light);

  span {
    margin-right: 8px;
  }

  cursor: pointer;

  ${mp[0]} {
    font-size: 16px;
    line-height: 1.56;
    letter-spacing: 0.16px;
  }

  ${mp[1]} {
    font-size: 24px;
    line-height: 1.58;
    letter-spacing: 0.24px;
  }
`;

const ImageContainer = styled.span`
  & > svg {
    position: relative;
    top: 2px;
  }
  ${mp[0]} {
    display: none;
  }
`;
const OverImageContainer = styled.span`
  display: none;
  ${mp[0]} {
    display: flex;

    & > svg {
      position: relative;
      top: 4px;
    }
  }

  ${mp[1]} {
    display: flex;

    & > svg {
      position: relative;
      top: 5px;
    }
  }
`;
