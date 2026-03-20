import { css } from '@emotion/react';
import { breakPoints } from './breakpoints';

export const fonts = {
  f1: 'patrick_hand_scregular',
  f2: 'robotoregular',
  f3: 'cormorant_garamond',   // variable font, supports font-weight 100–900 and font-style italic
  f4: 'playfair_display',     // variable font, supports font-weight 100–900 and font-style italic
};

export const largeHeadFontSize = css`
  font-size: 22px;
  @media ${breakPoints.tabletPortrait} {
    font-size: 26px;
  }
  @media ${breakPoints.desktopSmall} {
    font-size: 36px;
  }
  @media ${breakPoints.desktopLarge} {
    font-size: 42px;
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

export const xSmallHeadFontSize = css`
  font-size: 16px;
  @media ${breakPoints.tabletPortrait} {
    font-size: 16px;
  }
  @media ${breakPoints.desktopSmall} {
    font-size: 16px;
  }
  @media ${breakPoints.desktopLarge} {
    font-size: 20px;
  }
`;

export const textSize = css`
  font-size: 14px;
  @media ${breakPoints.desktopSmall} {
    font-size: 16px;
  }
`;

export const textSizeCursive = css`
  font-size: 16px;
  line-height: 1.5em;
  font-weight: 400;
  @media ${breakPoints.desktopSmall} {
    font-size: 18px;
  }
`;

export const uppercaseSansDisplay = css`
    font-family: ${fonts.f2};
    text-transform: uppercase;
    letter-spacing: 0.08em;
`;
