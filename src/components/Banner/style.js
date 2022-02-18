import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { fonts } from '../../resources/fonts';

const style = {
  container: css`
    width: 100vw;
    position: relative;

    min-height: 435px;
    @media ${breakPoints.tabletPortrait} {
      min-height: 727px;
    }
    @media ${breakPoints.tabletLandscape} {
      min-height: 581px;
    }
    @media ${breakPoints.desktopSmall} {
      min-height: 872px;
    }
    @media ${breakPoints.desktopLarge} {
      min-height: 1162px;
    }
    @media ${breakPoints.desktopXLarge} {
      min-height: 1453px;
    }

    img {
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 500;

      width: 300px;
      transform: translateX(-20%);
      @media ${breakPoints.tabletPortrait} {
        width: 500px;
      }
      @media ${breakPoints.tabletLandscape} {
        width: 400px;
      }
      @media ${breakPoints.desktopSmall} {
        width: 600px;
      }
      @media ${breakPoints.desktopLarge} {
        width: 800px;
      }
      @media ${breakPoints.desktopXLarge} {
        width: 1000px;
      }
    }

    span {
      font-family: ${fonts.f2};
      //text-transform: lowercase;
      font-weight: normal;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 8%;
      z-index: 501;

      /*font-size: 2em;
      //transform: translate(-50%, -50%);
      @media ${breakPoints.tabletPortrait} {
        //transform: translate(-70%, -50%);
      }
      @media ${breakPoints.desktopSmall} {
        font-size: 2.5em;
      }
      @media ${breakPoints.desktopLarge} {
        font-size: 4em;
      }
      @media ${breakPoints.desktopXLarge} {
        font-size: 5em;
      }*/
    }
  `,
};

export default style;
