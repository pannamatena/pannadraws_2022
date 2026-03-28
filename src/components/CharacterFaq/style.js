import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import {
  fonts,
  textSizeCursive,
  smallHeadFontSize,
  uppercaseSansDisplay,
  xSmallHeadFontSize,
} from '../../resources/fonts';

const style = {
  header: css`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 12px;
    flex-wrap: wrap;
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
      font-weight: 400;
      text-transform: none;
      letter-spacing: normal;
      margin: 0;
    }
  `,
  subtitle: css`
    && {
      font-family: ${fonts.f3};
      ${textSizeCursive};
      color: ${colours.c4};
      font-style: italic;
      margin: 0;
    }
  `,
  grid: css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    padding-bottom: 10px;
    @media ${breakPoints.tabletPortrait} {
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      padding-bottom: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      gap: 20px;
      padding-bottom: 20px;
    }
  `,
  card: css`
    background: ${colours.c3};
    border: 1px solid ${colours.c4};
    padding: 10px;

    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }

    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }
  `,
  question: css`
    && {
      font-family: ${fonts.f2};
      ${uppercaseSansDisplay};
      ${xSmallHeadFontSize};
      color: ${colours.c2};
      margin-bottom: 10px;
    }
  `,
  answer: css`
    && {
      font-family: ${fonts.f3};
      ${textSizeCursive};
      color: ${colours.c4};
      margin: 0;
    }
  `,
  answerLink: css`
    && {
      font-family: ${fonts.f3};
      font-style: italic;
      color: ${colours.c4};
      text-decoration: underline;

      &:hover {
        color: ${colours.c2};
      }
    }
  `,
};

export default style;
