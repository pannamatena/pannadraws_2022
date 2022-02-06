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
    <div className="artPage">
      <button css={style.backBtn} onClick={() => navigate(-1)}>
        Back
      </button>
      <div css={style.layout}>
        <div css={style.imgContainer}>
          <Img
            lazy
            cache
            alt={`${imgData.title}. ${imgData.description}`}
            src={imgData.imgs.full.src}
          />
        </div>
        <div css={style.imgDataContainer}>
          <h1>{imgData.title}</h1>
        </div>
      </div>
    </div>
  );
}
