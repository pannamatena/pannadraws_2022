import React from 'react';
import { useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Img from 'react-cool-img';
import style from './style';
import ArtActionBox from '../ArtActionBox';

function createMarkup(story) {
  return { __html: story };
}

export default function ArtPage({ imgId, dataSource }) {
  let navigate = useNavigate();

  console.log(dataSource);
  console.log(imgId);
  const imgData = dataSource[imgId];

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
          <span css={style.year}>{imgData.year}</span>
          <p>{imgData.description}</p>
          <p dangerouslySetInnerHTML={createMarkup(imgData.story)} />
          <ArtActionBox imgData={imgData} />
        </div>
      </div>
    </div>
  );
}
