import React from 'react';
import styled from '@emotion/styled';
import FooterGroup from '../../atoms/Footer/FooterGroup';
import FooterGroupItem from '../../atoms/Footer/FooterGroupItem';
import { mp } from '../../../../styles/device';

function FotterMoculeGroup({
  width,
  margin,
  title,
  item,
  rightItem,
  darkMode
}) {
  return (
    <FotterMoculeGroupWrapper
      rightItem={rightItem}
      margin={margin}
      width={width}
    >
      <FooterGroup title={title} darkMode={darkMode} />
      {item &&
        item.map(({ item, href, outerLink }, idx) => (
          <FooterGroupItem
            key={idx}
            item={item}
            href={href}
            outerLink={outerLink}
            darkMode={darkMode}
          />
        ))}
    </FotterMoculeGroupWrapper>
  );
}

export default FotterMoculeGroup;

const FotterMoculeGroupWrapper = styled.ul`
  width: ${({ width }) => (width ? width : '152px')};
  margin: ${({ margin }) => margin && margin};
  margin-left: ${({ rightItem }) => rightItem && '16px'};

  ${mp[0]} {
    margin: 0px 48px 0px 0px;
  }

  ${mp[1]} {
    margin: 0px 170px 0px 0px;
  }
`;
