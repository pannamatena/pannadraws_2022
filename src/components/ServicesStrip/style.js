import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import { fonts, textSize, uppercaseSansDisplay } from '../../resources/fonts';

const style = {
  strip: css`
    border-top: 1px solid ${colours.c4};
    border-bottom: 1px solid ${colours.c4};

    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10px -10px 0;
    @media ${breakPoints.tabletPortrait} {
      margin: 15px -15px 0;
    }
    @media ${breakPoints.tabletLandscape} {
      grid-template-columns: repeat(4, 1fr);
    }
    @media ${breakPoints.desktopSmall} {
      margin: 20px -20px 0;
    }
  `,
  item: css`
    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }

    border-right: 1px solid ${colours.c4};
    &:last-child {
      border-right: none;
    }

    /* on mobile 2-col layout, remove right border from every 2nd item */
    &:nth-child(2n) {
      border-right: none;
      @media ${breakPoints.tabletLandscape} {
        border-right: 1px solid ${colours.c4};
      }
    }
    &:nth-child(3n),
    &:nth-child(4n) {
      border-top: 1px solid ${colours.c4};
      @media ${breakPoints.tabletLandscape} {
        border-top: none;
      }
    }
    &:last-child {
      border-right: none;
    }
  `,
  itemHeading: css`
    && {
      ${uppercaseSansDisplay};
      ${textSize};
      color: ${colours.c2};
      margin-bottom: 5px;
      @media ${breakPoints.tabletPortrait} {
        margin-bottom: 8px;
      }
    }
  `,
  itemText: css`
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
};

export default style;
