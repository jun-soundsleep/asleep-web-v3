import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import ExtenalLinkIcon from '/public/imagev3/icon/external_arrow.svg';
import MotionButton from '../common/MotionButton';
import { FC } from 'react';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';

const TEMP = [2022, 2021, 2020];

const TEST = [
  {
    title: 'lakasdlakjdalkdjsalkd',
    company: '중앙일보',
    date: '2022.07.21',
    link: 'https://www.naver.com'
  },
  {
    title: 'lakasdlakjdalkdjsalkd',
    company: '중앙일보',
    date: '2022.07.21',
    link: 'https://www.naver.com'
  },
  {
    title: 'lakasdlakjdalkdjsalkd',
    company: '중앙일보',
    date: '2022.07.21',
    link: 'https://www.naver.com'
  },
  {
    title: 'lakasdlakjdalkdjsalkd',
    company: '중앙일보',
    date: '2022.07.21',
    link: 'https://www.naver.com'
  },
  {
    title: 'lakasdlakjdalkdjsalkd',
    company: '중앙일보',
    date: '2022.07.21',
    link: 'https://www.naver.com'
  },
  {
    title: 'lakasdlakjdalkdjsalkd',
    company: '중앙일보',
    date: '2022.07.21',
    link: 'https://www.naver.com'
  }
];

const CompanyNewsList = () => {
  const getTab = () => {
    return (
      <div className={`flex mt-[16px] gap-[16px] `}>
        {' '}
        {TEMP.map((el, idx) => {
          return (
            <div
              key={`CompanyNewsList-${idx}`}
              className={`flex`}
            >
              <div
                className={`b1-small gray2 mr-[16px] hover:text-white medium:b1-medium-medi large:sub-medi`}
              >
                {el}
              </div>
              {TEMP.length - 1 !== idx && (
                <div
                  className={`b1-small gray2 h-full border-r-[1px] border-r-[#8C8C8C]`}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <WithViewPortOpacity styleClass={`mt-[56px] medium:mt-[200px]`}>
      <>
        <h1 className={`h1-bold-small medium:h1-medi large:h1-large`}>News</h1>
        {getTab()}
        {<List />}
        <MotionButton
          text={'Load More'}
          clickHandler={() => {
            console.log('a,sdkmaldskjasd');
          }}
          styleClass={`bg-white/[0.15] px-[33px] py-[10px] mt-[24px] b1-medium-small medium:b2-medium-medi medium:px-[37px] medium:py-[12px] medium:mt-[48px] large:sub-large`}
        />
      </>
    </WithViewPortOpacity>
  );
};

export default CompanyNewsList;

type ListType = {
  title: string;
  link: string;
  date: string;
  company: string;
};

const List: FC = () => {
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;
  return (
    <ul className={`mt-[32px]`}>
      {TEST.map(({ title, date, company, link }: ListType, idx) => {
        return (
          <li
            className={`border-b-[#626262] border-b-[1px] pb-[4px] medium:pb-[24px] large:pb-[14px] ${
              idx === 0
                ? 'mt-[32px] medium:mt-[48px] large:mt-[72px]'
                : 'mt-[28px] medium:mt-[40px] large:mt-[16px]'
            }`}
            key={`${title}+${idx}`}
          >
            <a
              href={link}
              className={`flex items-center justify-between gap-[17px] min-h-[58px]`}
              target="__black"
            >
              <div className={`b1-medium-small medium:b1-bold-medi`}>
                {title}
              </div>
              {!isLarge && (
                <div className={`w-[22px] h-[22px]`}>
                  <ExtenalLinkIcon />
                </div>
              )}
            </a>
            <div
              className={`mt-[4px] gray1 caption-small medium:b1-medium-medi`}
            >
              {company} | {date}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
