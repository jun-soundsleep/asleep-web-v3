import ButtonDown from '/public/imagev3/icon/chevron-down.svg';
import Link from 'next/link';
import { WEB_ROUTING } from '../../../../util/routing';

export const LargeMenu = () => {
  return (
    <ul className={`hidden large:flex text-white gap-[80px] items-center`}>
      <li className={`flex items-center gap-[8px]`}>
        Sleeptrack API
        <ButtonDown />
      </li>
      <li className={`flex items-center gap-[8px]`}>
        Sleeptrack API
        <ButtonDown />
      </li>
      <li className={`flex items-center gap-[8px]`}>
        Sleeptrack API
        <ButtonDown />
      </li>
      <li className={`flex items-center gap-[8px]`}>
        Sleeptrack API
        <ButtonDown />
      </li>
      <button className={`bg-[#2226c1] py-[13px] px-[24px] b3-bold-large`}>
        <Link href={WEB_ROUTING.main}>Contact Us</Link>
      </button>
    </ul>
  );
};
