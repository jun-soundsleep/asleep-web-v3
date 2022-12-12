import Image from 'next/image';
import styles from './index.module.css';

const CompanyTopSection = () => {
  return (
    <div
      className={`${styles.companyImageContainer} relative medium:h-[calc(100vh-var(--gnb-height-medi)-var(--cesAlert-height-medi))] large:h-[calc(100vh-var(--gnb-height---gnb-height-large)-var(--cesAlert-height-medi))]`}
    >
      <Image
        className={`absolute z-0`}
        src={'/imagev3/company/company_1.png'}
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
          Catch your breath, and find your rhythm of life
        </h1>
        <h2
          className={`b1-small text-[#B6B6B6] mt-[16px] medium:b1-medium-medi large:sub-large large:mt-[24px]`}
        >
          We create a world based on mutual understanding and caring for
          wellness by accurately measuring and interpreting sleep.
        </h2>
      </div>
    </div>
  );
};

export default CompanyTopSection;
