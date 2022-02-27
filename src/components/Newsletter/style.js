import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { fonts, smallHeadFontSize, textSize } from '../../resources/fonts';
import { colours } from '../../resources/colors';

const style = {
  newsletterSignup: css`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;
    @media ${breakPoints.tabletLandscape} {
      flex-direction: row;
    }

    a {
      color: ${colours.c1};

      &:hover {
        color: ${colours.c1_h};
      }
    }

    label {
      display: block;
      font-size: 1em;
    }

    input[type='text'],
    input[type='email'] {
      display: block;
      width: 100%;
      background: ${colours.c2};
      color: ${colours.c3};
      font-family: ${fonts.f2};
      font-size: 1em;
      border-bottom: 3px solid ${colours.c2};
      transition: border-color 0.3s ease-out;

      padding: 10px;

      &:focus {
        border-color: ${colours.c1};
      }
    }

    p.infoText {
      font-size: 14px;
      margin-bottom: 5px;
    }
  `,
  newsletterDetails: css`
    position: relative;
    background: ${colours.c5};
    border-radius: 50rem;
    max-width: 400px;
    transform: rotate(-2deg);

    padding: 10px 30px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px 30px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px 50px;
    }

    &:before {
      display: block;
      content: '';
      position: absolute;
      top: 100%;

      transform: skewX(20deg) rotate(-5deg) translateY(-3px);
      border-style: solid;
      border-color: ${colours.c5} transparent;

      border-width: 25px 0 0 25px;
      right: 30%;
      @media ${breakPoints.tabletPortrait} {
        border-width: 50px 0 0 50px;
        right: 15%;
      }
    }

    ul {
      margin-bottom: 0;

      li:last-of-type {
        padding-bottom: 0;
      }
    }
  `,
  newsletterForm: css`
    background: rgba(236, 235, 235, 0.8);

    @media ${breakPoints.tabletLandscape} {
      max-width: 300px;
    }
    @media ${breakPoints.desktopSmall} {
      max-width: 500px;
    }
  `,
  newsletterFormRow: css`
    margin-bottom: 10px;
  `,
  newsletterSplitFormRow: css`
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;

    div {
      flex: 1;

      &:first-of-type {
        margin-right: 5px;
      }
      &:last-child {
        margin-left: 5px;
      }
    }
  `,
  submitBtn: css`
    display: block;
    background: ${colours.c1};
    color: ${colours.c3};
    font-family: ${fonts.f1};
    text-transform: uppercase;

    padding: 10px;
    font-size: 1em;

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
    margin-bottom: 10px;

    span {
      font-size: 0.9em;
      padding-left: 10px;

      &:hover {
        cursor: pointer;
      }
    }
  `,
  newsletterFormActions: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  `,
  sendingMsg: css`
    color: ${colours.c4};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  `,
  successMsg: css`
    font-weight: bold;
    color: ${colours.c_success};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    i {
      display: block;
      width: 30px;
      height: 30px;
      background: ${colours.c_success};
      border-radius: 50px;
      position: relative;
      float: left;
      margin: -4px 10px 0 0;

      svg {
        fill: ${colours.c3};
        width: 15px;
        height: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  `,
  errorMsg: css`
    font-weight: bold;
    color: ${colours.c_error};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    i {
      display: block;
      width: 30px;
      height: 30px;
      background: ${colours.c_error};
      border-radius: 50px;
      position: relative;
      float: left;
      margin: 5px 10px 0 0;

      svg {
        fill: ${colours.c3};
        width: 15px;
        height: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  `,
};

export default style;
