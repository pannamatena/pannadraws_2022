import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import style from './style';

export default function BouncyText({ text }) {
  return (
    <div css={style.bouncyText}>
      <div css={style.bubble}>
        <span>{text}</span>
      </div>
    </div>
  );
}
