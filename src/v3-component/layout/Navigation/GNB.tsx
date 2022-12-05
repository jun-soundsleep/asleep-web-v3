import Image from 'next/image';
import Link from 'next/link';
import ExitButton from '/public/imagev3/icon/exit.svg';
import HamburgerButton from '/public/imagev3/icon/Hamburger.svg';
import { useToggle } from 'react-use';
import { WEB_ROUTING } from '../../../../util/routing';
import useGetCurrentSize from '../../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../../styles/device';
import { GNB_DATA } from './GNB_DATA';
import { LargeMenu } from './LargeMenu';
import CesAlert from './CesAlert';
import { SmallDetailMenu } from './SmallDetailMenu';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { selectedItems } from './GNB.util';

const GNB = () => {
  const currentSize = useGetCurrentSize();
  const isMedium = currentSize === deviceType.medium;
  const isLarge = currentSize === deviceType.large;
  const [detailMenu, setDetailMenu] = useToggle(false);
  const [selectedItem, setSelectedItem] = useState<null | selectedItems>(null);

  return (
    <nav className={`fixed top-0 z-40`}>
      {isLarge && <CesAlert />}
      <div
        className={`relative h-[var(--gnb-height)] bg-black flex px-[16px] items-center justify-between medium:px-[36px] medium:py-[25px] medium:h-[var(--gnb-height-medi)] large:h-[var(--gnb-height-large)] large:px-[316px]`}
      >
        <Link href={WEB_ROUTING.main}>
          <Image
            className={'block'}
            src={'/imagev3/logo/Branding_logo.svg'}
            alt={'branding_logo'}
            width={isLarge ? 104 : isMedium ? 83 : 60}
            height={isLarge ? 35 : isMedium ? 27 : 20}
          />
        </Link>
        <div>
          <button
            className={`block large:hidden`}
            onClick={setDetailMenu}
          >
            {detailMenu ? <ExitButton /> : <HamburgerButton alt={'menu'} />}
          </button>
          {isLarge && <LargeMenu />}
        </div>
        {detailMenu && !isLarge && (
          <ul
            className={`absolute z-10 h-[539px] right-0 top-[var(--gnb-height)]  medium:"top-[var(--gnb-height-medi)] large:"top-[var(--gnb-height-large)] w-full medium:w-[unset] medium:w-[405px]`}
          >
            {GNB_DATA.map((el, idx) => {
              return (
                <SmallDetailMenu
                  key={idx}
                  title={el.page}
                  category={el.subCategory}
                  selectedHandler={setSelectedItem}
                  selectedItem={selectedItem}
                />
              );
            })}
            <motion.button
              className="absolute bottom-0 w-full bg-[#2226C1] h2-small text-white flex items-center justify-center min-h-[47px]"
              whileTap={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link
                href={WEB_ROUTING.main}
                className={`w-full h-full`}
              >
                Contact Us
              </Link>
            </motion.button>
          </ul>
        )}
      </div>
      {!isLarge && <CesAlert />}
    </nav>
  );
};

export default GNB;
