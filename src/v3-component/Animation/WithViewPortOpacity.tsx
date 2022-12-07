import { motion } from 'framer-motion';
import { FC, ReactElement } from 'react';

type WithViewPortOpacityType = {
  children: ReactElement;
  styleClass?: string;
};

const WithViewPortOpacity: FC<WithViewPortOpacityType> = ({
  children,
  styleClass
}) => {
  return (
    <motion.section
      className={styleClass}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

export default WithViewPortOpacity;
