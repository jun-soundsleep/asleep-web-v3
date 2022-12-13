import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { WEB_ROUTING } from '../../../util/routing';

type MotionButtonType = {
  text: string;
  styleClass?: string;
  externalLink?: string;
  clickHandler?: () => void;
};

const MotionButton: FC<MotionButtonType> = ({
  text,
  styleClass,
  externalLink,
  clickHandler
}) => {
  const getText = () => {
    const commonStyle = `w-full h-full`;
    return (
      <div>
        {' '}
        {externalLink ? (
          <a
            href={externalLink}
            target={'__blank'}
            className={commonStyle}
          >
            {text}
          </a>
        ) : (
          <Link
            href={WEB_ROUTING.main}
            className={commonStyle}
          >
            {text}
          </Link>
        )}
      </div>
    );
  };

  return (
    <motion.button
      className={
        styleClass ??
        `bg-[#3C41EA] px-[33px] py-[10px] mt-[24px] b1-medium-small medium:b2-medium-medi medium:px-[37px] medium:py-[12px] medium:mt-[48px] large:sub-large`
      }
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      whileTap={{ scale: 1.2 }}
      onClick={clickHandler}
    >
      {clickHandler ? <div>{text}</div> : getText()}
    </motion.button>
  );
};

export default MotionButton;
