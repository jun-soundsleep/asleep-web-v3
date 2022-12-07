import Image from 'next/image';
import ContactButton from '../common/ContactButton';

const SleepTechTopSection = () => {
  return (
    <div>
      <div
        className={`relative w-full h-[360px] medium:h-[750px] large:h-[993px]`}
      >
        <Image
          src={'/imagev3/sleeptech/sleeptech.png'}
          alt={'sleeptech'}
          fill
          priority={true}
        />
        <div
          className={`hidden medium:block absolute top-0 left-0 pt-[63px] px-[32px] large:pt-[261px] large:flex large:justify-center large:flex-col`}
        >
          <h1 className={`title-medi large:title-large large:text-center`}>
            Acoustic Sleep AI, The World’s only breathing sound-based Sleep AI
          </h1>
          <h2
            className={`b1-medi gray1 mt-[16px] medium:b1-medium-medi large:b1-large large:mt-[24px] large:text-center`}
          >
            AcousticSleep AI tracks the degree of activation of the autonomic
            nervous system through respiratory patterns and estimates the degree
            of muscle relaxation by analyzing the frequency patterns of
            breathing.
          </h2>
          <ContactButton
            styleClass={`large:hidden mt-[32px] text-white b1-medium-small min-w-[132px] min-h-[47px] flex justify-center items-center bg-[#2E2E2E] bg-opacity-15 medium:b2-medium-medi medium:min-w-[156px] medium:min-h-[55px] large:b2-medium-large large:min-w-[182px] medium:min-h-[64px] medium:mt-[40px] large:mt-[56px]`}
          />
        </div>
      </div>
      <div className={`px-[16px] pt-[49px] medium:hidden`}>
        <h1 className={`title-small`}>
          Acoustic Sleep AI, The World’s only breathing sound-based Sleep AI
        </h1>
        <h2 className={`b1-small gray1 mt-[16px]`}>
          AcousticSleep AI tracks the degree of activation of the autonomic
          nervous system through respiratory patterns and estimates the degree
          of muscle relaxation by analyzing the frequency patterns of breathing.{' '}
        </h2>
      </div>
    </div>
  );
};

export default SleepTechTopSection;
