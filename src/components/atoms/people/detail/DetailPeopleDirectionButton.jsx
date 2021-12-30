import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../../styles/device';

function DetailPeopleDirectionButton({ clickListener }) {
  return (
    <Button onClick={clickListener}>
      <Image
        width={47}
        height={47}
        src={'/images/icon/components-icons-icons-circled-chevron-right.svg'}
      />
    </Button>
  );
}

export default DetailPeopleDirectionButton;

const Button = styled.button`
  position: fixed;
  right: 23.6px;
  bottom: 142px;
  z-index: var(--direction-button);
  cursor: pointer;

  ${mp[1]} {
    bottom: 122px;
  }
`;

const Image = styled.img``;
