import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import { fonts, textSize } from '../../resources/fonts';

const style = {
  promoBoxContainer: css`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
    max-width: 900px;
    margin: 0 auto 10px;

    gap: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin: 0 auto 15px;
      gap: 15px;
    }
    @media ${breakPoints.tabletLandscape} {
      flex-direction: row;
    }
    @media ${breakPoints.desktopSmall} {
      max-width: 1100px;
      margin: 0 auto 20px;
      gap: 20px;
    }
    @media ${breakPoints.desktopLarge} {
      max-width: 1400px;
    }
  `,
  etsyStrip: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-width: 900px;
    margin: 0 auto 10px;

    @media ${breakPoints.tabletPortrait} {
      flex-direction: row;
      gap: 15px;
      margin: 0 auto 15px;
    }
    @media ${breakPoints.desktopSmall} {
      max-width: 1100px;
      gap: 20px;
      margin: 0 auto 20px;
    }
    @media ${breakPoints.desktopLarge} {
      max-width: 1400px;
    }

    p {
      margin: 0;
    }

    a.btnCallToAction--outline {
      ${textSize};
      display: inline-block;
      white-space: nowrap;
      background: ${colours.c3};
      color: ${colours.c1} !important;
      border: 2px solid ${colours.c1};
      font-family: ${fonts.f1};
      text-transform: uppercase;
      text-decoration: none;

      padding: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px;
      }

      &:hover,
      &:active {
        background: ${colours.c5};
        cursor: pointer;
      }
    }
  `,
  promoBox: css`
    flex: 1;
    padding: 10px;
    @media ${breakPoints.desktopSmall} {
      padding: 15px;
    }
    @media ${breakPoints.desktopLarge} {
      padding: 20px;
    }

    .btnContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    a.btnCallToAction {
      ${textSize};
      display: inline-block;
      background: ${colours.c1};
      color: ${colours.c3} !important;
      font-family: ${fonts.f1};
      text-transform: uppercase;
      text-decoration: none;

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
        
      &.btnCallToAction--promo {
        background: ${colours.c_button_promo_2};

        &:hover,
        &:active {
            background: ${colours.c_button_promo_2_h};
            cursor: pointer;
        }
      }
    }
  `,
};

export default style;
