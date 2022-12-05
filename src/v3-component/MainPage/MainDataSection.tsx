import { MainSectionH2, MainSectionLabel } from './Main.styled';
import Image from 'next/image';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';

const SmallView = (): JSX.Element => {
  return (
    <>
      {Array(3)
        .fill(0)
        .map(el => {
          return (
            <>
              <div className={`relative mt-[32px] w-full h-[184px]`}>
                <Image
                  src={'/images/main/home_5_l_2x.jpg'}
                  alt={'aasd'}
                  fill
                />
              </div>
              <h3 className={`mt-[16px] sub-bold-small`}>
                4 Class Sleep Staging (Sleep Quality)
              </h3>
              <h4 className={`mt-[4px] gray2`}>
                Wake, Light, Deep, and REM in 30 second resolution.
              </h4>
            </>
          );
        })}
    </>
  );
};

const MediumView = (): JSX.Element => {
  return (
    <>
      {Array(3)
        .fill(0)
        .map((_, idx) => {
          return (
            <div
              className={`flex h-[221px] mb-[24px] ${idx === 0 && 'mt-[64px]'}`}
            >
              <div className={`px-[32px] pt-[59px] bg-[#1E1F21]`}>
                <h3 className={`mt-[16px] sub-bold-small`}>
                  4 Class Sleep Staging (Sleep Quality)
                </h3>
                <h4 className={`mt-[4px] gray2`}>
                  Wake, Light, Deep, and REM in 30 second resolution.
                </h4>
              </div>
              <div className={`w-full h-full relative`}>
                <Image
                  src={'/images/main/home_5_l_2x.jpg'}
                  alt={'aasd'}
                  fill
                />
              </div>
            </div>
          );
        })}
    </>
  );
};

const LargeView = (): JSX.Element => {
  return (
    <div className={`flex items-center justify-between gap-[32px]`}>
      {Array(3)
        .fill(0)
        .map((_, idx) => {
          return (
            <div className={`mt-[56px]`}>
              <div className={`relative h-[276px] w-full grow`}>
                <Image
                  src={'/images/main/home_5_l_2x.jpg'}
                  alt={'aasd'}
                  fill
                />
              </div>
              <div>
                <h3 className={`mt-[32px] b1-bold-large`}>
                  4 Class Sleep Staging (Sleep Quality)
                </h3>
                <h4 className={`mt-[48x] b2-large gray2`}>
                  Wake, Light, Deep, and REM in 30 second resolution.
                </h4>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const MainDataSection = () => {
  const currentSize = useGetCurrentSize();

  const renderView = {
    [deviceType.large]: <LargeView />,
    [deviceType.small]: <SmallView />,
    [deviceType.medium]: <MediumView />
  };

  return (
    <section
      className={`mt-[131px] px-[16px] large:mt-[175px] large:px-[317px] flex items-center flex-col`}
    >
      <MainSectionLabel title={'Data'} />
      <div className={`mt-[12px]`} />
      <MainSectionH2
        title={'With Just a Microphone,\n' + 'Get Users’ Sleep Data'}
      />
      {renderView[currentSize]}
    </section>
  );
};

export default MainDataSection;
