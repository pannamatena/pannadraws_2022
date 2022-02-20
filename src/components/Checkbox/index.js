import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colours } from '../../resources/colors';
import { check } from '../../resources/icons';

const Checkbox = ({ checked, ...props }) => {
  const style = {
    checkboxContainer: css`
      display: inline-block;
    `,
    hiddenCheckbox: css`
      border: 0;
      clip: rect(0 0 0 0);
      clippath: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;

      &:focus + & {
        border-color: ${colours.c1};
      }
    `,
    styledCheckbox: css`
      display: inline-block;
      border-bottom: 3px solid transparent;
      width: 30px;
      height: 30px;
      background: ${colours.c2};
      transition: all 0.3s ease-out;
      position: relative;

      &:hover {
        cursor: pointer;
      }

      svg {
        fill: ${checked ? colours.c1 : colours.c2};
        width: 25px;
        height: 25px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `,
  };

  return (
    <div css={style.checkboxContainer}>
      <input
        type="checkbox"
        css={style.hiddenCheckbox}
        checked={checked}
        {...props}
        required
      />
      <div css={style.styledCheckbox} checked={checked}>
        {check()}
      </div>
    </div>
  );
};

export default Checkbox;
