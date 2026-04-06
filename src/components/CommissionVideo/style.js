import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import {
  fonts,
  textSize,
  textSizeCursive,
  uppercaseSansDisplay,
} from '../../resources/fonts';
import { btnPrimary, btnOutlineDark } from '../../resources/buttons';

const divider = '1px solid rgba(255,255,255,0.12)';

const style = {
  outer: css`
    background: ${colours.c2};
    margin: 0 -10px 0;
    @media ${breakPoints.tabletPortrait} {
      margin: 0 -15px 0;
    }
    @media ${breakPoints.desktopSmall} {
      margin: 0 -20px 0;
    }
  `,

  layout: css`
    display: flex;
    flex-direction: column;
    @media ${breakPoints.tabletLandscape} {
      flex-direction: row;
      min-height: 480px;
    }
    @media ${breakPoints.desktopSmall} {
      min-height: 560px;
    }
  `,

  /* Left column — text + buttons */
  left: css`
    display: flex;
    justify-content: center;
    padding: 32px 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 36px 15px;
    }
    @media ${breakPoints.tabletLandscape} {
      flex: 0 0 50%;
      max-width: 50%;
      border-right: ${divider};
      padding: 48px 0;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 56px 0;
    }
  `,
  leftContent: css`
    width: 100%;
    max-width: 560px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 0 20px;
    }
    @media ${breakPoints.tabletLandscape} {
      padding: 0 40px 0 20px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 0 48px 0 20px;
    }
  `,
  eyebrow: css`
    ${uppercaseSansDisplay};
    ${textSize};
    color: ${colours.c1};
  `,
  heading: css`
    && {
      font-family: ${fonts.f4};
      font-weight: 400;
      color: ${colours.c3};
      text-transform: none;
      letter-spacing: normal;
      font-style: normal;
      margin: 0;
      line-height: 1.15;
      /* intentional display size: hero commission heading */
      font-size: 32px;
      @media ${breakPoints.tabletPortrait} {
        font-size: 38px;
      }
      @media ${breakPoints.desktopSmall} {
        font-size: 48px;
      }
    }
  `,
  headingAccent: css`
    font-family: ${fonts.f4};
    font-style: italic;
    color: ${colours.c1};
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
  buttons: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
  `,
  btnEtsy: css`
    ${btnPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  `,
  btnMessage: css`
    ${btnOutlineDark};
    display: block;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  `,

  /* Right column — video */
  right: css`
    display: flex;
    flex-direction: column;
    @media ${breakPoints.tabletLandscape} {
      flex: 0 0 50%;
      max-width: 50%;
    }
  `,
  videoWrapper: css`
    position: relative;
    flex: 1;
    overflow: hidden;
    min-height: 260px;
    @media ${breakPoints.tabletLandscape} {
      min-height: 0;
    }
  `,
  video: css`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  `,
  videoOverlay: css`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    pointer-events: none;
    color: rgba(255, 255, 255, 0.4);
  `,
  overlayLabel: css`
    ${uppercaseSansDisplay};
    ${textSize};
  `,
  playButton: css`
    width: 64px;
    height: 64px;
  `,
  overlayCaption: css`
    font-family: ${fonts.f3};
    font-style: italic;
    ${textSizeCursive};
  `,

  /* Media credit strip below video */
  mediaStrip: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 10px;
    border-top: ${divider};
    @media ${breakPoints.tabletPortrait} {
      padding: 14px 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 16px 20px;
    }
  `,
  mediaCredit: css`
    font-family: ${fonts.f3};
    font-style: italic;
    ${textSizeCursive};
    color: ${colours.c4};
  `,
  instagramLink: css`
    ${uppercaseSansDisplay};
    ${textSize};
    color: ${colours.c1};
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
    &:hover,
    &:active {
      color: ${colours.c1_h};
    }
  `,
};

export default style;
