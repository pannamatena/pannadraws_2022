import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';

const style = {
  layout: css`
    margin: 0 auto;

    max-width: 800px;
    @media ${breakPoints.desktopSmall} {
      max-width: 1000px;
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
  `,
};

export default style;
