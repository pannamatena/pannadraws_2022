import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';

const style = {
  grid: css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 6px;

    @media ${breakPoints.tabletLandscape} {
      grid-template-columns: 2fr 1fr 1fr;
      /* 1fr 1fr rows + aspect-ratio on the container so the large image (2fr
         col, 3:4 ratio) fills exactly both rows: grid height = 2/3 * width */
      grid-template-rows: 1fr 1fr;
      aspect-ratio: 3 / 2;
    }
  `,
  /* Large feature — aspect-ratio matches image (3:4) so full height is always
     visible. Spans both rows on desktop, driving the total grid height. */
  cellLarge: css`
    aspect-ratio: 3 / 4;
    overflow: hidden;
    border-radius: 2px;

    @media ${breakPoints.tabletLandscape} {
      aspect-ratio: unset;
      grid-column: 1;
      grid-row: span 2;
    }
  `,
  imgLarge: css`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  `,
  /* Detail and wide cells fill their area — cropping is fine */
  cellDetail: css`
    aspect-ratio: 3 / 4;
    overflow: hidden;
    border-radius: 2px;

    @media ${breakPoints.tabletLandscape} {
      aspect-ratio: unset;
    }
  `,
  cellWide: css`
    aspect-ratio: 5 / 2;
    overflow: hidden;
    border-radius: 2px;
    grid-column: span 2;

    @media ${breakPoints.tabletLandscape} {
      aspect-ratio: unset;
    }
  `,
  img: css`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  imgWide: css`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 65%;
  `,
  /* Zoom in on the girl's face — scale up, anchor to upper centre */
  imgDetail1: css`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.6);
    transform-origin: center 22%;
  `,
  /* Slight zoom to fill tile while keeping all 3 animals visible */
  imgDetail2: css`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.2);
    transform-origin: center center;
  `,
};

export default style;
