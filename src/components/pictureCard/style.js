import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import { fonts, smallHeadFontSize } from '../../resources/fonts';

const style = {
  pictureCard: css`
    display: inline-block;

    max-width: 80%;
    margin: 10px 40px;
    @media ${breakPoints.tabletPortrait} {
      max-width: 44%;
      margin: 15px;
    }
    @media ${breakPoints.tabletLandscape} {
      max-width: 29%;
    }
    @media ${breakPoints.desktopSmall} {
      margin: 20px;
    }

    img {
      max-width: 100%;
      display: block;
    }

    video {
      width: 100%;
    }

    h5 {
      font-family: ${fonts.f1};
      text-transform: uppercase;
      ${smallHeadFontSize};
      width: 100%;
      text-align: center;
    }
  `,
  card: css`
    display: block;
    background: ${colours.c3};
    box-shadow: 1px 1px 5px 0 ${colours.shadow};

    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }
  `,
  pictureContainer: css``,
};

export default style;
