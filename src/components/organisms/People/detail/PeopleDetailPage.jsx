import React, { useState, forwardRef } from 'react';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import PeopleSoloName from '../../../atoms/people/solo/PeopleSoloName';
import PeopleSoloBody from '../../../atoms/people/solo/PeopleSoloBody';
import PeopleSoloMoreButton from '../../../atoms/people/solo/PeopleSoloMoreButton';
import AsleepLayout from '../../AppLayout/AsleepLayout';
import PeopleThumnail from '../../../atoms/people/detail/PeopleThumbnail';
import DetailPeopleImage from '../../../atoms/people/detail/DetailPeopleImage';
import DetailPeopleDirectionButton from '../../../atoms/people/detail/DetailPeopleDirectionButton';
import { useRouter } from 'next/router';
import { mp } from '../../../../../styles/device';
import DetailPeopleDirectionLeftButton from '../../../atoms/people/detail/DetailPeopleDirectionLeftButton';

const OverTabletThumbnailContainerComponent = dynamic(
  import('../../../atoms/people/detail/OverTabletThumbnailContainer')
);

// eslint-disable-next-line react/display-name
const ForwardedOverTabletThumbnailContainer = forwardRef((props, ref) => {
  return (
    <OverTabletThumbnailContainerComponent {...props} forwardedRef={ref} />
  );
});

const ThumbnailComponent = dynamic(
  import('../../../atoms/people/detail/PeopleThumbnail')
);

// eslint-disable-next-line react/display-name
const ForwardedThumbnail = forwardRef((props, ref) => {
  return <ThumbnailComponent {...props} forwardedRef={ref} />;
});

function PeopleDetailPage({ data }) {
  const [mouseDown, setMouseDown] = useState(false);
  const [originX, setOriginX] = useState(0);
  const [moveX, setMoveX] = useState(undefined);
  const [currentPeople, setPeople] = useState(0);
  const moveTodoAnimation = 80;

  const router = useRouter();
  const list = React.createRef();
  const card = React.createRef();

  const handleMouseDown = e => {
    setMouseDown(true);
    setOriginX(e.clientX);
  };

  const handleMouseUp = e => {
    const cardMarginRight = calculateMarginRight(
      getComputedStyle(card?.current).marginRight
    );
    const cardWidth = card?.current.offsetWidth;
    const rightBoundary = ((cardMarginRight + cardWidth) * data.length * 3) / 4;

    if (
      rightBoundary <= Math.abs(findTransformPx(list.current.style.transform))
    ) {
      list.current.style.transform = `translateX(-${
        rightBoundary + moveTodoAnimation
      }px)`;
      moveUnderRightBoundaryWhenDrag(rightBoundary);
    }

    setMouseDown(false);
    checkScrollRightDirection(e);
    setMoveX(findTransformPx(e.currentTarget.style.transform));
  };

  const handleMouseMove = e => {
    if (mouseDown) {
      const cardMarginRight = calculateMarginRight(
        getComputedStyle(card?.current).marginRight
      );
      const cardWidth = card?.current.offsetWidth;
      const rightBoundary =
        ((cardMarginRight + cardWidth) * data.length * 3) / 4;

      const diffX =
        originX - e.clientX > 0
          ? (originX - e.clientX) * -1
          : Math.abs(originX - e.clientX);

      if (
        rightBoundary <= Math.abs(findTransformPx(list.current.style.transform))
      ) {
        list.current.style.transform = `translateX(-${
          rightBoundary + moveTodoAnimation
        }px)`;
        moveUnderRightBoundaryWhenDrag(rightBoundary);
        setMoveX(findTransformPx(list.current.style.transform));
        return;
      }

      if (moveX !== undefined) {
        e.currentTarget.style.transform = `translateX(${moveX + diffX}px)`;
      } else {
        e.currentTarget.style.transform = `translateX(${diffX}px)`;
      }
    }
  };

  const handleMouseOut = e => {
    const cardMarginRight = calculateMarginRight(
      getComputedStyle(card?.current).marginRight
    );
    const cardWidth = card?.current.offsetWidth;
    const rightBoundary = ((cardMarginRight + cardWidth) * data.length * 3) / 4;

    if (
      rightBoundary <= Math.abs(findTransformPx(list.current.style.transform))
    ) {
      list.current.style.transform = `translateX(-${
        rightBoundary + moveTodoAnimation
      }px)`;
      moveUnderRightBoundaryWhenDrag(rightBoundary);
    }
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

  const moveSlideToLeft = e => {
    const cardMarginRight = getComputedStyle(card?.current).marginRight;
    const cardWidth = card?.current.offsetWidth;
    const moveSize = cardWidth + calculateMarginRight(cardMarginRight);

    if (findTransformPx(list.current.style.transform) >= 0) {
      setTimeout(moveForAnimationWhenLeftDirection, 100);
      list.current.style.transform = `translateX(${moveTodoAnimation}px)`;
      clearTimeout(moveForAnimationWhenLeftDirection);
      return;
    }

    if (moveX !== undefined) {
      list.current.style.transform = `translateX(${moveX + moveSize}px)`;
    } else {
      list.current.style.transform = `translateX(${moveSize}px)`;
    }
    setMoveX(findTransformPx(list.current.style.transform));
  };

  const moveSlideToRight = e => {
    const cardMarginRight = calculateMarginRight(
      getComputedStyle(card?.current).marginRight
    );
    const cardWidth = card?.current.offsetWidth;
    const moveSize = (cardWidth + cardMarginRight) * -1;
    const rightBoundary = ((cardMarginRight + cardWidth) * data.length * 3) / 4;

    // 3/4 이상 못 넘어가게 transform 기준
    if (
      rightBoundary <= Math.abs(findTransformPx(list.current.style.transform))
    ) {
      list.current.style.transform = `translateX(-${
        rightBoundary + moveTodoAnimation
      }px)`;
      const timer = setTimeout(() => {
        moveForAnimationWhenRightDirection(rightBoundary);
        clearTimeout(timer);
      }, 100);
      setMoveX(findTransformPx(list.current.style.transform));
      return;
    }
    if (moveX !== undefined) {
      list.current.style.transform = `translateX(${moveX + moveSize}px)`;
    } else {
      list.current.style.transform = `translateX(${moveSize}px)`;
    }
    setMoveX(findTransformPx(list.current.style.transform));
  };

  const moveForAnimationWhenRightDirection = rightBoundary => {
    if (list?.current?.style) {
      list.current.style.transform = `translateX(-${rightBoundary}px)`;
    }
  };

  const moveUnderRightBoundaryWhenDrag = rightBoundary => {
    if (list?.current?.style) {
      list.current.style.transform = `translateX(-${rightBoundary - 200}px)`;
    }
  };

  const moveForAnimationWhenLeftDirection = () => {
    list.current.style.transform = `translateX(0px)`;
  };

  const findTransformPx = str => {
    const start = str.indexOf('(');
    const end = str.indexOf('p');
    const result = str.slice(start + 1, end);
    return Number(result);
  };

  const calculateMarginRight = str => {
    const end = str.indexOf('p');
    return Number(str.slice(0, end));
  };

  return (
    <>
      <Mobile>
        <AsleepLayout>
          <Wrapper>
            <DetailPeopleImage
              src={data[currentPeople].src}
              clickListener={() => router.push('/people')}
            />
            <BodyContainer>
              <PeopleSoloName item={data[currentPeople].name} />
              <PeopleSoloBody item={data[currentPeople].body} />
              <PeopleSoloMoreButton href={data[currentPeople].href} />
              {data.length >= 2 && (
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
              )}
            </BodyContainer>
          </Wrapper>
        </AsleepLayout>
      </Mobile>
      <OverTablet>
        <DetailPeopleImage
          src={data[currentPeople].src}
          clickListener={() => router.push('/people')}
        />
        <BodyContainer>
          <PeopleSoloName item={data[currentPeople].name} />
          <PeopleSoloBody item={data[currentPeople].body} />
          <PeopleSoloMoreButton href={data[currentPeople].href} />
          {data.length >= 2 && (
            <ForwardedOverTabletThumbnailContainer
              length={data.length}
              handleMouseOut={handleMouseOut}
              handleMouseDown={handleMouseDown}
              handleMouseUp={handleMouseUp}
              handleMouseMove={handleMouseMove}
              ref={list}
            >
              {data?.map(({ thumbnail }, idx) => (
                <ForwardedThumbnail
                  key={idx}
                  src={thumbnail}
                  index={idx}
                  clickListener={setPeople}
                  ref={card}
                />
              ))}
            </ForwardedOverTabletThumbnailContainer>
          )}
          {data.length >= 2 && (
            <>
              <DetailPeopleDirectionLeftButton
                clickListener={moveSlideToLeft}
              />
              <DetailPeopleDirectionButton clickListener={moveSlideToRight} />
            </>
          )}
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
