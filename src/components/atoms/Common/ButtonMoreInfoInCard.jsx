import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../.././../../styles/device';

function ButtonMoreInfoInCard({
  hexColor,
  item,
  itemColor,
  fontWeight,
  clickListener,
  margin
}) {
  return (
    <Container
      itemColor={itemColor}
      onClick={clickListener}
      fontWeight={fontWeight}
      margin={margin}
    >
      <Text>
        <span>{item}</span>
        <ArrowImg>
          <svg
            width="13"
            height="13"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.72 19.639a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 1 0-1.06 1.06l4.97 4.97H4.25a.75.75 0 0 0 0 1.5h14.44l-4.97 4.97a.75.75 0 0 0 0 1.06z"
              fill={hexColor}
            />
          </svg>
        </ArrowImg>
        <OverTabletImg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.72 19.639a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 1 0-1.06 1.06l4.97 4.97H4.25a.75.75 0 0 0 0 1.5h14.44l-4.97 4.97a.75.75 0 0 0 0 1.06z"
              fill={hexColor}
            />
          </svg>
        </OverTabletImg>
      </Text>
    </Container>
  );
}

export default ButtonMoreInfoInCard;

const Container = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  font-size: 13px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 500)};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.77;
  letter-spacing: -0.59px;
  text-align: left;
  color: ${({ itemColor }) => itemColor && itemColor};
  margin: ${({ margin }) => (margin ? margin : '0px 0px 0px 13.5px')};
  cursor: pointer;

  ${mp[0]} {
    margin: ${({ margin }) => (margin ? margin : '0px 0px 0px 15px')};
  }
  ${mp[1]} {
    font-size: 24px;
    line-height: 1.58;
    letter-spacing: 0.24px;
    margin: ${({ margin }) => (margin ? margin : '0px 0px 0px 25.6px')};
  }
`;

const ArrowImg = styled.span`
  position: relative;
  top: 1.5px;

  ${mp[1]} {
    display: none;
  }
`;

const OverTabletImg = styled.span`
  display: none;
  ${mp[1]} {
    display: block;
    position: relative;
    top: 2px;
  }
`;

const Text = styled.span`
  margin-right: 8px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin-right: 8px;
  }
`;
