import React from 'react';
import styled from '@emotion/styled';
import MainCardLabel from '../../atoms/Main/MainCardLabel';

function MainTechSection(props) {
  return (
    <>
      <MainCardLabel
        item={title}
        margin={
          largeView ? '0 auto 88px' : mediumView ? '0 auto 32px' : '0 auto'
        }
      />
    </>
  );
}

export default MainTechSection;
