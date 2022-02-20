import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { fonts } from '../../resources/fonts';
import { colours } from '../../resources/colors';

const style = {
  newsletterSignup: css`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;
    padding: 10px;
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

    ul {
      margin-bottom: 10px;

      li {
        padding-left: 10px;
        position: relative;

        padding-bottom: 10px;

        &:before {
          display: block;
          content: '';
          width: 5px;
          height: 5px;
          background: ${colours.c1};
          border-radius: 15px;
          position: absolute;
          left: 0;
          top: 8px;
        }
      }
    }
  `,
  newsletterDetails: css``,
  newsletterForm: css`
    background: rgba(236, 235, 235, 0.8);

    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }
    @media ${breakPoints.tabletLandscape} {
      margin-left: 30px;
      max-width: 300px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
      margin-left: 50px;
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

      &:first-child {
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
  infoText: css`
    font-size: 0.7em;
  `,
  newsletterFormActions: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  `,
  successSub: css`
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
  errorSub: css`
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
