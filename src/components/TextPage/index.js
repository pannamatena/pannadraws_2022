import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import style from './style';

export default function TextPage(props) {
  return (
    <div className="textPage" css={style.layout}>
      {props.children}
    </div>
  );
}
