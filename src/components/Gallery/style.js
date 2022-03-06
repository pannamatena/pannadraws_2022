import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import { fonts, largeHeadFontSize, textSize } from '../../resources/fonts';

const style = {
  galleryContainer: css`
    margin-bottom: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin-bottom: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin-bottom: 20px;
    }
  `,
  galleryTile: css`
    display: block;
    box-sizing: content-box;
    align-items: center;
    position: relative;
    overflow: hidden;

    .hoverContainer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: ${colours.c2_transparent};
      color: ${colours.c3};
      overflow: hidden;
      transition: all 0.3s ease-out;
      padding: 0;
      z-index: 2;
    }

    &:hover {
      cursor: pointer;

      .hoverContainer {
        height: 100%;
        padding: 10px;
        @media ${breakPoints.tabletPortrait} {
          padding: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          padding: 20px;
        }
      }
    }

    &.merchandiseTile {
      &:hover {
        cursor: default;
      }
    }
  `,
  galleryInfoTile: css`
    background: ${colours.c5};
    padding: 10px;
  `,
  imgInfoBox: css`
    color: ${colours.c2};

    &.merchInfoBox {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  `,
  priceLine: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,
  priceFrom: css`
    margin-top: 5px;
    margin-bottom: -5px;
  `,
  priceTag: css`
    ${largeHeadFontSize};
  `,

  hoverContainerImgTitle: css`
    font-family: ${fonts.f1} !important;
    font-size: 18px;
    @media ${breakPoints.desktopSmall} {
      font-size: 20px;
    }
  `,
  clickForMore: css`
    font-size: 1.2em;
    font-family: ${fonts.f1};
    text-transform: uppercase;
    color: ${colours.c1};

    &:after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 5px solid ${colours.c1};
      margin-left: 5px;
    }
  `,
  label: css`
    display: block;
    position: absolute;
    text-transform: uppercase;
    font-weight: bold;
    transform: rotate(-45deg);
    z-index: 1;
  `,
  labelSold: css`
    right: -30px;
    background: ${colours.c2};
    color: ${colours.c3};

    padding: 5px 40px;
    font-size: 1.5em;
    bottom: 15px;
    @media ${breakPoints.tabletPortrait} {
      font-size: 1.3em;
    }
    @media ${breakPoints.desktopSmall} {
      font-size: 1em;
      bottom: 10px;
    }
  `,
  labelPrintsAvailable: css`
    background: ${colours.c3};
    color: ${colours.c1};

    padding: 5px 50px;
    font-size: 1em;
    right: -45px;
    bottom: 40px;
    @media ${breakPoints.tabletPortrait} {
      padding: 5px 70px;
      font-size: 0.8em;
      right: -60px;
      bottom: 40px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 5px 40px;
      font-size: 0.9em;
      right: -50px;
      bottom: 38px;
    }
  `,
  labelFreeShipROI: css`
    display: inline-block;
    transform: rotate(0);
    text-transform: none;
    background: ${colours.c_success};
    color: ${colours.c3};
    text-align: center;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 90%, 0% 100%);

    font-size: 1em;
    max-width: 60px;
    padding: 3px 3px 10px 3px;
    left: 10px;
    @media ${breakPoints.tabletPortrait} {
      font-size: 0.9em;
      max-width: 70px;
      left: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      font-size: 0.7em;
      max-width: 70px;
      left: 20px;
    }
  `,
  merchPrice: css`
    display: block;
    ${largeHeadFontSize};
  `,
  merchPriceTag: css`
    & > span {
      margin-top: -5px;
    }
  `,
  mainActionLink: css`
    display: block;
    color: ${colours.c1};
    transition: color 0.2s ease;
    font-family: ${fonts.f1};
    font-size: 1.2em;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
    }

    span {
      svg {
        width: 10px;
        height: 10px;
        transform: rotate(-45deg);
        fill: ${colours.c1};
        transition: fill 0.3s ease-out;
        margin-left: 3px;
      }
    }

    &:hover {
      cursor: pointer;
      color: ${colours.c1_h} svg {
        fill: ${colours.c1_h};
      }
    }
  `,
};

export default style;
