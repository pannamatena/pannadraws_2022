import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import { fonts, largeHeadFontSize } from '../../resources/fonts';

const style = {
  layout: css`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;
    margin-top: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin-top: 15px;
    }
    @media ${breakPoints.tabletLandscape} {
      flex-direction: row;
    }
    @media ${breakPoints.desktopSmall} {
      margin-top: 20px;
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
    background: ${colours.c5};
    display: inline-block;

    padding: 2px;
    @media ${breakPoints.tabletPortrait} {
      padding: 5px;
    }
  `,
  imgDataContainer: css`
    max-width: 600px;
    padding: 0 10px 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 0 15px 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 0 20px 20px;
    }

    h1 {
      margin-bottom: 0;
    }
  `,
  year: css`
    color: ${colours.c4};
    display: block;

    margin-bottom: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin-bottom: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin-bottom: 20px;
    }
  `,
  imgActionBox: css``,
};

export default style;
