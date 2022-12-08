import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import AccodianImageFirst from '../common/AccodianImageFirst';
import TextWithWishIcon from '../common/TextWithWishIcon';

const MAIN_FEATURE_DATA = [
  {
    title: 'Sleep & Light Report',
    description:
      'Slee curates your sleep status in comprehensive sentences and friendly report',
    image: '/images/main/home_5_l_2x.jpg'
  },
  {
    title: 'Dream Scene',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_5_l_2x.jpg'
  },
  {
    title: 'REM Alarm',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_7_l_2x.jpg'
  }
];

const SolutionSlee = () => {
  return (
    <WithViewPortOpacity
      styleClass={`px-[16px] pt-[116px] medium:px-[32px] medium:pt-[216px] large:px-[316px] large:pt-[276px]`}
    >
      <>
        <TextWithWishIcon text={'Healthcare'} />
        <div className={`mt-[112px] medium:mt-[162px] large:mt-[232px]`} />
        <AccodianImageFirst
          data={MAIN_FEATURE_DATA}
          defaultImage={'/images/main/home_3_l_2x.jpg'}
          head={'ASLEEP'}
          description={'Slee,\nmobile sleeptrack app with user friendly report'}
          appStore={{
            androidLink: 'https://toss.com',
            iosLink: 'https://sss.com'
          }}
          // styleClass={`mt-[112px]`}
        />
      </>
    </WithViewPortOpacity>
  );
};

export default SolutionSlee;
