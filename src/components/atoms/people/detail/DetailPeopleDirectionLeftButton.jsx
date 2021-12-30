import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../../styles/device';

function DetailPeopleDirectionLeftButton({ clickListener }) {
  return (
    <Button onClick={clickListener}>
      <Image
        width={47}
        height={47}
        src={'/images/icon/components-icons-icons-circled-chevron-left.svg'}
      />
    </Button>
  );
}

export default DetailPeopleDirectionLeftButton;

const Button = styled.button`
  position: fixed;
  left: 360px;
  bottom: 142px;
  z-index: var(--direction-button);
  cursor: pointer;

  ${mp[1]} {
    left: 817px;
    bottom: 112px;
  }
`;

const Image = styled.img``;
