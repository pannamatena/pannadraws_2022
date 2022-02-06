import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import { fonts, largeHeadFontSize } from '../../resources/fonts';

const style = {
  layout: css`
    display: flex;
    flex-direction: row;

    @media ${breakPoints.tabletLandscape} {
      flex-direction: row;
    }
  `,
  backBtn: css`
    display: inline-block;
    background: ${colours.c2};
    color: ${colours.c3};
    font-family: ${fonts.f1};
    font-weight: normal;
    text-transform: uppercase;
    clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);

    ${largeHeadFontSize};
    padding: 5px 10px 5px 20px;
    @media ${breakPoints.tabletPortrait} {
      padding: 5px 15px 5px 25px;
    }
    @media ${breakPoints.desktopLarge} {
      padding: 5px 20px 5px 35px;
    }

    &:hover,
    &:active {
      background: ${colours.c2_h};
    }
  `,
  imgContainer: css`
    background: ${colours.c4};
    display: inline-block;

    padding: 2px;
    @media ${breakPoints.tabletPortrait} {
      padding: 5px;
    }
  `,
  imgDataContainer: css``,
};

export default style;
