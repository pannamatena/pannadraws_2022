import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Img from 'react-cool-img';
import style from './style';

export default function ArtPage(props) {
  let navigate = useNavigate();
  let location = useLocation();

  const imgData = location.state.imgData;

  return (
    <div css={style.layout}>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>This is {props.imgTitle}</h2>
      <Img
        lazy
        cache
        alt={`${imgData.title}. ${imgData.description}`}
        src={imgData.imgs.full.src}
      />
    </div>
  );
}
