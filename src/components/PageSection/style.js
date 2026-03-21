import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';

const style = {
  outerFlushBottom: css`
    margin-bottom: -21px;
    @media ${breakPoints.tabletPortrait} {
      margin-bottom: -28px;
    }
    @media ${breakPoints.desktopSmall} {
      margin-bottom: -41px;
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

    padding: 10px 10px 0;
    @media ${breakPoints.tabletPortrait} {
      max-width: 900px;
      padding: 15px 15px 0;
    }
    @media ${breakPoints.desktopSmall} {
      max-width: 1000px;
      padding: 20px 20px 0;
    }
  `,
};

export default style;
