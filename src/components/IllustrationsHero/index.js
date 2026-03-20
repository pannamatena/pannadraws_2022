import React from 'react';
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import style from './style';

export default function IllustrationsHero() {
  return (
    <div css={style.hero}>
      <div css={style.imageSide}>
        <span css={style.imageLabel}>Featured book illustration</span>
      </div>
      <div css={style.contentSide}>
        <h4>Book & Story illustration</h4>
        <h1 css={style.heading}>
          Your story,
        <span css={style.headingAccent}>painted.</span>
        </h1>
        <p css={style.body}>
          Watercolour fantasy illustrations for authors, publishers and storytellers who want art that feels like it was pulled from the pages.
        </p>
        <div css={style.buttons}>
          <Link css={style.btnPrimary} to="/contact">
            Get in touch
          </Link>
          <Link css={style.btnSecondary} to="/commissionArt">
            See my work
          </Link>
        </div>
      </div>
    </div>
  );
}
