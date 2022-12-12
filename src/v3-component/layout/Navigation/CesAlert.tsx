import SubStrackIcon from '/public/imagev3/icon/Subtract.svg';
import styles from './ces.module.css';
import useGetCurrentSize from '../../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../../styles/device';

const CesAlert = () => {
  const currentSize = useGetCurrentSize();
  const isSmall = currentSize === deviceType.small;

  return (
    <div
      className={`relative bg-[#191998] h-[38px] w-screen flex items-center justify-center overflow-hidden medium:h-[46px]`}
    >
      <div
        className={`flex gap-[16px] w-full h-full absolute left-0 top-0 ${styles.scrollAnimation} medium:px-[36px] large:px-[316px]`}
      >
        <Item />
        {isSmall && <Item />}
      </div>
    </div>
  );
};

export default CesAlert;

const Item = () => {
  const textStyle = `flex-shrink-0 b2-bold-small text-white medium:b1-bold-medi large:sub-large`;

  return (
    <div
      className={`flex flex-shrink-0 items-center justify-between w-full h-full`}
    >
      <div className={textStyle}>ASLEEP in 2023 CES</div>
      <div
        className={`flex-shrink-0 w-[16px] h-[16px] medium:w-[26px] medium:h-[26px] large:w-[32px] large:h-[32px]`}
      >
        <SubStrackIcon className={`large:w-[32px] large:h-[32px]`} />
      </div>
      <div className={textStyle}>Look around our booth</div>
    </div>
  );
};
