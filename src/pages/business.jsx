import React from 'react';
import AsleepLayout from '../../src/components/organisms/AppLayout/AsleepLayout';
import SmallIcon from '../components/atoms/Business/SmallIcon';
import ImageContainer from '../components/atoms/Common/ImageContainer';

function Business() {
  return (
    <AsleepLayout>
      <SmallIcon />
      <ImageContainer src="https://www.lunit.io/img/news/hero.jpg" />
    </AsleepLayout>
  );
}

export default Business;
