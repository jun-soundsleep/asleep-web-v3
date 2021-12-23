import React, { useState } from 'react';
import styled from '@emotion/styled';
import PeopleSoloName from '../../../atoms/people/solo/PeopleSoloName';
import PeopleSoloBody from '../../../atoms/people/solo/PeopleSoloBody';
import PeopleSoloMoreButton from '../../../atoms/people/solo/PeopleSoloMoreButton';
import AsleepLayout from '../../AppLayout/AsleepLayout';
import PeopleThumnail from '../../../atoms/people/detail/PeopleThumbnail';
import DetailPeopleImage from '../../../atoms/people/detail/DetailPeopleImage';
import userWindowSize from '../../../../../hooks/userWindowSize';
import { mp } from '../../../../../styles/device';

function PeopleDetailPage({ data }) {
  const [mouseDown, setMouseDown] = useState(false);
  const [originX, setOriginX] = useState(0);
  const [moveX, setMoveX] = useState(undefined);

  const [currentPeople, setPeople] = useState(0);
  const size = userWindowSize();
  const list = React.createRef();

  const mImageSize = 312;
  const mListMargin = 20;
  const mListWidth = 174;
  const mMovePx = 200;

  const checkNeedTranslateButton = () => {
    return (
      size.width >
      mImageSize + data.length * mListWidth + mListMargin * data.length
    );
  };

  const handleMouseDown = e => {
    setMouseDown(true);
    setOriginX(e.clientX);
  };

  const handleMouseUp = e => {
    console.log('move up');
    setMouseDown(false);

    checkScrollRightDirection(e);
    setMoveX(findTransformPx(e.currentTarget.style.transform));
  };

  const handleMouseMove = e => {
    if (mouseDown) {
      const diffX =
        originX - e.clientX > 0
          ? (originX - e.clientX) * -1
          : Math.abs(originX - e.clientX);

      if (moveX !== undefined) {
        e.currentTarget.style.transform = `translateX(${moveX + diffX}px)`;
      } else {
        e.currentTarget.style.transform = `translateX(${diffX}px)`;
      }
    }
  };

  const findTransformPx = str => {
    const start = str.indexOf('(');
    const end = str.indexOf('p');
    const result = str.slice(start + 1, end);
    return Number(result);
  };

  const handleMouseOut = e => {
    checkScrollRightDirection(e);
    setMoveX(findTransformPx(e.currentTarget.style.transform));
    setMouseDown(false);
  };

  // 타입조심!! 파라미터 이벤트
  const checkScrollRightDirection = e => {
    if (findTransformPx(e.currentTarget.style.transform) > 0) {
      e.currentTarget.style.transform = `translateX(0px)`;
    }
  };

  const handleSlide = e => {
    // const newPosition = e.clientX - originX + afterX;
  };

  return (
    <>
      <Mobile>
        <AsleepLayout>
          <Wrapper>
            <DetailPeopleImage src={data[currentPeople].src} />
            <BodyContainer>
              <PeopleSoloName item={data[currentPeople].name} />
              <PeopleSoloBody item={data[currentPeople].body} />
              <PeopleSoloMoreButton href={data[currentPeople].href} />
              <ThumnailContainer>
                {data?.map(({ thumbnail }, idx) => (
                  <PeopleThumnail
                    key={idx}
                    src={thumbnail}
                    index={idx}
                    clickListener={setPeople}
                  />
                ))}
              </ThumnailContainer>
            </BodyContainer>
          </Wrapper>
        </AsleepLayout>
      </Mobile>
      <OverTablet>
        <DetailPeopleImage src={data[currentPeople].src} />
        <BodyContainer>
          <PeopleSoloName item={data[currentPeople].name} />
          <PeopleSoloBody item={data[currentPeople].body} />
          <PeopleSoloMoreButton href={data[currentPeople].href} />
          <OverTabletThumbnailContainer
            length={data.length}
            onMouseLeave={handleMouseOut}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            ref={list}
          >
            {data?.map(({ thumbnail }, idx) => (
              <PeopleThumnail
                key={idx}
                src={thumbnail}
                index={idx}
                clickListener={setPeople}
              />
            ))}
          </OverTabletThumbnailContainer>
        </BodyContainer>
      </OverTablet>
    </>
  );
}

export default PeopleDetailPage;

const Wrapper = styled.div`
  padding-top: 58px;
  ${mp[0]} {
    display: flex;
    justify-content: center;
    margin: 0 auto 48px;
    max-width: 720px;
  }
  ${mp[1]} {
    max-width: 1920px;
    margin: 0 auto 88px;
  }
`;

const Mobile = styled.div`
  display: block;
  ${mp[0]} {
    display: none;
  }
`;

const OverTablet = styled.div`
  display: none;

  ${mp[0]} {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
`;

const BodyContainer = styled.div`
  max-width: 360px;
  margin: 32px auto;

  ${mp[0]} {
    max-width: unset;
    position: relative;
    padding: 32px 20px;
    width: calc(100% - 312px);
  }

  ${mp[1]} {
    margin: 32px 0 0 108px;
  }
`;

const ThumnailContainer = styled.ul`
  width: 292px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 160px auto 0px;

  ${mp[0]} {
  }
  ${mp[1]} {
  }
`;

const OverTabletThumbnailContainer = styled.ul`
  display: flex;
  position: absolute;
  bottom: 24px;
  left: 24px;
  user-select: none;
  width: ${({ length }) => length * 174 + length * 20}px;
  /* width: 500px; */
  height: 242px;
  overflow-x: hidden;
  z-index: var(--peope-detail-thumbnail);
  transition: transform 100ms ease 0s;

  & > li {
    margin-right: 20px;
  }
`;
