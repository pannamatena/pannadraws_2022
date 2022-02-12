import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import { fonts, largeHeadFontSize } from '../../resources/fonts';

const style = {
  layout: css`
    margin-top: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin-top: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin-top: 20px;
    }
  `,
};

export default style;
