import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import { fonts } from '../../resources/fonts';
import {
  btnPrimary,
  btnOutlineBlack,
  btnOutlineDark,
} from '../../resources/buttons';

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
    background: ${colours.c2};
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

  // Image grid (3-cell, first cell spans 2 rows)
  imageGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    height: 100%;
    gap: 4px;
  `,
  imageGridCell: css`
    background: ${colours.c2};
    overflow: hidden;
    position: relative;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  imageGridCellLarge: css`
    grid-row: span 2;
  `,

  // DARK theme overrides
  darkContentSide: css`
    background: ${colours.c2};
  `,
  darkEyebrow: css`
    && {
      color: ${colours.c4};
    }
  `,
  darkHeading: css`
    && {
      color: ${colours.c3};
    }
  `,
  darkBody: css`
    && {
      color: ${colours.c4};
    }
  `,
  btnSecondaryDark: btnOutlineDark,
};

export default style;
