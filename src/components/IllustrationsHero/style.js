import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import { fonts } from '../../resources/fonts';
import { btnPrimary, btnOutlineBlack } from '../../resources/buttons';

const style = {
  hero: css`
    display: flex;
    flex-direction: column;

    /* break out of pageContent padding to reach full width */
    margin: 0 -10px;
    height: calc(100vh - 74px);

    @media ${breakPoints.tabletPortrait} {
      margin: 0 -15px;
      height: calc(100vh - 85px);
    }
    @media ${breakPoints.tabletLandscape} {
      height: calc(100vh - 104px);
    }
    @media ${breakPoints.desktopSmall} {
      margin: 0 -20px;
      flex-direction: row;
      height: calc(100vh - 125px);
    }
  `,
  imageSide: css`
    background: #e8e0d8;
    flex: 1;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 32%;
      @media ${breakPoints.desktopSmall} {
        object-position: center 25%;
      }
      @media ${breakPoints.desktopLarge} {
        object-position: center 25%;
      }
    }
  `,
  contentSide: css`
    flex: 1;
    background: ${colours.c3};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px;
  `,
  heading: css`
    line-height: 1.1;
    font-weight: 900 !important;

    font-size: 38px !important;
    @media ${breakPoints.tabletPortrait} {
      font-size: 38px !important;
    }
    @media ${breakPoints.desktopSmall} {
      font-size: 38px !important;
    }
    @media ${breakPoints.desktopLarge} {
      font-size: 52px !important;
    }
  `,
  headingAccent: css`
    color: ${colours.c1};
    display: block;
    font-style: italic;
    font-weight: 400;
  `,
  body: css`
    && {
      font-family: ${fonts.f3};
      font-size: 16px;
      line-height: 1.5em;
      font-weight: 400;
      color: #555;
      margin-bottom: 24px;
      font-style: italic;
      @media ${breakPoints.desktopSmall} {
        font-size: 18px;
      }
    }
  `,
  buttons: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  `,
  btnPrimary,
  btnSecondary: btnOutlineBlack,
};

export default style;
