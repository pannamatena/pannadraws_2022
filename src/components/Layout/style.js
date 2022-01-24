import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { fonts } from '../../resources/fonts';
import { breakPoints } from '../../resources/breakpoints';

const style = {
  layout: css`
    background: ${colours.c3};
  `,
  pageContent: css``,
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
    z-index: 999;
    width: 100%;
    transition: padding 0.3s ease-out;

    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }
  `,
  headerLeft: css``,
  headerRight: css`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `,
  logoContainer: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  logoImg: css`
    display: inline-block;

    svg {
      transition: all 0.3s ease-out;
      width: 50px;
      height: 50px;
      @media ${breakPoints.desktopSmall} {
        width: 66px;
        height: 61px;
      }
    }
  `,
  logoText: css`
    display: none;
    @media ${breakPoints.tabletPortrait} {
      display: inline-block;
    }

    svg {
      transition: all 0.3s ease-out;
      @media ${breakPoints.tabletPortrait} {
        width: 80px;
        height: 50px;
      }
      @media ${breakPoints.desktopSmall} {
        width: 110px;
        height: 61px;
      }
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
        a {
          color: ${colours.c2};
          text-transform: uppercase;
          display: inline-block;

          :hover,
          :active {
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
};

export default style;
