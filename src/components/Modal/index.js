import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { close } from '../../resources/icons';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import {
  fonts,
  smallHeadFontSize,
  mediumHeadFontSize,
} from '../../resources/fonts';
import style from './style';

let StyledModal = styled(Popup)`
  &-overlay {
    position: absolute !important;
    @media ${breakPoints.tabletPortrait} {
      position: fixed !important;
    }
  }

  &-content {
    width: auto;
    border: 0;

    padding: 10px;
    max-width: 90%;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
      max-width: 900px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }

    h2 {
      font-family: ${fonts.f1};
      text-transform: uppercase;

      ${mediumHeadFontSize};
      margin-bottom: 10px;
      @media ${breakPoints.desktopSmall} {
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopLarge} {
        margin-bottom: 20px;
      }
    }

    h3 {
      font-family: ${fonts.f2};
      text-transform: uppercase;
      border-bottom: 2px solid ${colours.c1};

      ${smallHeadFontSize};
      margin-bottom: 10px;
      @media ${breakPoints.desktopSmall} {
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopLarge} {
        margin-bottom: 20px;
      }

      &.galleryTitle {
        margin-bottom: 5px;
      }
    }

    ul {
      margin-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-bottom: 20px;
      }

      li {
        position: relative;
        padding-left: 10px;
        padding-bottom: 10px;

        &:before {
          display: block;
          content: '';
          width: 5px;
          height: 5px;
          background: ${colours.c1};
          border-radius: 15px;
          position: absolute;
          left: 0;
          top: 6px;
          @media ${breakPoints.tabletPortrait} {
            top: 8px;
          }
          @media ${breakPoints.desktopLarge} {
            top: 9px;
          }
        }
      }
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
