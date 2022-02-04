import { css } from '@emotion/react';
import { colours } from '../../resources/colors';

const style = {
  galleryTile: css`
    display: block;
    box-sizing: content-box;
    align-items: center;
    border: 2px solid transparent;

    &:hover {
      cursor: pointer;
      border-color: ${colours.c1};
    }
  `,
};

export default style;
