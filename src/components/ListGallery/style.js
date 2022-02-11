import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import { fonts } from '../../resources/fonts';

const style = {
  listGallery: css`
    margin: 0 auto;
    @media ${breakPoints.desktopLarge} {
      max-width: 80%;
    }
  `,
  galleryItem: css`
    display: flex;

    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin-bottom: 15px;
    }
    @media ${breakPoints.tabletLandscape} {
      flex-direction: row;
      justify-content: stretch;
      align-items: flex-start;
    }
    @media ${breakPoints.desktopSmall} {
      margin-bottom: 20px;
    }

    h3 {
      font-family: ${fonts.f1};
    }
  `,
  imgContainer: css`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: center;
    margin-bottom: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin-bottom: 15px;
    }
    @media ${breakPoints.tabletLandscape} {
      max-width: 50%;
      justify-content: flex-end;
      margin-bottom: 0;
      margin-right: 20px;
    }

    img {
      max-width: 100%;
      border: 2px solid ${colours.c5};
      @media ${breakPoints.tabletPortrait} {
        border-width: 5px;
      }
    }
  `,
  itemDataContainer: css`
    flex: 1;
    width: 100%;

    @media ${breakPoints.tabletLandscape} {
      max-width: 50%;
    }
  `,
  year: css`
    color: ${colours.c4};
    display: block;

    margin-bottom: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin-bottom: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin-bottom: 20px;
    }
  `,
};

export default style;
