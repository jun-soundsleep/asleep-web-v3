import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { mp } from '../../../../../styles/device';
import { MXFlexCenteringSB } from '../../../mixin/MXFlex';

function DetailPeoleBackButton({ href }) {
  const { t } = useTranslation();
  const goBack = t('common:go_back');

  return (
    <ButtonContainer>
      <Link href={href}>
        <ExtendedLink>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.53 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 1 1 1.06 1.06L5.56 11.5H20a.75.75 0 0 1 0 1.5H5.56l4.97 4.97a.75.75 0 0 1 0 1.06z"
              fill="#221714"
            />
          </svg>
          <OverTabletButton>{goBack}</OverTabletButton>
        </ExtendedLink>
      </Link>
    </ButtonContainer>
  );
}

export default DetailPeoleBackButton;

const ButtonContainer = styled.button`
  position: absolute;
  top: 32px;
  left: 28px;
  z-index: 200;
  cursor: pointer;

  ${mp[0]} {
    transform: translateX(-50%);
    top: 60px;
    left: 50%;

    & > svg {
      margin-right: 8px;
    }
  }

  ${mp[1]} {
    & > svg {
      margin-right: 16px;
    }
  }
`;

const OverTabletButton = styled.span`
  display: none;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-in-light-text-10);

  ${mp[0]} {
    display: block;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.77;
    letter-spacing: 0.13px;
  }

  ${mp[1]} {
    font-size: 24px;
    line-height: 1.58;
    letter-spacing: -1.08px;
  }
`;

const ExtendedLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mp[0]} {
    & > svg {
      margin-right: 8px;
    }
  }

  ${mp[1]} {
    & > svg {
      margin-right: 16px;
    }
  }
`;
