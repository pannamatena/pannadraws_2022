import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import { fonts, textSize, xSmallHeadFontSize } from '../../resources/fonts';

const style = {
  strip: css`
    /* break out of pageContent padding to reach full width */
    margin: 0 -10px 10px;
    @media ${breakPoints.tabletPortrait} {
      margin: 0 -15px 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin: 0 -20px 20px;
    }

    border-top: 1px solid ${colours.c4};
    border-bottom: 1px solid ${colours.c4};

    display: grid;
    grid-template-columns: 1fr 1fr;
    @media ${breakPoints.tabletLandscape} {
      grid-template-columns: repeat(4, 1fr);
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
    &:last-child {
      border-right: none;
    }
  `,
  itemHeading: css`
    font-family: ${fonts.f1};
    text-transform: uppercase;
    color: ${colours.c2};
    ${xSmallHeadFontSize};
    margin-bottom: 5px;
    @media ${breakPoints.tabletPortrait} {
      margin-bottom: 8px;
    }
  `,
  itemText: css`
    font-family: ${fonts.f2};
    color: ${colours.c4};
    ${textSize};
    line-height: 1.4;
    margin: 0;
  `,
};

export default style;
