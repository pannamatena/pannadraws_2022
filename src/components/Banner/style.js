import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { fonts, smallHeadFontSize } from '../../resources/fonts';
import { colours } from '../../resources/colors';

const style = {
  container: css`
    width: 100vw;
    position: relative;

    min-height: 727px;
    @media ${breakPoints.tabletLandscape} {
      min-height: 730px;
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

      width: 500px;
      transform: translateX(-50%);
      @media ${breakPoints.tabletPortrait} {
        transform: translateX(-30%);
      }
      @media ${breakPoints.tabletLandscape} {
        width: 500px;
        transform: translateX(-13%);
      }
      @media ${breakPoints.desktopSmall} {
        width: 600px;
        transform: translateX(-10%);
      }
      @media ${breakPoints.desktopLarge} {
        width: 800px;
        transform: translateX(-20%);
      }
      @media ${breakPoints.desktopXLarge} {
        width: 1000px;
      }
    }

    span {
      font-family: ${fonts.f2};
      font-weight: normal;
      display: block;
      ${smallHeadFontSize};
      @media ${breakPoints.tabletPortrait} {
        text-align: right;
      }
    }

    h2.headline {
      font-family: ${fonts.f2};
      margin-bottom: 0;
      line-height: 1;
      white-space: nowrap;

      font-size: 22px;
      @media ${breakPoints.tabletPortrait} {
        font-size: 24px;
      }
      @media ${breakPoints.desktopSmall} {
        font-size: 38px;
      }
      @media ${breakPoints.desktopLarge} {
        font-size: 50px;
      }
      @media ${breakPoints.desktopXLarge} {
        font-size: 54px;
      }

      &--second {
        text-indent: 5px;
        @media ${breakPoints.tabletLandscape} {
          text-indent: 20px;
        }
      }

      &--third {
        color: ${colours.c1};
        text-indent: 10px;
        @media ${breakPoints.tabletLandscape} {
          text-indent: 40px;
        }
      }
    }
  `,
  headlineContainer: css`
    position: absolute;
    transform: translateY(-50%);
    z-index: 501;
    display: flex;
    flex-direction: row;
    align-items: center;

    top: 15%;
    left: 15%;
    width: 100%;
    background: ${colours.c3_transparent};
    padding: 10px 0;
    justify-content: flex-start;
    @media ${breakPoints.tabletPortrait} {
      top: 12%;
      left: 0;
      width: 50%;
      background: transparent;
      padding: 0;
      justify-content: center;
    }
    @media ${breakPoints.tabletLandscape} {
      top: 28%;
      left: 20px;
    }
    @media ${breakPoints.desktopSmall} {
      top: 26%;
      left: 0;
    }
    @media ${breakPoints.desktopLarge} {
      top: 30%;
    }
    @media ${breakPoints.desktopXLarge} {
      top: 25%;
      left: 5%;
    }
  `,
  headlineContainerInner: css`
    display: inline-block;
  `,
};

export default style;
