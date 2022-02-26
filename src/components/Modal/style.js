import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';

const style = {
  closeBtn: css`
    display: inline-block;
    width: 25px;
    height: 25px;
    position: absolute;

    top: 10px;
    right: 10px;
    @media ${breakPoints.tabletPortrait} {
      top: 15px;
      right: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      top: 20px;
      right: 20px;
    }
  `,
};

export default style;
