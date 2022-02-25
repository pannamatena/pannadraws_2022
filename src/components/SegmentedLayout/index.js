import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import style from './style';

export default function SegmentedLayout({
  contentLeft,
  contentRight,
  leftBackground,
  rightBackground,
}) {
  return (
    <div css={style.segmentedLayout}>
      <div
        css={css`
          ${style.leftSide};
          background: ${leftBackground || 'transparent'};
        `}
      >
        <div css={style.leftSideInner}>{contentLeft}</div>
      </div>
      <div
        css={css`
          ${style.rightSide};
          background: ${rightBackground || 'transparent'};
        `}
      >
        <div css={style.rightSideInner}>{contentRight}</div>
      </div>
    </div>
  );
}
