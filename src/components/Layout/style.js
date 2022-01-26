import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { fonts } from '../../resources/fonts';
import { breakPoints } from '../../resources/breakpoints';

const style = {
  layout: css`
    background: ${colours.c3};
  `,
  pageContent: css`
    height: 3000px;
    transition: padding 0.3s ease-out;

    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }
  `,
  header: css`
    background: ${colours.c3};
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: flex-start;
    font-family: ${fonts.f1};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 800;
    width: 100%;
    transition: all 0.3s ease-out;
  `,
  headerLeft: css``,
  headerRight: css`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;

    display: none;
    @media ${breakPoints.desktopSmall} {
      display: flex;
    }
  `,
  logoContainer: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  logoImg: css`
    display: inline-block;
    transition: all 0.3s ease-out;

    svg {
      width: 100%;
      height: 100%;
    }
  `,
  logoText: css`
    display: none;
    transition: all 0.3s ease-out;
    @media ${breakPoints.tabletLandscape} {
      display: inline-block;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `,
  mainMenu: css`
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
  socialMenu: css`
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }

    svg {
      fill: ${colours.c2};

      width: 20px;
      height: 20px;
      @media ${breakPoints.tabletPortrait} {
        width: 25px;
        height: 25px;
      }
      @media ${breakPoints.desktopSmall} {
        width: 35px;
        height: 35px;
      }
    }

    a {
      margin-left: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-left: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-left: 20px;
      }

      :hover,
      :active {
        svg {
          fill: ${colours.c1};
        }
      }
    }
  `,
  mobileMenuContent: css`
    //display: block;
    display: none;
    @media ${breakPoints.tabletPortrait} {
      display: none;
    }
  `,
  mainMenuMobile: css``,
  socialMenuMobile: css``,
  mobileMenuOpener: css`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    display: flex;
    @media ${breakPoints.desktopSmall} {
      display: none;
    }

    button {
      display: block;
      background: transparent;
      transition: all 0.3s ease-out;

      &:hover,
      &:active {
        cursor: pointer;
      }

      .menuIcon {
        div {
          background: ${colours.c2};

          &:hover {
            background: ${colours.c2_h};
          }
        }
      }
    }
  `,
};

export default style;
