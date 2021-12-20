import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import ModalBody from '../../atoms/Common/modal/ModalBody';
import ModalTitle from '../../atoms/Common/modal/ModalTitle';
import ModalDivider from '../../atoms/Common/modal/ModalDivider';
import ModalFootNote from '../../atoms/Common/modal/ModalFootNote';
import { mp } from '../../../../styles/device';

function CommonDetailPage({
  title,
  body,
  exitHandler,
  srcm,
  srcl,
  footNote,
  blackTitle
}) {
  const wrapper = React.createRef(null);

  const handleCloseModal = e => {
    console.log(e.target);
    if (wrapper?.current === e.target) exitHandler();
  };

  useEffect(() => {
    window.addEventListener('click', handleCloseModal);

    // 모달 뒤 스크롤 방지
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      window.removeEventListener('click', handleCloseModal);

      // 모달 뒤 스크롤 방지
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper ref={wrapper}>
      <Container>
        <ImageContainer>
          <Background srcm={srcm} srcl={srcl} />
          <ExitButtonWrapper>
            <ExitButton onClick={exitHandler} />
          </ExitButtonWrapper>
          <ModalTitle item={title} blackTitle={blackTitle} />
        </ImageContainer>
        <Article>
          <ModalBody item={body} />
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

export default CommonDetailPage;

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
