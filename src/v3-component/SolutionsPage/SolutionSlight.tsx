import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import AccodianImageFirst from '../common/AccodianImageFirst';

const MAIN_FEATURE_DATA = [
  {
    title: 'Sleep & Light Report',
    description:
      'Understanding light features before and after sleep is essential for better sleep. The SLIGHT report illustrates the correlation between light and sleep.',
    image: '/images/main/home_6_l_2x.jpg'
  },
  {
    title: 'Sleep Light Environment',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_5_l_2x.jpg'
  },
  {
    title: 'Dawn Simulation with REM Alarm',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_7_l_2x.jpg'
  }
];

const SolutionSlight = () => {
  return (
    <WithViewPortOpacity
      styleClass={`px-[16px] pt-[116px] medium:px-[32px] medium:pt-[216px] large:px-[316px] large:pt-[276px]`}
    >
      <AccodianImageFirst
        data={MAIN_FEATURE_DATA}
        defaultImage={'/images/main/home_9_l_2x.jpg'}
        head={'ASLEEP'}
        description={
          'Recovering my own rhythm\nfrom hyper-personalized\nlighting'
        }
      />
    </WithViewPortOpacity>
  );
};

export default SolutionSlight;
