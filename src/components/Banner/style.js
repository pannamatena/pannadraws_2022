import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { fonts } from '../../resources/fonts';

const style = {
  container: css`
    width: 100vw;
    position: relative;

    height: 500px;
    @media ${breakPoints.desktopLarge} {
      height: 100vh;
    }

    img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 500;

      width: 300px;
      @media ${breakPoints.tabletPortrait} {
        width: 400px;
        transform: translateX(-35%);
      }
      @media ${breakPoints.desktopSmall} {
        width: 500px;
      }
      @media ${breakPoints.desktopLarge} {
        width: 900px;
      }
    }

    h2 {
      font-family: ${fonts.f1};
      text-transform: lowercase;
      font-weight: normal;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 501;

      font-size: 2em;
      transform: translate(-50%, -50%);
      @media ${breakPoints.tabletPortrait} {
        transform: translate(-70%, -50%);
      }
      @media ${breakPoints.desktopSmall} {
        font-size: 2.5em;
      }
      @media ${breakPoints.desktopLarge} {
        font-size: 4em;
      }
      @media ${breakPoints.desktopXLarge} {
        font-size: 5em;
      }
    }
  `,
};

export default style;
