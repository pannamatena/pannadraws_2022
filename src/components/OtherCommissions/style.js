import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import {
  fonts,
  mediumHeadFontSize,
  textSize,
  textSizeCursive,
  uppercaseSansDisplay,
} from '../../resources/fonts';
import { btnPrimary, btnOutlineBlack } from '../../resources/buttons';

const style = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-top: 1px solid ${colours.c5};

    padding-top: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding-top: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      flex-direction: row;
      gap: 40px;
      padding-top: 20px;
    }
  `,
  left: css`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media ${breakPoints.desktopSmall} {
      flex: 0.5;
    }
  `,
  eyebrow: css`
    font-family: ${fonts.f2};
    ${uppercaseSansDisplay};
    ${textSize};
    color: ${colours.c4};
    display: block;
  `,
  title: css`
    && {
      font-family: ${fonts.f4};
      font-weight: 400;
      ${mediumHeadFontSize};
      text-transform: none;
      letter-spacing: normal;
      margin: 0;
    }
  `,
  body: css`
    && {
      font-family: ${fonts.f3};
      font-style: italic;
      ${textSizeCursive};
      line-height: 1.5em;
      font-weight: 400;
      color: ${colours.c4};
      margin: 0;
    }
  `,
  right: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  tags: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  `,
  tag: css`
    ${textSize};
    ${uppercaseSansDisplay};
    display: inline-block;
    border: 1px solid ${colours.c4};
    color: ${colours.c2};
    padding: 6px 10px;

    @media ${breakPoints.tabletPortrait} {
      padding: 8px 12px;
    }
  `,
  tagHighlighted: css`
    border-color: ${colours.c1};
    color: ${colours.c1};
  `,
  description: css`
    && {
      font-family: ${fonts.f3};
      font-style: italic;
      ${textSizeCursive};
      line-height: 1.5em;
      font-weight: 400;
      color: ${colours.c4};
      margin: 0;
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
