import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { fonts } from '../../resources/fonts';

const style = {
  artGrid: css`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 50px;
  `,
  artGridItem: css`
    margin: 10px;
    padding: 10px;
    background: ${colours.c5};
  `,
  artGridImg: css`
    display: block;
    width: 100%;
    border: 2px solid transparent;
    transition: border-color 0.3s ease-out;

    &:hover {
      cursor: pointer;
      border-color: ${colours.c1};
    }

    img {
      width: 100%;
    }
  `,
  artGridMeta: css`
    padding: 10px 0;

    h5 {
      font-size: 1.2em;
      font-family: ${fonts.f1};
      text-transform: uppercase;
    }
  `,
  artGridMetaDesc: css`
    font-size: 0.9em;
  `,
};

export default style;
