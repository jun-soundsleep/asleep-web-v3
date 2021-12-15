import React from 'react';
import AsleepLayout from '../../src/components/organisms/AppLayout/AsleepLayout';
import SmallIcon from '../components/atoms/Business/SmallIcon';
import FullImageContainer from '../components/atoms/Common/FullImageContainer';
import IconImage from '../components/atoms/Common/IconImage';

function Business() {
  return (
    <AsleepLayout>
      <SmallIcon />
      {/* <FullImageContainer
        src="https://www.lunit.io/img/news/hero.jpg"
        srcL="https://www.lunit.io/img/news/hero.jpg"
        srcM="https://www.lunit.io/img/news/hero.jpg"
      /> */}
      <IconImage
        src="https://www.lunit.io/img/news/hero.jpg"
        srcM="/images/main/home_s.jpg"
        srcL="https://www.lunit.io/img/news/hero.jpg"
        sw={'20px'}
        sh={'20px'}
        mw={'20px'}
        mh={'20px'}
        lw={'20px'}
        lh={'20px'}
      />
    </AsleepLayout>
  );
}

export default Business;
