import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import { fonts, textSize } from '../../resources/fonts';
import { btnPrimary, btnOutlineBlack } from '../../resources/buttons';

const style = {
  hero: css`
    display: flex;
    flex-direction: column;

    /* break out of pageContent padding to reach full width */
    margin: 0 -10px;
    @media ${breakPoints.tabletPortrait} {
      margin: 0 -15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin: 0 -20px;
      flex-direction: row;
    }
  `,
  imageSide: css`
    background: #e8e0d8;
    min-height: 280px;
    flex: 1;
    display: flex;
    align-items: flex-end;
    padding: 10px;
    @media ${breakPoints.desktopSmall} {
      padding: 15px;
    }
    @media ${breakPoints.desktopLarge} {
      padding: 20px;
    }
  `,
  imageLabel: css`
    font-family: ${fonts.f2};
    ${textSize};
    color: ${colours.c4};
  `,
  contentSide: css`
    flex: 1;
    background: ${colours.c3};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px;
  `,
  heading: css`
    line-height: 1.1;
    margin-bottom: 16px;

    font-size: 28px;
    @media ${breakPoints.tabletPortrait} {
      font-size: 32px;
    }
    @media ${breakPoints.desktopSmall} {
      font-size: 40px;
    }
    @media ${breakPoints.desktopLarge} {
      font-size: 52px;
    }
  `,
  headingAccent: css`
    color: ${colours.c1};
    display: block;
  `,
  body: css`
    font-family: ${fonts.f2};
    ${textSize};
    color: #555;
    line-height: 1.6;
    margin-bottom: 24px;
  `,
  buttons: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  `,
  btnPrimary,
  btnSecondary: btnOutlineBlack,
};

export default style;
