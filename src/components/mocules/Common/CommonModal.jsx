import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import ModalBody from '../../atoms/Common/modal/ModalBody';
import ModalTitle from '../../atoms/Common/modal/ModalTitle';
import ModalDivider from '../../atoms/Common/modal/ModalDivider';
import ModalFootNote from '../../atoms/Common/modal/ModalFootNote';
import { mp } from '../../../../styles/device';

function CommonModal({ title, body, exitHandler, srcm, srcl, footNote }) {
  // const handleCloseModal = e => {
  //   if (wrapper.current === e.target) modalStore.setCurrentModal('');
  // };

  // useEffect(() => {
  //   window.addEventListener('click', handleCloseModal);

  //   // 모달 뒤 스크롤 방지
  //   document.body.style.cssText = `
  //     position: fixed;
  //     top: -${window.scrollY}px;
  //     overflow-y: scroll;
  //     width: 100%;`;
  //   return () => {
  //     window.removeEventListener('click', handleCloseModal);

  //     // 모달 뒤 스크롤 방지
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = '';
  //     window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <Background srcm={srcm} srcl={srcl} />
          <ExitButtonWrapper>
            <ExitButton onClick={exitHandler} />
          </ExitButtonWrapper>
          {/* <ModalTitle item={'aslkdj\nasdlkjklas\nlkasjdlk'} /> */}
          <ModalTitle item={title} />
        </ImageContainer>
        <Article>
          <ModalBody
            // item={
            //   '수면은 <b>쉽고 편안하고 끊김 없이 측정이 가능해야 합니다.</b> 에이슬립의 독자적인 Wi-Fi 수면 센싱 기술이 이를 가능하게 합니다. Wi-Fi는 가장 대중화된 무선 통신 기술로 가정, 회사, 공공장소 가릴 것 없이 모든 곳에 설치되어 있습니다. 침실에 배치된 Wi-Fi 수면 센서가 여러분이 침실에 들어오고 침대에 눕는 것을 감지하고 자동으로 수면 측정을 시작합니다. Wi-Fi 수면 센서는 송신기와 수신기로 구성되는데, 송신기에서 쏘아진 Wi-Fi 신호가 사용자 주변에서 반사되어 수신기에서 받아집니다. 이때 사용자의 크고 작은 신체 움직임(1)으로 인해 Wi-Fi 신호에 변형이 생기고, 이를 에이슬립의 AI로 분석하여 수면을 측정할 수 있습니다.Wi-Fi 센싱 기술은 레이더 센싱 기술과 같은 다른 비접촉 수면 측정 기술에 비해 기기 배치에서 자유롭습니다. 또한 주변 환경 소음에 민감한 Sound 기반 측정 방식에 비해 주변 잡음에 영향을 받지 않아 보다 안정적으로 동작할 수 있습니다. 현재 Wi-Fi 수면 센싱의 정확도를 검증하기 위해 대학병원과의 공동 연구를 진행 중이고, 병원 환경에서 측정한 호흡과 Wi-Fi 수면 센싱으로 측정한 호흡이 90% 이상 유사함을 보였습니다. 이를 바탕으로 논문 및 특허를 준비 중입니다. Wi-Fi 수면 센싱으로 측정한 호흡 정보와 에이슬립의 AI 기술이 만나 정확한 수면 단계 판독을 가장 편리한 방식으로 제공할 수 있습니다.'
            // }
            item={body}
          />
        </Article>
        <DividerContainer>
          <ModalDivider />
        </DividerContainer>
        <FootNoteContainer>
          {footNote?.map((el, idx) => {
            return <ModalFootNote item={el} key={idx} />;
          })}
        </FootNoteContainer>
      </Container>
    </Wrapper>
  );
}

export default CommonModal;

const ImageContainer = styled.div`
  width: 100%;
  height: 309px;
  position: relative;

  ${mp[1]} {
    height: 574px;
  }
`;

const Container = styled.div`
  width: 560px;
  padding: 0 0 44px;
  border-radius: 20px;
  background-color: var(--text-in-dark-text-00);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  ${mp[1]} {
    width: 1262px;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--dim-dim-02);
  z-index: var(--global-modal);
`;

const Background = styled.div`
  background: url(${({ srcm }) => srcm && srcm});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;

  ${mp[1]} {
    background: url(${({ srcl }) => srcl && srcl});
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const ExitButton = styled.div`
  background: url('/images/icon/exit.svg');
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const ExitButtonWrapper = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 44px;
  right: 32px;

  ${mp[1]} {
    width: 44px;
    height: 44px;
  }
`;

const Article = styled.div`
  height: 290px;
  overflow: scroll;
  padding: 44px 32px 44px;

  ${mp[1]} {
    padding: 88px 88px 144px;
  }
`;

const DividerContainer = styled.div`
  margin: 0px 0px 20px;
  padding: 0px 32px;

  ${mp[1]} {
    /* padding: 88px 88px 144px; */
  }
`;

const FootNoteContainer = styled.div`
  padding: 0px 32px;

  ${mp[1]} {
    padding: 0px 88px;
  }
`;
