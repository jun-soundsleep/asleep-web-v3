import { useToggle } from 'react-use';
import ButtonDown from '/public/imagev3/icon/chevron-down.svg';
import { SmallDetailSubMenu } from './GNB.styled';
import { useEffect } from 'react';

export const SmallDetailMenu = ({
  title,
  category,
  selectedHandler,
  selectedItem
}) => {
  const [showSubMenu, setSubMenu] = useToggle(false);

  const arrowClickHandler = () => {
    selectedHandler(title);
    setSubMenu(!showSubMenu);
  };

  useEffect(() => {
    setSubMenu(title === selectedItem);
  }, [selectedItem]);

  return (
    <li className={`px-[16px] bg-[#121212] bg-opacity-80`}>
      <div
        className={`flex justify-between h-[62px] items-center ${
          showSubMenu ? 'text-white' : 'text-[#C8C8C8]'
        }  border-b-[1px] border-[#626262] h2-bold-small`}
      >
        <div>{title}</div>
        <button
          onClick={arrowClickHandler}
          className={`${
            showSubMenu && 'rotate-180'
          } transition-300 transition-all`}
        >
          <ButtonDown />
        </button>
      </div>
      {showSubMenu && (
        <SmallDetailSubMenu
          category={category}
          selected={showSubMenu}
        />
      )}
    </li>
  );
};