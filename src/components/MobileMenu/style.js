import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import { fonts } from '../../resources/fonts';

const style = {
  mobileMenuContent: css`
    font-family: ${fonts.f1};
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    transition: all 0.3s ease-out;
    overflow: hidden;
    background: ${colours.c3};
    z-index: 800;
  `,
  closeBtn: css`
    display: block;
    background: transparent;
    position: absolute;

    top: 10px;
    right: 10px;
    @media ${breakPoints.tabletPortrait} {
      top: 15px;
      right: 15px;
    }

    svg {
      transition: all 0.3s ease-out;
      fill: ${colours.c2};
    }

    &:hover,
    &:active {
      fill: ${colours.c2_h};
    }
  `,
  mainMenu: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    ul {
      width: 100%;
      li {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        a,
        .fakeLink {
          color: ${colours.c2};
          text-transform: uppercase;
          display: inline-block;
          white-space: nowrap;

          :hover,
          :active,
          &.active {
            color: ${colours.c1};
          }

          font-size: 36px;
          @media ${breakPoints.tabletPortrait} {
            font-size: 42px;
          }
        }

        .fakeLink {
          &:hover,
          &:active {
            color: ${colours.c2};
          }
        }
      }
    }
  `,
  subMenu: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    transition: all 0.3s ease-out;
    width: 100%;

    a {
      font-size: 22px !important;
      @media ${breakPoints.tabletPortrait} {
        font-size: 28px !important;
      }

      &:first-child {
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
    }
  `,
  socialMenu: css`
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      li {
        &:first-child {
          a {
            margin: 0;
          }
        }
      }
    }

    svg {
      fill: ${colours.c2};

      width: 50px;
      height: 50px;
      @media ${breakPoints.tabletPortrait} {
        width: 100px;
        height: 100px;
      }
    }

    a {
      margin-left: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-left: 15px;
      }

      :hover,
      :active {
        svg {
          fill: ${colours.c1};
        }
      }
    }
  `,
};

export default style;
