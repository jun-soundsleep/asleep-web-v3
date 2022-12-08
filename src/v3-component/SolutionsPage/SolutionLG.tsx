import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import TextWithWishIcon from '../common/TextWithWishIcon';
import LabelBodySection from '../common/LabelBodySection';
import Image from 'next/image';
import MotionButton from '../common/MotionButton';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';

const SolutionLG = () => {
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

  return (
    <WithViewPortOpacity
      styleClass={`pt-[88px] px-[16px] large:px-[317px] large:pt-[240px]`}
    >
      <>
        <TextWithWishIcon text={'Smart IoT'} />
        <div
          className={`large:flex large:gap-[96px] items-start large:mt-[232px]`}
        >
          {isLarge && (
            <Image
              src={'/imagev3/solutions/lg.png'}
              width={674}
              height={674}
              alt={''}
            />
          )}
          <div>
            <LabelBodySection
              head={'LG'}
              description={`LG home appliances\npowered by Sleeptrack\nAPI`}
              styleClass={`mt-[114px] medium:mt-[176px] large:mt-[0px]`}
            />
            {!isLarge && (
              <div
                className={`relative w-full h-[260px] mt-[16px] medium:mt-[32px] medium:h-[414px]`}
              >
                <Image
                  src={'/imagev3/solutions/lg.png'}
                  fill
                  alt={''}
                />
              </div>
            )}
            <p
              className={`b1-small gray1 mt-[16px] medium:b2-large large:mt-[24px]`}
            >
              {`Air conditioners, humidifiers, and purifiers starts to care about\ncustomers’ sleep. LG provides the best customized sleep\nenvironment with the sleep data.`}
            </p>
            <MotionButton
              text={'See all intergrations'}
              styleClass={`bg-white/[.15] bg-op-1 px-[33px] py-[10px] mt-[24px] b1-medium-small medium:b2-medium-medi medium:px-[37px] medium:py-[12px] medium:mt-[32px] large:sub-large large:mt-[48px]`}
              externalLink={'https://www.naver.com'}
            />
          </div>
        </div>
      </>
    </WithViewPortOpacity>
  );
};

export default SolutionLG;
