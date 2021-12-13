import React from 'react';
import styled from '@emotion/styled';
import FooterGroup from '../../atoms/Footer/FooterGroup';
import FooterGroupItem from '../../atoms/Footer/FooterGroupItem';

function FotterMoculeGroup({
  width,
  margin,
  title,
  item,
  rightItem,
  darkMode
}) {
  console.log(darkMode);

  return (
    <FotterMoculeGroupWrapper
      rightItem={rightItem}
      margin={margin}
      width={width}
    >
      <FooterGroup title={title} darkMode={darkMode} />
      {item &&
        item.map(({ item, href, outerLink }) => (
          <FooterGroupItem
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
`;
