import React from 'react';
/** @jsxImportSource @emotion/react */
import style from './style';

export default function ServicesStrip({ items }) {
  return (
    <div css={style.strip}>
      {items.map((item) => (
        <div key={item.heading} css={style.item}>
          <p css={style.itemHeading}>{item.heading}</p>
          <p css={style.itemText}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
