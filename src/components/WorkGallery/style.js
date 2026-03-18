import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import { fonts, textSize } from '../../resources/fonts';

const style = {
  grid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 6px;

    @media ${breakPoints.tabletLandscape} {
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-rows: auto auto;
    }
  `,
  placeholder: css`
    background: #e8e0d8;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  placeholderLarge: css`
    min-height: 180px;

    @media ${breakPoints.tabletLandscape} {
      grid-row: span 2;
    }
  `,
  placeholderDetail: css`
    min-height: 86px;
  `,
  placeholderWide: css`
    min-height: 100px;
    grid-column: span 2;

    @media ${breakPoints.tabletLandscape} {
      grid-column: span 2;
    }
  `,
  label: css`
    font-family: ${fonts.f2};
    ${textSize};
    color: ${colours.c4};
    text-align: center;
  `,
};

export default style;
