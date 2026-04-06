import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import {
  fonts,
  textSize,
  textSizeCursive,
  smallHeadFontSize,
  uppercaseSansDisplay,
} from '../../resources/fonts';
import { btnPrimary, btnOutlineDark } from '../../resources/buttons';

const divider = '1px solid rgba(255,255,255,0.12)';

const style = {
  outer: css`
    background: ${colours.c2};
    margin: 0 -10px 10px;
    @media ${breakPoints.tabletPortrait} {
      margin: 0 -15px 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin: 0 -20px 20px;
    }
  `,
  inner: css`
    max-width: 900px;
    margin: 0 auto;
    @media ${breakPoints.desktopSmall} {
      max-width: 1100px;
    }
    @media ${breakPoints.desktopLarge} {
      max-width: 1400px;
    }
  `,

  statsBar: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: ${divider};
  `,
  statItem: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 20px 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 24px 20px;
    }
    &:not(:last-child) {
      border-right: ${divider};
    }
  `,
  statNumber: css`
    font-family: ${fonts.f3};
    font-style: italic;
    color: ${colours.c1};
    line-height: 1;
    /* intentional display size: hero stat numerals */
    font-size: 28px;
    @media ${breakPoints.tabletPortrait} {
      font-size: 36px;
    }
    @media ${breakPoints.desktopSmall} {
      font-size: 44px;
    }
  `,
  statLabel: css`
    ${uppercaseSansDisplay};
    ${textSize};
    color: ${colours.c4};
  `,

  mainPanel: css`
    display: grid;
    grid-template-columns: 1fr;
    @media ${breakPoints.tabletLandscape} {
      grid-template-columns: 1fr 1fr;
    }
  `,
  leftSide: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 10px;
    border-bottom: ${divider};
    @media ${breakPoints.tabletPortrait} {
      padding: 28px 15px;
    }
    @media ${breakPoints.tabletLandscape} {
      border-bottom: none;
      border-right: ${divider};
      padding: 32px 20px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 40px 20px;
    }
  `,
  commissionsEyebrow: css`
    ${uppercaseSansDisplay};
    ${textSize};
    color: ${colours.c1};
  `,
  heading: css`
    && {
      font-family: ${fonts.f3};
      font-style: italic;
      font-weight: 400;
      color: ${colours.c3};
      text-transform: none;
      letter-spacing: normal;
      margin: 0;
      line-height: 1.15;
      /* intentional display size: hero commission heading */
      font-size: 32px;
      @media ${breakPoints.tabletPortrait} {
        font-size: 36px;
      }
      @media ${breakPoints.desktopSmall} {
        font-size: 44px;
      }
    }
  `,
  body: css`
    && {
      font-family: ${fonts.f3};
      font-style: italic;
      ${textSizeCursive};
      color: ${colours.c4};
      margin: 0;
    }
  `,

  rightSide: css`
    display: flex;
    flex-direction: column;
  `,
  serviceCard: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 24px 10px;
    text-decoration: none;
    transition: background 0.15s ease;
    &:not(:last-child) {
      border-bottom: ${divider};
    }
    @media ${breakPoints.tabletPortrait} {
      padding: 28px 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 32px 20px;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.04);
    }
  `,
  serviceCardContent: css`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,
  cardEyebrow: css`
    ${uppercaseSansDisplay};
    ${textSize};
    color: ${colours.c4};
  `,
  cardTitle: css`
    && {
      font-family: ${fonts.f4};
      font-weight: 700;
      ${smallHeadFontSize};
      color: ${colours.c3};
      text-transform: none;
      letter-spacing: normal;
      margin: 0;
    }
  `,
  cardDesc: css`
    && {
      font-family: ${fonts.f3};
      font-style: italic;
      ${textSizeCursive};
      color: ${colours.c4};
      margin: 0;
    }
  `,
  cardArrow: css`
    color: ${colours.c1};
    font-size: 20px;
    flex-shrink: 0;
  `,

  bottomBar: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 10px;
    border-top: ${divider};
    @media ${breakPoints.tabletPortrait} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 20px 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 24px 20px;
    }
  `,
  bottomText: css`
    && {
      font-family: ${fonts.f3};
      font-style: italic;
      ${textSizeCursive};
      color: ${colours.c4};
      margin: 0;
    }
  `,
  bottomButtons: css`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-shrink: 0;
  `,
  btnEtsy: css`
    ${btnPrimary};
  `,
  btnMessage: css`
    ${btnOutlineDark};
  `,
};

export default style;
