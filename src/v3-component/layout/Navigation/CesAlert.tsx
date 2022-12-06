import SubStrackIcon from '/public/imagev3/icon/Subtract.svg';

const CesAlert = () => {
  const textStyle = `b2-bold-small text-white medium:b1-bold-medi large:sub-large`;

  return (
    <div
      className={`bg-[#191998] h-[38px] w-screen px-[16px] flex items-center justify-center medium:h-[46px] overflow-hidden`}
    >
      <div className={`flex items-center justify-between  gap-[15px]`}>
        <div className={textStyle}>ASLEEP in 2023 CES</div>
        <div
          className={`w-[16px] h-[16px] medium:w-[26px] medium:h-[26px] large:w-[32px] large:h-[32px]`}
        >
          <SubStrackIcon className={`large:w-[32px] large:h-[32px]`} />
        </div>
        <div className={textStyle}>Look around our booth</div>
      </div>
    </div>
  );
};

export default CesAlert;
