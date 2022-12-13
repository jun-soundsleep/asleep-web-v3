import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import ExternalLinkIcon from '/public/imagev3/icon/external_arrow.svg';
import MotionButton from '../common/MotionButton';
import { useContext, useEffect, useState } from 'react';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';
import { NewsContext } from '../../libs/store/newsList';
import { NewsListType } from '../../type/news';
import dayjs from 'dayjs';

const CompanyNewsList = () => {
  const range = 5;
  const list = useContext(NewsContext);
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;
  const tabList = [
    ...new Set(
      list.map(el => {
        return dayjs(el.date).year();
      }, [])
    )
  ].sort((a, b) => b - a);

  const sortNewList = (lastIndex: number) => {
    return list
      .filter(el => dayjs(el.date).year() === currentTab)
      .sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf())
      .slice(0, lastIndex);
  };

  const [currentTab, setCurrentTab] = useState<number>(tabList[0]);
  const [currentNewsIndex, setCurrentNewIndex] = useState(range);
  const [newList, setNewList] = useState(sortNewList(currentNewsIndex));

  useEffect(
    function getNewNewsList() {
      setNewList(sortNewList(currentNewsIndex));
    },
    [currentNewsIndex, currentTab]
  );

  const handleTabClick = (tab: number) => {
    if (tab !== currentTab) {
      setCurrentNewIndex(range);
      setCurrentTab(tab);
    }
  };

  const checkIfneedButtonOrNot = () => {
    return (
      list.filter(el => dayjs(el.date).year() === currentTab).length >
      currentNewsIndex
    );
  };

  const handleLoadMore = () => {
    setCurrentNewIndex(currentNewsIndex + range);
  };

  const getTab = () => {
    return (
      <div className={`flex mt-[16px] gap-[16px]`}>
        {tabList.map((year, idx) => {
          return (
            <div
              key={`CompanyNewsList-${idx}`}
              className={`flex`}
            >
              <div
                className={`b1-small ${
                  year === currentTab ? 'text-white' : 'gray2'
                }  mr-[16px] hover:text-white medium:b1-medium-medi large:sub-medi`}
                onClick={() => handleTabClick(year)}
              >
                {year}
              </div>
              {tabList.length - 1 !== idx && (
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

  const getList = () => {
    return (
      <ul className={`mt-[32px]`}>
        {newList.map(
          ({ title_en, date, company_en, externalLink }: NewsListType, idx) => {
            return (
              <li
                className={`border-b-[#626262] border-b-[1px] pb-[4px] medium:pb-[24px] large:pb-[14px] ${
                  idx === 0
                    ? 'mt-[32px] medium:mt-[48px] large:mt-[72px]'
                    : 'mt-[28px] medium:mt-[40px] large:mt-[16px]'
                }`}
                key={`${title_en}+${idx}`}
              >
                <a
                  href={externalLink}
                  className={`flex items-center justify-between gap-[17px] min-h-[58px]`}
                  target="__black"
                >
                  <div className={`b1-medium-small medium:b1-bold-medi`}>
                    {title_en}
                  </div>
                  {!isLarge && (
                    <div className={`w-[22px] h-[22px]`}>
                      <ExternalLinkIcon />
                    </div>
                  )}
                </a>
                <div
                  className={`mt-[4px] gray1 caption-small medium:b1-medium-medi`}
                >
                  {company_en} | {date}
                </div>
              </li>
            );
          }
        )}
      </ul>
    );
  };

  return (
    <WithViewPortOpacity styleClass={`mt-[56px] medium:mt-[200px]`}>
      <>
        <h1 className={`h1-bold-small medium:h1-medi large:h1-large`}>News</h1>
        {getTab()}
        {getList()}
        {checkIfneedButtonOrNot() && (
          <MotionButton
            text={'Load More'}
            clickHandler={handleLoadMore}
            styleClass={`bg-white/[0.15] px-[33px] py-[10px] mt-[24px] b1-medium-small medium:b2-medium-medi medium:px-[37px] medium:py-[12px] medium:mt-[48px] large:sub-large`}
          />
        )}
      </>
    </WithViewPortOpacity>
  );
};

export default CompanyNewsList;
