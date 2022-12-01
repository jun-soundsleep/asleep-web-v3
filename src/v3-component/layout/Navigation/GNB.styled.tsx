import Link from 'next/link';

export const SmallDetailSubMenu = ({ category, selected }) => {
  const listStyle = `h-[50px] ${selected ? 'h2-bold-small' : 'h2-small'} ${
    selected ? 'text-white' : '#C8C8C8'
  } flex items-center border-b-[1px] border-[#626262]`;

  return (
    <li className={`ml-[58px]`}>
      {category.map((el, idx) => {
        return (
          <Link
            href={el.link}
            key={idx}
            className={listStyle}
          >
            {el.title}
          </Link>
        );
      })}
    </li>
  );
};
