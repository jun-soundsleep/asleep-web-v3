import AccodianSection from '../common/AccodianSection';

const MAIN_FEATURE_DATA = [
  {
    title: 'Sleep Stages and Sleep Apnea Analysis',
    description:
      'Acoustic Sleep AI makes better predictions by simultaneously analyzing sleep stages and sleep apnea. By only using breathing sounds, Acoustic Sleep AI makes Sleep testing in a home environment viable.',
    image: '/images/main/home_6_l_2x.jpg'
  },
  {
    title: 'Verified in Hospital Environment and Home Environment',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_5_l_2x.jpg'
  },
  {
    title: 'Sex, Age, BMI, Sleep Disorder',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_7_l_2x.jpg'
  }
];

const SleepTechMedicalBackgroundSection = () => {
  return (
    <AccodianSection
      data={MAIN_FEATURE_DATA}
      head={'Medical Background'}
      subHead={'Acoustic Sleep AI has been medically validated'}
    />
  );
};

export default SleepTechMedicalBackgroundSection;
