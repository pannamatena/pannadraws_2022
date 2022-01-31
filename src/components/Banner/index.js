import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Img from 'react-cool-img';
import style from './style';
import MainImg from '../../resources/images/pannadraws_main_test.jpg';

export default function Banner() {
  return (
    <div css={style.container}>
      <Img
        src={MainImg}
        alt="Dragon and unicorn under cherry blossoms - ink drawing by PannaDraws"
      />
      <h2>Fantasy and Animal Fine Art</h2>
    </div>
  );
}
