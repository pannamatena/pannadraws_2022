import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';

const style = {
  outerFlushBottom: css`
    margin-bottom: -11px;
    @media ${breakPoints.tabletPortrait} {
      margin-bottom: -15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin-bottom: -21px;
    }
  `,
  outer: css`
    /* break out of pageContent padding for full-bleed background */
    margin: 0 -10px 10px;
    @media ${breakPoints.tabletPortrait} {
      margin: 0 -15px 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin: 0 -20px 20px;
    }
  `,
  inner: css`
    max-width: 800px;
    margin: 0 auto;

    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
      max-width: 900px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
      max-width: 1000px;
    }
  `,
};

export default style;
