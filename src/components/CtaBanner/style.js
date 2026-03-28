import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import {
  fonts,
  textSizeCursive,
  mediumHeadFontSize,
} from '../../resources/fonts';
import {
  btnPrimary,
  btnOutlineRed,
  btnOutlineBlack,
  btnOutlineDark,
  btnOutlineWhite,
} from '../../resources/buttons';

const buttonVariants = {
  primary: btnPrimary,
  outlineRed: btnOutlineRed,
  outlineBlack: btnOutlineBlack,
  outlineDark: btnOutlineDark,
  outlineWhite: btnOutlineWhite,
};

const style = {
  banner: css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin: -10px 0 10px;
    @media ${breakPoints.tabletPortrait} {
      margin: -15px 0 15px;
    }
    @media ${breakPoints.tabletLandscape} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
    }
    @media ${breakPoints.desktopSmall} {
      margin: -20px 0 20px;
    }
  `,
  darkBanner: css`
    margin: 0;
    padding-bottom: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin: 0;
      padding-bottom: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin: 0;
      padding-bottom: 20px;
    }
  `,
  content: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  title: css`
    && {
      font-family: ${fonts.f4};
      font-weight: 400;
      font-style: italic;
      ${mediumHeadFontSize};
      text-transform: none;
      letter-spacing: normal;
      margin: 0;
    }
  `,
  darkTitle: css`
    && {
      color: ${colours.c3};
    }
  `,
  text: css`
    && {
      font-family: ${fonts.f3};
      ${textSizeCursive};
      color: ${colours.c4};
      margin: 0;
    }
  `,
  buttons: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    flex-shrink: 0;
  `,
  button: (variant) => buttonVariants[variant] || btnPrimary,
  buttonInner: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
  `,
};

export default style;
