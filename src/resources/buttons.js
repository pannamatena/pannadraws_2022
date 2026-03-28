import { css } from '@emotion/react';
import { colours } from './colors';
import { textSize, uppercaseSansDisplay } from './fonts';
import { breakPoints } from './breakpoints';

export const btnPrimary = css`
  ${textSize};
  ${uppercaseSansDisplay};
  display: inline-block;
  background: ${colours.c1};
  color: ${colours.c3} !important;
  text-decoration: none;

  padding: 10px;
  @media ${breakPoints.tabletPortrait} {
    padding: 15px;
  }
  @media ${breakPoints.desktopSmall} {
    padding: 20px;
  }

  &:hover,
  &:active {
    background: ${colours.c1_h};
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    background: ${colours.c4};
  }
`;

export const btnOutlineRed = css`
  ${textSize};
  ${uppercaseSansDisplay};
  display: inline-block;
  background: ${colours.c3};
  color: ${colours.c1} !important;
  border: 2px solid ${colours.c1};
  text-decoration: none;
  white-space: nowrap;

  padding: 8px;
  @media ${breakPoints.tabletPortrait} {
    padding: 13px;
  }
  @media ${breakPoints.desktopSmall} {
    padding: 18px;
  }

  &:hover,
  &:active {
    background: ${colours.c5};
    cursor: pointer;
  }
`;

export const btnOutlineDark = css`
  ${textSize};
  ${uppercaseSansDisplay};
  display: inline-block;
  background: transparent;
  color: ${colours.c3} !important;
  border: 1px solid ${colours.c4};
  text-decoration: none;

  padding: 9px;
  @media ${breakPoints.tabletPortrait} {
    padding: 14px;
  }
  @media ${breakPoints.desktopSmall} {
    padding: 19px;
  }

  &:hover,
  &:active {
    border-color: ${colours.c3};
    cursor: pointer;
  }
`;

export const btnOutlineWhite = css`
  ${textSize};
  ${uppercaseSansDisplay};
  display: inline-block;
  background: transparent;
  color: ${colours.c3} !important;
  border: 2px solid ${colours.c3};
  text-decoration: none;
  white-space: nowrap;

  padding: 8px;
  @media ${breakPoints.tabletPortrait} {
    padding: 13px;
  }
  @media ${breakPoints.desktopSmall} {
    padding: 18px;
  }

  &:hover,
  &:active {
    border-color: ${colours.c4};
    color: ${colours.c4} !important;
    cursor: pointer;
  }
`;

export const btnOutlineBlack = css`
  ${textSize};
  ${uppercaseSansDisplay};
  display: inline-block;
  background: transparent;
  color: ${colours.c2} !important;
  border: 2px solid ${colours.c2};
  text-decoration: none;

  padding: 8px;
  @media ${breakPoints.tabletPortrait} {
    padding: 13px;
  }
  @media ${breakPoints.desktopSmall} {
    padding: 18px;
  }

  &:hover,
  &:active {
    background: ${colours.c5};
    cursor: pointer;
  }
`;
