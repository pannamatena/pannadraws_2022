import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { breakPoints } from '../../resources/breakpoints';
import { fonts, textSize } from '../../resources/fonts';

const style = {
  contactForm: css`
    display: block;
    width: 100%;

    margin-bottom: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin-bottom: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin-bottom: 20px;
    }

    a {
      color: ${colours.c1};

      &:hover {
        color: ${colours.c1_h};
      }
    }
  `,
  contactFormRow: css`
    margin-bottom: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin-bottom: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin-bottom: 20px;
    }

    label {
      display: block;
      //font-size: 1.2em;
    }

    input[type='text'],
    input[type='email'] {
      ${textSize};
      display: block;
      width: 100%;
      background: ${colours.c2};
      color: ${colours.c3};
      border-bottom: 3px solid ${colours.c2};
      transition: border-color 0.3s ease-out;

      padding: 8px;
      @media ${breakPoints.tabletPortrait} {
        padding: 13px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 18px;
      }

      &:focus {
        border-color: ${colours.c1};
      }
    }

    textarea {
      ${textSize};
      display: block;
      width: 100%;
      background: ${colours.c2};
      color: ${colours.c3};
      font-family: ${fonts.f2};
      border-bottom: 3px solid ${colours.c2};
      transition: border-color 0.3s ease-out;

      padding: 8px;
      @media ${breakPoints.tabletPortrait} {
        padding: 13px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 18px;
      }

      &:focus {
        border-color: ${colours.c1};
      }
    }
  `,
  contactFormRowFlex: css`
    @media ${breakPoints.tabletLandscape} {
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      align-items: flex-start;
    }

    & > div {
      flex: 1;

      &:first-of-type {
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          margin-bottom: 15px;
        }
        @media ${breakPoints.tabletLandscape} {
          margin-bottom: 0;
          margin-right: 7px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-right: 10px;
        }
      }

      &:last-of-type {
        @media ${breakPoints.tabletLandscape} {
          margin-left: 7px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-left: 10px;
        }
      }
    }
  `,
  contactFormActions: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  `,
  submitBtn: css`
    ${textSize};
    display: block;
    background: ${colours.c1};
    color: ${colours.c3};
    font-family: ${fonts.f1};
    text-transform: uppercase;

    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }

    &:hover,
    &:active {
      background: ${colours.c1_h};
      cursor: pointer;
    }

    &:disabled {
      cursor: default;
      background: ${colours.c4};
    }
  `,
  checkbox: css`
    display: flex !important;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    span {
      padding-left: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding-left: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding-left: 20px;
      }

      &:hover {
        cursor: pointer;
      }
    }
  `,
  infoText: css`
    margin-top: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin-top: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin-top: 20px;
    }
  `,
};

export default style;
