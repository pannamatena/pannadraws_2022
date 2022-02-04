import React, { useState, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import Img from 'react-cool-img';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const createThumbList = (imgMap) => {
  return Object.keys(imgMap).map((img) => ({
    src: imgMap[img].imgs.thumb.src,
    alt: `${imgMap[img].title} - ${imgMap[img].description}`,
    width: imgMap[img].imgs.thumb.width,
    height: imgMap[img].imgs.thumb.height,
  }));
};

function GalleryTile({ imageProps: { alt, style, ...restImageProps } }) {
  return <Img lazy cache alt={alt} {...restImageProps} style={{ ...style }} />;
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
