import AccodianSection from '../common/AccodianSection';

const MAIN_FEATURE_DATA = [
  {
    title: 'Realtime Sleep Tracking',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_6_l_2x.jpg'
  },
  {
    title: 'Realtime Sleep Tracking2',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_5_l_2x.jpg'
  },
  {
    title: 'Realtime Sleep Tracking3',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_7_l_2x.jpg'
  },
  {
    title: 'Realtime Sleep Tracking4',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_8_l_2x.jpg'
  }
];

const MainFeatures = () => {
  return (
    <AccodianSection
      data={MAIN_FEATURE_DATA}
      head={'Features'}
      subHead={'Sleeptrack API Features'}
    />
  );
};

export default MainFeatures;
