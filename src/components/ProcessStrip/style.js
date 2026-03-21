import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import {fonts, textSize, textSizeCursive, uppercaseSansDisplay} from '../../resources/fonts';

const style = {
  strip: css`
    /* break out of pageContent padding for full-width background */
    margin: 0 -10px 10px;
    background: ${colours.c_light_brown};
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
  heading: css`
    && {
      font-family: ${fonts.f4};
      font-weight: 400;
      color: ${colours.c2};
      margin-bottom: 16px;
      @media ${breakPoints.tabletPortrait} {
        margin-bottom: 20px;
      }
    }
  `,
  headingSubtext: css`
    && {
      font-family: ${fonts.f3};
      font-style: italic;
      text-transform: none;
      ${textSizeCursive};
      line-height: 1.5em;
      font-weight: 400;
      color: ${colours.c4};
      @media ${breakPoints.desktopSmall} {
        font-size: 18px;
      }
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
      gap: 20px;
    }
    @media ${breakPoints.desktopSmall} {
      gap: 30px;
    }
  `,
  step: css`
    flex: 1 1 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    @media ${breakPoints.tabletLandscape} {
      flex: 1;
    }
  `,
  stepMarker: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  `,
  stepNumeral: css`
    font-family: ${fonts.f3};
    font-style: normal;
    font-size: 20px;
    font-weight: 600;
    color: ${colours.c1};
    line-height: 1;
    margin-right: 10px;
  `,
  stepLine: css`
    flex: 1;
    height: 1px;
    background: ${colours.c4};
  `,
  stepDot: css`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${colours.c1};
    flex-shrink: 0;
    margin-left: 10px;
  `,
  stepTitle: css`
    && {
      ${uppercaseSansDisplay};
      ${textSize};
      color: ${colours.c2};
      margin-bottom: 0;
    }
  `,
  stepDesc: css`
    && {
      font-family: ${fonts.f3};
      ${textSizeCursive};
      line-height: 1.5em;
      font-weight: 400;
      font-style: italic;
      color: ${colours.c4};
      margin: 0;
    }
  `,
};

export default style;
