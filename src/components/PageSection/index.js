import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import style from './style';

export default function PageSection({ children, background, flushBottom, id }) {
  return (
    <div
      id={id}
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