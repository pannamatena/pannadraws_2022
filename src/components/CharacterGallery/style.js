import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';
import { fonts, uppercaseSansDisplay } from '../../resources/fonts';

const style = {
  grid: css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;

    @media ${breakPoints.tabletLandscape} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `,
  tile: css`
    position: relative;
    overflow: hidden;
    aspect-ratio: 3/4;

    @media ${breakPoints.tabletLandscape} {
      aspect-ratio: 2/3;
    }

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  overlay: css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 40px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: linear-gradient(to bottom, transparent, ${colours.c2_transparent});
  `,
  caption: css`
    font-family: ${fonts.f4};
    font-size: 14px;
    font-weight: 700;
    font-style: italic;
    color: ${colours.c3};
    line-height: 1.2;
  `,
  subCaption: css`
    font-family: ${fonts.f2};
    font-size: 9px;
    color: ${colours.c4};
    ${uppercaseSansDisplay};
  `,
};

export default style;
