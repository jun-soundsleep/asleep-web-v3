import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import LabelBodySection from '../common/LabelBodySection';
import Image from 'next/image';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';

const DATA = [
  {
    title: 'Smart Home & City',
    image: 'asdasd'
  },
  {
    title: 'Wellness',
    image: 'asdasd'
  },
  {
    title: 'Smart Home & City',
    image: 'asdasd'
  },
  {
    title: 'Wellness',
    image: 'asdasd'
  },
  {
    title: 'Smart Home & City',
    image: 'asdasd'
  },
  {
    title: 'Wellness',
    image: 'asdasd'
  },
  {
    title: 'Smart Home & City',
    image: 'asdasd'
  },
  {
    title: 'Wellness',
    image: 'asdasd'
  },
  {
    title: 'Smart Home & City',
    image: 'asdasd'
  },
  {
    title: 'Wellness',
    image: 'asdasd'
  },
  {
    title: 'Smart Home & City',
    image: 'asdasd'
  },
  {
    title: 'Wellness',
    image: 'asdasd'
  }
];

const SolutionExtensions = () => {
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

  return (
    <WithViewPortOpacity
      styleClass={`px-[16px] pt-[160px] medium:px-[32px] medium:pt-[340px] large:px-[316px]`}
    >
      <>
        <LabelBodySection
          head={'Extensions'}
          description={'Innovate your industries with ASLEEP’s solutions'}
        />
        <div
          className={`grid grid-cols-2 gap-[18px] mt-[32px] medium:grid-cols-3 medium:gap-[24px] medium:mt-[48px] large:grid-cols-4 large:gap-[32px] large:mt-[56px]`}
        >
          {DATA.map((el, idx) => {
            return (
              <div
                key={idx}
                className={`large:flex large:justify-center large:items-center large:flex-col`}
              >
                {isLarge ? (
                  <Image
                    src={'/imagev3/solutions/image_7.png'}
                    alt={''}
                    width={300}
                    height={300}
                  />
                ) : (
                  <div className={`relative aspect-square w-full`}>
                    <Image
                      src={'/imagev3/solutions/image_7.png'}
                      alt={''}
                      fill
                    />
                  </div>
                )}
                <div
                  className={`text-center mt-[6px] medium:b2-medi large:b1-bold-large large:mt-[11px]`}
                >
                  {el.title}
                </div>
              </div>
            );
          })}
        </div>
      </>
    </WithViewPortOpacity>
  );
};

export default SolutionExtensions;
