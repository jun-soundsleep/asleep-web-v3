import { motion } from 'framer-motion';
import StarIcon from '/public/imagev3/main/star.svg';
import styles from './index.module.css';

const MainPdfDownload = () => {
  return (
    <motion.section
      className={`px-[16px] mt-[88px] medium:px-[32px] large:mt-[103px]  large:px-[318px]`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div
        className={`w-full px-[32px] flex flex-col pt-[53px] items-center pb-[32px] ${styles.mainPdfGradient} medium:px-[55px] medium:items-start large:px-[80px] large:py-[80px] large:flex-row-reverse`}
      >
        <div
          className={`w-[164px] h-[164px] medium:flex medium:w-full medium:justify-center large:w-[291px] large:h-[291px]`}
        >
          <StarIcon />
        </div>
        <div>
          <h2
            className={`h1-small medium:h1-medium-medi medium:mt-[47px] large:mt-[unset] large:h1-large`}
          >
            Innovate Sleep Tech with R&D Partnership
          </h2>
          <h3
            className={`gray0 b3-large-small mt-[16px] medium:b1-medium-medi medium:mt-[16px] large:b1-large`}
          >
            Develop sleep environment control algorithms through R&D. Improve
            your customers’ sleep quality with your devices.
          </h3>
          <div className={`medium:text-left`}>
            <motion.button
              className={`w-full h-[47px] bg-[#2226C1] mt-[24px] medium:max-w-[166px] medium:px-[23px] medium:px-[12px] medium:h-[55px] medium:mt-[32px] large:sub-large large:max-w-[240px] large:px-[46px] large:py-[15px] large:h-[64px] large:mt-[50px]`}
              whileTap={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Download PDF
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MainPdfDownload;
