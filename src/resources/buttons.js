import { css } from '@emotion/react';
import { colours } from './colors';
import { fonts, textSize } from './fonts';
import { breakPoints } from './breakpoints';

export const btnPrimary = css`
  ${textSize};
  display: inline-block;
  background: ${colours.c1};
  color: ${colours.c3} !important;
  font-family: ${fonts.f1};
  text-transform: uppercase;
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
  display: inline-block;
  background: ${colours.c3};
  color: ${colours.c1} !important;
  border: 2px solid ${colours.c1};
  font-family: ${fonts.f1};
  text-transform: uppercase;
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

export const btnOutlineBlack = css`
  ${textSize};
  display: inline-block;
  background: transparent;
  color: ${colours.c2} !important;
  border: 2px solid ${colours.c2};
  font-family: ${fonts.f1};
  text-transform: uppercase;
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
