import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import {
  fonts,
  xSmallHeadFontSize,
  smallHeadFontSize,
  uppercaseSansDisplay,
} from '../../resources/fonts';

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 0;

    @media ${breakPoints.tabletLandscape} {
      flex-direction: row;
    }
  `,
  track: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 10px 0;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px 0;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px 0;
    }

    @media ${breakPoints.tabletLandscape} {
      padding: 0 30px;

      &:first-of-type {
        padding-left: 0;
        border-right: 1px solid ${colours.c5};
      }

      &:last-of-type {
        padding-right: 0;
      }
    }

    &:first-of-type {
      border-bottom: 1px solid ${colours.c5};

      @media ${breakPoints.tabletLandscape} {
        border-bottom: none;
      }
    }
  `,
  content: css`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,
  eyebrow: css`
    font-family: ${fonts.f2};
    ${uppercaseSansDisplay};
    ${xSmallHeadFontSize};
    color: ${colours.c1};
    display: block;
  `,
  title: css`
    && {
      font-family: ${fonts.f4};
      font-weight: 700;
      ${smallHeadFontSize};
      text-transform: none;
      letter-spacing: normal;
      margin: 0;
    }
  `,
  text: css`
    && {
      font-family: ${fonts.f3};
      font-size: 16px;
      line-height: 1.5em;
      font-weight: 400;
      color: ${colours.c4};
      margin: 0;

      @media ${breakPoints.desktopSmall} {
        font-size: 18px;
      }
    }
  `,
  btn: css`
    font-family: ${fonts.f3};
    font-size: 16px;
    line-height: 1.5em;
    font-weight: 400;
    color: ${colours.c1};
    text-decoration: underline;
    align-self: flex-start;

    @media ${breakPoints.desktopSmall} {
      font-size: 18px;
    }

    &:hover,
    &:active {
      color: ${colours.c1_h};
    }
  `,
};

export default style;
