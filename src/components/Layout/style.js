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
  `,
  header: css`
    background: ${colours.c3};
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    font-family: ${fonts.f1};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 800;
    width: 100%;
    transition: padding 0.3s ease-out;
  `,
  headerLeft: css``,
  headerRight: css`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    display: none;
    @media ${breakPoints.tabletPortrait} {
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
      align-items: center;
      li {
        display: block;

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
    @media ${breakPoints.tabletPortrait} {
      display: none;
    }

    button {
      display: block;
      width: 30px;
      height: 25px;
      background: transparent;

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
