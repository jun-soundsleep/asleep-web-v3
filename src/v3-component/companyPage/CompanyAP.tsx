import React from 'react';
import CompanyAccodian from './Common/CompanyAccodian';
import WithViewPortOpacity from '../Animation/WithViewPortOpacity';

const MAIN_FEATURE_DATA = [
  {
    title: 'Perseverance in Problem Solving',
    description: [
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.'
    ],
    image: '/images/main/home_6_l_2x.jpg'
  },
  {
    title: 'Wider, Bigger, Further',
    description: [
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.'
    ],
    image: '/images/main/home_5_l_2x.jpg'
  },
  {
    title: 'Ownership',
    description: [
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.'
    ],
    image: '/images/main/home_7_l_2x.jpg'
  },
  {
    title: 'Communicate with Integrity',
    description: [
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.'
    ],
    image: '/images/main/home_8_l_2x.jpg'
  },
  {
    title: 'Action Mindset',
    description: [
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.'
    ],
    image: '/images/main/home_8_l_2x.jpg'
  },
  {
    title: 'Voicing and Commitment',
    description: [
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.'
    ],
    image: '/images/main/home_8_l_2x.jpg'
  }
];

const CompanyAp = () => {
  return (
    <WithViewPortOpacity
      styleClass={`mt-[165px] medium:mt-[280px] large:mt-[341px]`}
    >
      <>
        <h1 className={`h1-bold-small medium:h1-medi large:h1-large`}>
          {'We work together under\nASLEEP Principles'}
        </h1>
        <CompanyAccodian data={MAIN_FEATURE_DATA} />
      </>
    </WithViewPortOpacity>
  );
};

export default CompanyAp;
