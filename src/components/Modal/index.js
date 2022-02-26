import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { close } from '../../resources/icons';
import { breakPoints } from '../../resources/breakpoints';
import style from './style';

let StyledModal = styled(Popup)`
  &-content {
    width: auto;
    max-width: 900px;

    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }
  }
`;

export default function Modal({ children, isOpen = false, onClose }) {
  return (
    <StyledModal
      isModal
      nested
      open={isOpen}
      closeOnDocumentClick
      onClose={onClose}
    >
      <a css={style.closeBtn} onClick={onClose}>
        {close()}
      </a>
      {children}
    </StyledModal>
  );
}
