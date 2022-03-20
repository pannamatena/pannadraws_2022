import { css } from '@emotion/react';
import { fonts, textSize } from '../../resources/fonts';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';

const style = {
  faq: css`
    display: block;
  `,
  faqQuestion: css`
    margin-bottom: 10px;
    @media ${breakPoints.tabletPortrait} {
      margin-bottom: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      margin-bottom: 20px;
    }

    p {
      overflow: hidden;
      margin: 0;
      padding: 0;
      height: 0;
    }

    &.open {
      p {
        height: auto;
        border-left: 5px solid ${colours.c4};
        padding: 0 10px;
        margin: 10px 0 0 10px;
        @media ${breakPoints.tabletPortrait} {
          padding: 0 15px;
          margin: 15px 0 0 15px;
        }
        @media ${breakPoints.desktopSmall} {
          padding: 0 20px;
          margin: 20px 0 0 20px;
        }
      }
    }
  `,
  faqTitle: css`
    ${textSize};
    font-family: ${fonts.f2};
    text-transform: none;
    cursor: pointer;
    position: relative;
    padding-left: 10px;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      display: block;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 5px solid ${colours.c1};
      transition: all 0.3s ease-out;

      .open & {
        transform: translateY(-50%) rotate(90deg);
      }
    }
  `,
};

export default style;
