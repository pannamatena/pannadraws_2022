import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import style from './style';

function GalleryItem({ img }) {
  return (
    <div css={style.galleryItem}>
      <h3>{img.title}</h3>
    </div>
  );
}

export default function ListGallery({ imgData }) {
  return (
    <div css={style.listGallery}>
      {Object.keys(imgData).map((imgId) => (
        <GalleryItem
          img={imgData[imgId]}
          key={`${imgData[imgId].title}-${imgData[imgId].year}`}
        />
      ))}
    </div>
  );
}
