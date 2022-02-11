import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Img from 'react-cool-img';
import style from './style';
import ArtActionBox from '../ArtActionBox';

function createMarkup(story) {
  return { __html: story };
}

function GalleryItem({ img }) {
  return (
    <div css={style.galleryItem}>
      <div css={style.imgContainer}>
        <Img
          lazy
          cache
          alt={`${img.title}. ${img.description}`}
          src={img.imgs.thumb.src}
        />
      </div>
      <div css={style.itemDataContainer}>
        <h3>{img.title}</h3>
        <span css={style.year}>{img.year}</span>
        <p>{img.description}</p>
        <p dangerouslySetInnerHTML={createMarkup(img.story)} />
        <ArtActionBox imgData={img} />
      </div>
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
