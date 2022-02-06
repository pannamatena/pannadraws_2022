import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { fonts } from '../../resources/fonts';
import { breakPoints } from '../../resources/breakpoints';

const style = {
  layout: css`
    background: ${colours.c3};
  `,
  pageContent: css`
    transition: padding 0.3s ease-out;

    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }

    h1 {
      font-family: ${fonts.f1};
      text-transform: uppercase;

      font-size: 1.3em;
      margin-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        font-size: 1.4em;
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        font-size: 1.5em;
        margin-bottom: 20px;
      }
      @media ${breakPoints.desktopLarge} {
        font-size: 2em;
      }
    }

    h2 {
      font-family: ${fonts.f1};
      text-transform: uppercase;

      font-size: 1.3em;
      margin-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        font-size: 1.4em;
      }
      @media ${breakPoints.desktopSmall} {
        font-size: 1.5em;
        margin-top: 30px;
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopLarge} {
        font-size: 2em;
        margin-top: 40px;
        margin-bottom: 20px;
      }
    }

    h3 {
      font-family: ${fonts.f2};
      text-transform: uppercase;
      border-bottom: 2px solid ${colours.c1};

      font-size: 1.3em;
      margin-bottom: 10px;
      @media ${breakPoints.desktopSmall} {
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopLarge} {
        margin-bottom: 20px;
      }

      &.galleryTitle {
        margin-bottom: 5px;
      }
    }

    p {
      font-size: 1.2em;

      margin-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-bottom: 20px;
      }
    }
  `,
  header: css`
    background: ${colours.c3};
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: flex-start;
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
  footerContainer: css`
    color: ${colours.c3};
    background: ${colours.c2};
    font-family: ${fonts.f2};
    font-size: 0.9em;

    padding: 10px 10px 67px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px 15px 60px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px 20px 62px;
    }

    a {
      color: ${colours.c1};
      font-family: ${fonts.f1};
      font-size: 1em;
      text-transform: uppercase;
    }
  `,
  footerSocial: css`
    padding: 5px 0 10px 0;
    @media ${breakPoints.tabletPortrait} {
      padding: 5px 0 15px 0;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 5px 0 20px 0;
    }
    @media ${breakPoints.desktopLarge} {
      padding-top: 10px;
    }

    span {
      :after {
        content: '|';
        display: inline-block;

        padding: 0 10px;
        @media ${breakPoints.tabletPortrait} {
          padding: 0 15px;
        }
        @media ${breakPoints.desktopSmall} {
          padding: 0 20px;
        }
      }

      :first-of-type {
        a {
          padding-left: 0;
        }
      }

      :last-child {
        :after {
          display: none;
        }
      }
    }

    a {
      color: ${colours.c3};
      padding: 0;

      :hover,
      :active {
        color: ${colours.c1};
      }
    }
  `,
  cookiePP: css`
    color: ${colours.c1};
    font-weight: bold;

    &:hover {
      color: ${colours.c1_h};
    }
  `,
};

export default style;
