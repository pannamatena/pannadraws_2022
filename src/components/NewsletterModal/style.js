import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import { fonts, mediumHeadFontSize } from '../../resources/fonts';

const style = {
  newsletterModal: css`
    display: flex;
    flex-direction: column;
    @media ${breakPoints.tabletLandscape} {
      flex-direction: row;
    }
  `,
  form: css`
    background: ${colours.c5};

    padding: 10px;
    margin: -10px -10px 0;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
      margin: -15px -15px 0;
    }
    @media ${breakPoints.tabletLandscape} {
      margin: -15px 0 -15px -15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
      margin: -20px 0 -20px -20px;
    }
  `,
  details: css`
    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }
  `,
};

export default style;
