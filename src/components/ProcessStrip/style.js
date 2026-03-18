import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import { fonts, textSize } from '../../resources/fonts';

const style = {
  strip: css`
    /* break out of pageContent padding for full-width background */
    margin: 0 -10px 10px;
    background: ${colours.c5};
    @media ${breakPoints.tabletPortrait} {
      margin: 0 -15px 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin: 0 -20px 20px;
    }
  `,
  inner: css`
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }
  `,
  steps: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 10px;
    @media ${breakPoints.tabletPortrait} {
      gap: 15px;
    }
    @media ${breakPoints.tabletLandscape} {
      flex-wrap: nowrap;
      align-items: center;
      gap: 0;
    }
  `,
  step: css`
    flex: 1 1 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media ${breakPoints.tabletLandscape} {
      flex: 1;
    }
  `,
  circle: css`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${colours.c1};
    color: ${colours.c3};
    font-family: ${fonts.f1};
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-bottom: 8px;
  `,
  stepTitle: css`
    font-family: ${fonts.f1};
    text-transform: uppercase;
    ${textSize};
    color: ${colours.c2};
    margin-bottom: 4px;
  `,
  stepDesc: css`
    font-family: ${fonts.f2};
    ${textSize};
    color: ${colours.c4};
    line-height: 1.4;
    margin: 0;
  `,
  arrow: css`
    display: none;
    @media ${breakPoints.tabletLandscape} {
      display: block;
      color: ${colours.c4};
      font-size: 22px;
      line-height: 1;
      flex-shrink: 0;
      padding: 0 4px;
      margin-bottom: 30px; /* visually align with circle row */
    }
  `,
};

export default style;
