import React, { useState, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import Img from 'react-cool-img';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import galleryStyle from './style';

const createThumbList = (imgMap) => {
  return Object.keys(imgMap).map((img) => ({
    src: imgMap[img].imgs.thumb.src,
    alt: `${imgMap[img].title} - ${imgMap[img].description}`,
    width: imgMap[img].imgs.thumb.width,
    height: imgMap[img].imgs.thumb.height,
    title: `${img}-${imgMap[img].year}-${imgMap[img].type}`,
  }));
};

function GalleryTile({ imageProps: { alt, style, title, ...restImageProps } }) {
  return (
    <Link
      to={`/art/animalArt/${title}`}
      css={css`
        ${galleryStyle.galleryTile};
        width: ${style?.width};
      `}
    >
      <Img
        lazy
        cache
        alt={alt}
        {...restImageProps}
        style={{ ...style, width: '100%', padding: 0 }}
      />
    </Link>
  );
}

export default function Gallery(props) {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    setImgList(createThumbList(props.imgData));
  }, [props.imgData]);

  return (
    <PhotoAlbum
      layout="rows"
      photos={imgList}
      renderPhoto={GalleryTile}
      padding={0}
      spacing={3}
      targetRowHeight={500}
    />
  );
}
