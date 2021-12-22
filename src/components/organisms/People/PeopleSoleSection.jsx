import React from 'react';
import styled from '@emotion/styled';
import PeopleSoloImage from '../../atoms/people/PeopleSoloImage';
import PeopleSoloBody from '../../atoms/people/PeopleSoloBody';
import PeopleSoloMoreButton from '../../atoms/people/PeopleSoloMoreButton';
import PeopleSoloName from '../../atoms/people/PeopleSoloName';

function PeopleSoleSection() {
  return (
    <div>
      <ImageContainer>
        <PeopleSoloImage src={'/images/people/solo/1_David2_l_2x.jpg'} />
      </ImageContainer>
      <BodyContainer>
        <PeopleSoloName item={'<b>이상현(Paul)</b> |  Global Director'} />
        <PeopleSoloBody
          item={
            '에이슬립 대표이사 David입니다. 엔지니어 출신으로 네 번째 스타트업 창업에 도전하고 있습니다. 세상의 어떠한 문제라도 정량화하고, 이를 혁신적인 방법으로 해결하고자 고민합니다. 현재 기업에서 모델링 한 문제를 가장 잘 풀 수 있는 인력을 모셔오고, 구성원이 문제를 공감하고 새로운 문제와 혁신적인 솔루션을 제기할 수 있도록 분위기를 조성하며, 최종적으로 회사와 함께 성장할 수 있도록 노력하고 있습니다.'
          }
        />
        <PeopleSoloMoreButton />
      </BodyContainer>
    </div>
  );
}

export default PeopleSoleSection;

const ImageContainer = styled.div`
  position: relative;
  /* height: 800px; */
`;

const BodyContainer = styled.div`
  margin: 32px 20px;
`;
