import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import style from './style';

export default function PageSection({ children, background, flushBottom }) {
  return (
    <div
      css={css`
        ${style.outer};
        ${flushBottom && style.outerFlushBottom};
        background: ${background || 'transparent'};
      `}
    >
      <div css={style.inner}>
        {children}
      </div>
    </div>
  );
}