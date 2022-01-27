import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import { fonts } from '../../resources/fonts';

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

        margin-right: 10px;
        @media ${breakPoints.tabletPortrait} {
          margin-right: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-right: 20px;
        }

        &:last-child {
          margin: 0;
        }

        a {
          color: ${colours.c2};
          text-transform: uppercase;
          display: inline-block;
          white-space: nowrap;

          :hover,
          :active,
          &.active {
            color: ${colours.c1};
          }

          font-size: 1.3em;
          @media ${breakPoints.tabletPortrait} {
            font-size: 1.4em;
          }
          @media ${breakPoints.desktopSmall} {
            font-size: 1.5em;
          }
          @media ${breakPoints.desktopLarge} {
            font-size: 2em;
          }
        }

        & > div {
          height: 0;
          padding: 0;
        }

        &:hover {
          & > div {
            height: 235px;
            padding: 5px 0 2px;
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
    top: 30px;
    left: 50%;
    background: ${colours.c3};
    transition: height 0.3s ease-out;
    transform: translateX(-50%);

    display: none;
    @media ${breakPoints.tabletPortrait} {
      display: flex;
    }

    a:first-child {
      border-top: 2px solid ${colours.c1};
      position: relative;
      display: block;
      width: 100%;
      text-align: center;
      padding: 0 2px;

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
  `,
};

export default style;
