import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import { fonts } from '../../resources/fonts';
import { btnPrimary } from '../../resources/buttons';

const style = {
  layout: css`
    margin: 0 auto;

    max-width: 800px;
    @media ${breakPoints.desktopSmall} {
      max-width: 1000px;
    }

    p.highlighted {
      background: ${colours.c5};
      padding: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px;
      }
    }

    div.highlighted {
      background: ${colours.c5};
      padding: 10px;
      margin-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px;
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px;
        margin-bottom: 20px;
      }
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
    }

    .imgBlock {
      display: flex;

      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      @media ${breakPoints.tabletLandscape} {
        flex-direction: row;
        justify-content: center;
      }
    }

    .imgContainer {
      max-width: 400px;
      background: ${colours.c3};
      border: 1px solid ${colours.c5};
      padding: 10px;
      text-align: center;
      box-shadow: 2px 2px 5px ${colours.c2_transparent};

      margin: 20px auto;
      @media ${breakPoints.tabletPortrait} {
        margin: 40px auto;
      }

      img {
        max-width: 100%;
      }

      span {
        font-size: 80%;
      }

      &--rotateLeft {
        @media ${breakPoints.tabletPortrait} {
          transform: rotate(-2deg);
        }
      }

      &--rotateRight {
        @media ${breakPoints.tabletPortrait} {
          transform: rotate(2deg);
        }
      }
    }

    .callToActionContainer {
      margin-top: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-top: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-top: 20px;
      }

      &--center {
        text-align: center;
      }
    }

    .btnCallToAction {
      ${btnPrimary};
    }

    .anchor {
      padding-top: 75px !important;
      @media ${breakPoints.tabletPortrait} {
        padding-top: 95px !important;
      }
      @media ${breakPoints.desktopSmall} {
        padding-top: 110px !important;
      }
    }

    .quoteHighlight {
      position: relative;
      padding-left: 20px;
      &:before {
        content: '"';
        display: block;
        font-size: 50px;
        line-height: 50px;
        position: absolute;
        top: 0;
        left: 0;
        color: ${colours.c4};
      }
    }
  `,
};

export default style;
