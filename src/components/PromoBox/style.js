import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import { fonts } from '../../resources/fonts';
import { btnPrimary, btnOutlineRed } from '../../resources/buttons';

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

    && p {
      margin: 0;
      font-family: ${fonts.f3};
      font-size: 16px;
      line-height: 1.5em;
      font-weight: 400;
      @media ${breakPoints.desktopSmall} {
        font-size: 18px;
      }
    }

    a.btnCallToAction--outline {
      ${btnOutlineRed};
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

    && p {
      font-family: ${fonts.f3};
      font-size: 16px;
      line-height: 1.5em;
      font-weight: 400;
      @media ${breakPoints.desktopSmall} {
        font-size: 18px;
      }
    }

    a.btnCallToAction {
      ${btnPrimary};

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
