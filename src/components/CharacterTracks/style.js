import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import {
  fonts,
  largeHeadFontSize,
  mediumHeadFontSize,
  textSizeCursive,
  uppercaseSansDisplay,
} from '../../resources/fonts';

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media ${breakPoints.tabletLandscape} {
      flex-direction: row;
      gap: 0;
    }
  `,
  track: css`
    flex: 1;
    padding: 0;

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
      padding-bottom: 30px;

      @media ${breakPoints.tabletLandscape} {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  `,
  pill: css`
    display: inline-block;
    border: 1px solid ${colours.c1};
    color: ${colours.c1};
    ${uppercaseSansDisplay};
    font-size: 9px;
    padding: 3px 8px;
    margin-bottom: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin-bottom: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin-bottom: 20px;
    }
  `,
  title: css`
    && {
      font-family: ${fonts.f4};
      font-weight: 700;
      line-height: 1.15;
      text-transform: none;
      letter-spacing: normal;
      ${mediumHeadFontSize};
      margin-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-bottom: 20px;
      }
    }
  `,
  body: css`
    && {
      font-family: ${fonts.f3};
      ${textSizeCursive};
      margin-bottom: 16px;
    }
  `,
  list: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  listItem: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-family: ${fonts.f2};
    font-size: 14px;
    color: ${colours.c2};

    @media ${breakPoints.desktopSmall} {
      font-size: 16px;
    }
  `,
};

export default style;
