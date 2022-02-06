import { css } from '@emotion/react';
import { breakPoints } from './breakpoints';

export const fonts = {
  f1: 'patrick_hand_scregular',
  f2: 'robotoregular',
};

export const largeHeadFontSize = css`
  font-size: 22px;
  @media ${breakPoints.tabletPortrait} {
    font-size: 22px;
  }
  @media ${breakPoints.desktopSmall} {
    font-size: 24px;
  }
  @media ${breakPoints.desktopLarge} {
    font-size: 34px;
  }
`;

export const mediumHeadFontSize = css`
  font-size: 20px;
  @media ${breakPoints.tabletPortrait} {
    font-size: 20px;
  }
  @media ${breakPoints.desktopSmall} {
    font-size: 22px;
  }
  @media ${breakPoints.desktopLarge} {
    font-size: 32px;
  }
`;

export const smallHeadFontSize = css`
  font-size: 20px;
  @media ${breakPoints.tabletPortrait} {
    font-size: 20px;
  }
  @media ${breakPoints.desktopSmall} {
    font-size: 22px;
  }
  @media ${breakPoints.desktopLarge} {
    font-size: 24px;
  }
`;

export const textSize = css`
  font-size: 14px;
  @media ${breakPoints.desktopSmall} {
    font-size: 16px;
  }
`;
