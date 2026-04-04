import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import {
  fonts,
  textSize,
  textSizeCursive,
  xSmallHeadFontSize,
  mediumHeadFontSize,
  uppercaseSansDisplay,
} from '../../resources/fonts';

const style = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media ${breakPoints.tabletPortrait} {
      gap: 40px;
    }
    @media ${breakPoints.desktopSmall} {
      gap: 48px;
    }
  `,
  titleRow: css`
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media ${breakPoints.tabletPortrait} {
      flex-direction: row;
      align-items: baseline;
      gap: 16px;
    }
  `,
  title: css`
    && {
      font-family: ${fonts.f4};
      font-weight: 700;
      ${mediumHeadFontSize};
      text-transform: none;
      letter-spacing: normal;
      margin: 0;
    }
  `,
  subtitle: css`
    font-family: ${fonts.f3};
    font-style: italic;
    ${textSizeCursive};
    color: ${colours.c4};
  `,
  section: css`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media ${breakPoints.tabletPortrait} {
      gap: 16px;
    }
  `,
  sectionLabel: css`
    font-family: ${fonts.f2};
    ${uppercaseSansDisplay};
    ${textSize};
    color: ${colours.c4};
    display: block;
  `,
  grid: css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;

    @media ${breakPoints.tabletPortrait} {
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
  `,
  card: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 1px solid ${colours.c5};
    padding: 16px;

    @media ${breakPoints.tabletPortrait} {
      padding: 20px;
    }
  `,
  cardHighlighted: css`
    border-color: ${colours.c1};
  `,
  question: css`
    && {
      font-family: ${fonts.f2};
      ${uppercaseSansDisplay};
      ${xSmallHeadFontSize};
      font-weight: 700;
      color: ${colours.c2};
      margin: 0;
    }
  `,
  questionHighlighted: css`
    && {
      color: ${colours.c1};
    }
  `,
  answer: css`
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
  answerLink: css`
    && {
      font-family: ${fonts.f3};
      font-style: italic;
      color: ${colours.c4};
      text-decoration: underline;
      margin-left: 4px;

      &:hover,
      &:active {
        color: ${colours.c2};
      }
    }
  `,
};

export default style;
