import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import LabelBodySection from '../common/LabelBodySection';
import Image from 'next/image';

const CompanyGoal = () => {
  return (
    <WithViewPortOpacity>
      <>
        <Ecosystem />
        <SleepAi />
      </>
    </WithViewPortOpacity>
  );
};

export default CompanyGoal;

const Ecosystem = () => {
  return (
    <div className={`large:flex large:gap-[96px]`}>
      <LabelBodySection
        head={'Extensions'}
        description={'Innovate your industries with ASLEEP’s solutions'}
      />
      <div
        className={`w-full h-[120px] relative mt-[32px] medium:h-[560px] medium:mt-[64px] large:h-[535px] large:mt-[unset]`}
      >
        <Image
          className={`absolute z-0`}
          src={'/imagev3/company/company_2.png'}
          alt={'main_image'}
          fill
        />
      </div>
    </div>
  );
};

const SleepAi = () => {
  return (
    <div
      className={`large:flex large:gap-[96px] mt-[135px] medium:mt-[212px] large:mt-[320px]`}
    >
      <LabelBodySection
        head={'Extensions'}
        description={'Innovate your industries with ASLEEP’s solutions'}
      />
      <div
        className={`w-full h-[120px] relative mt-[32px] medium:h-[560px] medium:mt-[64px] large:h-[535px] large:mt-[unset] large:order-first`}
      >
        <Image
          className={`absolute z-0`}
          src={'/imagev3/company/company_3.png'}
          alt={'main_image'}
          fill
        />
      </div>
    </div>
  );
};
