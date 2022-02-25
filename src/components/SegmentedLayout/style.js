import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { fonts, smallHeadFontSize, textSize } from '../../resources/fonts';
import { colours } from '../../resources/colors';

const style = {
  segmentedLayout: css`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;

    margin: 0 -10px 0;
    @media ${breakPoints.desktopSmall} {
      margin: 0 -15px 0;
    }
    @media ${breakPoints.desktopLarge} {
      margin: 0 -20px 0;
    }
  `,
  leftSide: css`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
  `,
  leftSideInner: css`
    height: 100%;
    padding: 10px;
    @media ${breakPoints.desktopSmall} {
      padding: 15px;
    }
    @media ${breakPoints.desktopLarge} {
      padding: 20px;
    }
  `,
  rightSide: css`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  `,
  rightSideInner: css`
    padding: 10px;
    @media ${breakPoints.desktopSmall} {
      padding: 15px;
    }
    @media ${breakPoints.desktopLarge} {
      padding: 20px;
    }
  `,
};

export default style;
