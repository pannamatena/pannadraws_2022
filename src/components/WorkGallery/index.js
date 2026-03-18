import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import style from './style';

export default function WorkGallery() {
  return (
    <div>
      <h3>Previous Work</h3>
      <div css={style.grid}>
        <div css={css`${style.placeholder}; ${style.placeholderLarge};`}>
          <span css={style.label}>Large feature piece</span>
        </div>
        <div css={css`${style.placeholder}; ${style.placeholderDetail};`}>
          <span css={style.label}>Detail</span>
        </div>
        <div css={css`${style.placeholder}; ${style.placeholderDetail};`}>
          <span css={style.label}>Detail</span>
        </div>
        <div css={css`${style.placeholder}; ${style.placeholderWide};`}>
          <span css={style.label}>Wide panoramic</span>
        </div>
      </div>
    </div>
  );
}
