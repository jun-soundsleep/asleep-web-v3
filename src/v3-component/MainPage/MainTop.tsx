import Image from 'next/image';
import ContactButton from '../common/ContactButton';

const MainTop = () => {
  return (
    <div className={`relative h-[510px] medium:h-[697px] large:h-[836px]`}>
      <Image
        className={`absolute z-0`}
        src={'/imagev3/main/main_top.png'}
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
          {'Enter the Bedroom\nMarket with\nSleeptrack API'}
        </h1>
        <h2
          className={`b1-small text-[#B6B6B6] mt-[16px] medium:b1-medium-medi large:sub-large large:mt-[24px]`}
        >
          {
            'Industry leading companies are using\nSleeptrack API to understand their\ncustomers sleep and create\ninnovative business use cases.'
          }
        </h2>
        <ContactButton />
      </div>
    </div>
  );
};

export default MainTop;
