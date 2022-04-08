import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { fonts, smallHeadFontSize, textSize } from '../../resources/fonts';
import { colours } from '../../resources/colors';

const style = {
  segmentedLayout: css`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;

    margin: 0 -10px 0;
    @media ${breakPoints.tabletPortrait} {
      margin: 0 -15px 0;
    }
    @media ${breakPoints.desktopSmall} {
      margin: 0 -20px 0;
    }

    a {
      color: ${colours.c1};

      &:hover,
      &:active {
        color: ${colours.c1_h};
      }

      &:visited {
        color: ${colours.c1};
      }

      &.btnCallToAction {
        ${textSize};
        display: inline-block;
        background: ${colours.c1};
        color: ${colours.c3} !important;
        font-family: ${fonts.f1};
        text-transform: uppercase;

        padding: 10px;
        @media ${breakPoints.tabletPortrait} {
          padding: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          padding: 20px;
        }

        &:hover,
        &:active {
          background: ${colours.c1_h};
          cursor: pointer;
        }

        &:disabled {
          cursor: default;
          background: ${colours.c4};
        }
      }
    }

    .btnContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  `,
  leftSide: css`
    flex: 1;
    max-width: 50%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
  `,
  leftSideInner: css`
    height: 100%;
    padding: 10px;
    @media ${breakPoints.desktopSmall} {
      padding: 15px;
    }
    @media ${breakPoints.desktopLarge} {
      padding: 20px;
    }
  `,
  rightSide: css`
    flex: 1;
    max-width: 50%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  `,
  rightSideInner: css`
    padding: 10px;
    @media ${breakPoints.desktopSmall} {
      padding: 15px;
    }
    @media ${breakPoints.desktopLarge} {
      padding: 20px;
    }
  `,
};

export default style;
