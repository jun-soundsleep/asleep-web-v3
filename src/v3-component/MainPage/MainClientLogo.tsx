import ClientLogo from '/public/imagev3/logo/Client_Logos.svg';
import ClientLargeLogo from '/public/imagev3/logo/Client_Logos_Large.svg';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';

const MainClientLogo = () => {
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

  return (
    <section
      className={`px-[16px] pt-[20px] flex  items-center flex-col gray2 medium:pt-[63px] medium:pt-[176px]`}
    >
      <h3 className={`caption-small medium:caption-medi large:b3-large`}>
        Trusted by Top Companies and Institutions
      </h3>
      <div
        className={`w-[305px] h-[76px] mt-[2px] medium:w-[724px] medium:h-[167px] medium:mt-[34px] medium:mt-[65px] large:w-[1288px] large:h-[63px]`}
      >
        {isLarge ? <ClientLargeLogo /> : <ClientLogo />}
      </div>
    </section>
  );
};

export default MainClientLogo;
