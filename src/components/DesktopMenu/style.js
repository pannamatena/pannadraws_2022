import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import {
  fonts,
  largeHeadFontSize,
  smallHeadFontSize,
} from '../../resources/fonts';

const style = {
  mainMenu: css`
    font-family: ${fonts.f1};

    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-start;
      li {
        display: block;
        position: relative;

        @media ${breakPoints.desktopSmall} {
          margin-right: 20px;
        }

        &:last-child {
          margin: 0;
        }

        a,
        .fakeLink {
          color: ${colours.c2};
          text-transform: uppercase;
          display: inline-block;
          white-space: nowrap;
          ${largeHeadFontSize};

          :hover,
          :active {
            color: ${colours.c1};
          }

          &.active {
            border-bottom: 2px solid ${colours.c1};
          }
        }

        .fakeLink {
          &:hover {
            color: ${colours.c2};
          }
        }

        & > div {
          height: 0;
          padding: 0;
        }

        &:hover {
          cursor: pointer;
          & > div {
            padding: 5px 0 2px;
            &.artMenu {
              height: 100px;
              @media ${breakPoints.desktopLarge} {
                height: 100px;
              }
            }

            &.shopMenu {
              height: 221px;
              @media ${breakPoints.desktopLarge} {
                height: 255px;
              }
            }
          }
        }
      }
    }
  `,
  subMenu: css`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    position: absolute;
    left: 50%;
    background: ${colours.c3};
    transition: height 0.3s ease-out;
    transform: translateX(-50%);

    display: none;
    top: 30px;
    @media ${breakPoints.desktopSmall} {
      display: flex;
    }
    @media ${breakPoints.desktopLarge} {
      top: 40px;
    }

    a.subMenuLink {
      ${smallHeadFontSize};
      margin: 0 20px;

      &:first-of-type {
        border-top: 2px solid ${colours.c1};
        position: relative;
        display: block;
        width: 100%;
        text-align: center;
        padding-top: 2px;

        &:before {
          content: '';
          display: block;
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid ${colours.c1};
        }
      }
    }
  `,
};

export default style;
