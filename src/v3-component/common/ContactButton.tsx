import React, { FC } from 'react';
import Link from 'next/link';
import { WEB_ROUTING } from '../../../util/routing';
import { motion } from 'framer-motion';

type ContactButtonType = {
  linkTo?: string;
  text?: string;
  styleClass?: string;
};

const ContactButton: FC<ContactButtonType> = ({ styleClass }) => {
  return (
    <motion.button
      className={
        styleClass ??
        `mt-[32px] text-white b1-medium-small min-w-[132px] min-h-[47px] flex justify-center items-center bg-[#2E2E2E] bg-opacity-15 medium:b2-medium-medi medium:min-w-[156px] medium:min-h-[55px] large:b2-medium-large large:min-w-[182px] medium:min-h-[64px] medium:mt-[40px] large:mt-[56px]`
      }
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      whileTap={{ scale: 1.2 }}
    >
      <Link href={WEB_ROUTING.main}>Contact Us</Link>
    </motion.button>
  );
};

export default ContactButton;
