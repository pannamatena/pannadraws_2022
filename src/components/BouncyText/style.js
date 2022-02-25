import { css } from '@emotion/react';
import { breakPoints } from '../../resources/breakpoints';
import { colours } from '../../resources/colors';

const style = {
  bouncyText: css`
    display: inline-block;
  `,
  bubble: css`
    transform: translatey(0px);
    animation: float 5s ease-in-out infinite;
    mix-blend-mode: multiply;
    text-align: center;
    border-radius: 50rem;
    position: relative;
    color: ${colours.c3};
    background-color: ${colours.c2};

    padding: 10px;
    @media ${breakPoints.tabletPortrait} {
      padding: 15px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 20px;
    }

    &:after {
      display: block;
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 20px 10px 0 10px;
      border-style: solid;
      border-color: ${colours.c2} transparent;
    }
  `,
};

export default style;
