import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Img from 'react-cool-img';
import style from './style';

export default function PictureCard({
  imgSrc = null,
  videoSrc = null,
  imgAlt,
  title,
  rotation = 0,
}) {
  return (
    <div
      css={css`
        ${style.pictureCard}
        transform: rotate(${rotation}deg);
      `}
    >
      <div css={style.card}>
        <div css={style.pictureContainer}>
          {imgSrc && <Img src={imgSrc} alt={imgAlt} />}
          {videoSrc && (
            <video loop autoPlay="autoplay" muted>
              <source src={videoSrc} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          )}
        </div>
        <h5>{title}</h5>
      </div>
    </div>
  );
}
