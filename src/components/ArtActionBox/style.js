import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import { fonts, largeHeadFontSize, textSize } from '../../resources/fonts';

const style = {
  artActionBox: css`
    background: ${colours.c5};
    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }
  `,
  originalContainer: css`
    a {
      display: block;
      border-bottom: 1px solid ${colours.c2};
      padding-bottom: 10px;
      margin-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding-bottom: 15px;
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding-bottom: 20px;
        margin-bottom: 20px;
      }

      &:last-of-type {
        border-bottom: 0;
        margin-bottom: 0;
        padding-bottom: 0;
      }
    }

    h4 {
      font-family: ${fonts.f1};
      text-transform: uppercase;
      ${textSize};
    }
  `,
  mainActionLink: css`
    display: block;
    color: ${colours.c1};
    transition: color 0.2s ease;
    font-family: ${fonts.f1};
    font-size: 1.2em;
    text-transform: uppercase;

    span {
      svg {
        width: 10px;
        height: 10px;
        transform: rotate(-45deg);
        fill: ${colours.c1};
        transition: fill 0.3s ease-out;
        margin-left: 3px;
      }
    }

    &:hover {
      cursor: pointer;
      color: ${colours.c1_h} svg {
        fill: ${colours.c1_h};
      }
    }
  `,
  secondaryActionLink: css`
    display: block;
    color: ${colours.c2};
    transition: color 0.2s ease;
    font-family: ${fonts.f1};
    font-size: 1em;
    text-transform: uppercase;

    span {
      svg {
        width: 10px;
        height: 10px;
        transform: rotate(-45deg);
        fill: ${colours.c2};
        transition: fill 0.3s ease-out;
      }
    }

    &:hover {
      cursor: pointer;
      color: ${colours.c1};

      svg {
        fill: ${colours.c1};
      }
    }
  `,
  originalPrice: css`
    display: inline-block;
    ${largeHeadFontSize};
  `,
  coloringPriceTag: css`
    & > span {
      padding-left: 5px;
    }
  `,
  sold: css`
    color: ${colours.c4};
    font-family: ${fonts.f1};
    text-transform: uppercase;
    margin-bottom: 0 !important;
  `,
  freeShip: css`
    display: inline-block;
    padding: 3px;
    background: ${colours.c_success};
    color: ${colours.c3};
    font-size: 0.8em;
  `,
};

export default style;
