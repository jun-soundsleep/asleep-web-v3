import WishIcon from '/public/imagev3/solutions/Wish.svg';
import { FC } from 'react';

type TextWithWishIconType = {
  text: string;
};

const TextWithWishIcon: FC<TextWithWishIconType> = ({ text }) => {
  return (
    <div className={`flex justify-center items-center flex-col`}>
      <div
        className={`w-[16px] h-[16px] medium:w-[24px] medium:h-[24px] large:w-[30px] large:h-[30px]`}
      >
        <WishIcon />
      </div>
      <div
        className={`mt-[16px] h2-bold-small medium:h2-medium-medi medium:mt-[24px] large:h1-large`}
      >
        {text}
      </div>
    </div>
  );
};

export default TextWithWishIcon;
