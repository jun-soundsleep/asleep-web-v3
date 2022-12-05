import ButtonDown from '/public/imagev3/icon/chevron-down.svg';
import Link from 'next/link';
import { WEB_ROUTING } from '../../../../util/routing';
import { motion } from 'framer-motion';
import { GNB_DATA } from './GNB_DATA';
import { useToggle } from 'react-use';
import { useEffect, useState } from 'react';
import { selectedItems } from './GNB.util';

export const LargeMenu = () => {
  const [selectedItem, setSelectedItem] = useState<null | selectedItems>(null);

  return (
    <ul className={`hidden large:flex text-white gap-[80px] items-center`}>
      {GNB_DATA.map((el, idx) => {
        return (
          <LargeList
            key={idx}
            title={el.page}
            category={el.subCategory}
            selectedHandler={setSelectedItem}
            selectedItem={selectedItem}
          />
        );
      })}
      <motion.button
        className={`bg-[#2226c1] py-[13px] px-[24px] b3-bold-large`}
        whileTap={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Link href={WEB_ROUTING.main}>Contact Us</Link>
      </motion.button>
    </ul>
  );
};

const LargeList = ({ title, category, selectedHandler, selectedItem }) => {
  const [showSubMenu, setSubMenu] = useToggle(false);

  const listClickHandler = () => {
    selectedHandler(title);
    setSubMenu(!showSubMenu);
  };

  useEffect(() => {
    setSubMenu(title === selectedItem);
  }, [selectedItem]);

  return (
    <li
      onClick={listClickHandler}
      className={`flex items-center gap-[8px] relative`}
    >
      <span>{title}</span>
      <button className={`relative`}>
        <div
          className={`w-[24px] h-[24px] medium:w-[27px] medium:h-[27px] relative`}
        >
          <ButtonDown
            className={`${
              showSubMenu && 'rotate-180'
            } transition-300 transition-all`}
          />
          {showSubMenu && <LargeSubList category={category} />}
        </div>
      </button>
    </li>
  );
};

const LargeSubList = ({ category }) => {
  const listStyle = `text-[#B6B6B6] hover:text-white border-b-[1px] border-[#626262] h-[54px] flex items-center`;

  return (
    <div
      className={`absolute top-[43px] right-2/4 w-[230px] bg-[#121212] bg-opacity-80 min-w-[230px] px-[16px]`}
    >
      <ul>
        {category.map((el, idx) => {
          return (
            <li
              className={listStyle}
              key={idx}
            >
              <Link href={el.link}>{el.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
