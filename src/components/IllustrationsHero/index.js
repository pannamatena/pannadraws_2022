import React from 'react';
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import Img from 'react-cool-img';
import style from './style';
import HeroImage from '../../resources/pictures/2024/the_dragon_meets_the_stag_2024_web.jpg';

export default function IllustrationsHero() {
  return (
    <div css={style.hero}>
      <div css={style.imageSide}>
        <Img
          lazy
          cache
          src={HeroImage}
          alt="The Dragon Meets the Stag — fantasy watercolour illustration by PannaDraws"
        />
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
          <a css={style.btnPrimary} href="#contact_form">
            Commission a piece
          </a>
          <Link css={style.btnSecondary} to="/art/fantasyArt">
            See examples
          </Link>
        </div>
      </div>
    </div>
  );
}
