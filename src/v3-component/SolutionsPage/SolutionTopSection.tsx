import Image from 'next/image';
import styles from '../MainPage/index.module.css';

const SolutionTopSection = () => {
  return (
    <div
      className={`${styles.mainImageContainer} relative medium:h-[calc(100vh-var(--gnb-height-medi)-var(--cesAlert-height-medi))] large:h-[calc(100vh-var(--gnb-height---gnb-height-large)-var(--cesAlert-height-medi))]`}
    >
      <Image
        className={`absolute z-0`}
        src={'/imagev3/solutions/solution_1.png'}
        alt={'main_image'}
        fill
        priority
        quality={100}
      />
      <div
        className={`absolute z-10 top-0 left-0 pt-[48px] px-[16px] title-small medium:px-[32px] medium:pt-[70px] large:px-[316px] large:pt-[179px]`}
      >
        <h1
          className={`text-white title-small medium:title-medi large:title-large`}
        >
          {
            'Explore innovative\nsleep care solutions\npowered by\nSleeptrack API'
          }
        </h1>
      </div>
    </div>
  );
};

export default SolutionTopSection;
