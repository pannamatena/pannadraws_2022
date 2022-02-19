import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Img from 'react-cool-img';
import style from './style';
import MainImg from '../../resources/images/pannadraws_website_main_img.jpg';

export default function Banner() {
  return (
    <div css={style.container}>
      <Img
        src={MainImg}
        alt="Dragon and unicorn under cherry blossoms - ink drawing by PannaDraws"
      />
      <div css={style.headlineContainer}>
        <div css={style.headlineContainerInner}>
          <h2 className="headline headline--first">Irish wilderness.</h2>
          <h2 className="headline headline--second">Magical creatures.</h2>
          <h2 className="headline headline--third">enchanted watercolour.</h2>
          <span>the art of Panna Zsamba</span>
        </div>
      </div>
    </div>
  );
}
