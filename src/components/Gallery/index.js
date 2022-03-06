import React, { useState, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import galleryStyle from './style';

import GalleryTile from './GalleryTile';

const createThumbList = (imgMap) => {
  return Object.keys(imgMap).map((img) => ({
    src: imgMap[img].imgs.thumb.src,
    alt: `${imgMap[img].title} - ${imgMap[img].description}`,
    width: imgMap[img].imgs.thumb.width,
    height: imgMap[img].imgs.thumb.height,
    title: `${img}-${imgMap[img].year}-${imgMap[img].type}`,
  }));
};

export default function Gallery({
  imgData,
  imgRoot,
  itemType,
  galleryType = 'IMAGETILES',
}) {
  const [imgList, setImgList] = useState([]);
  const isInfoType = galleryType === 'INFOTILES';

  useEffect(() => {
    setImgList(createThumbList(imgData));
  }, [imgData]);

  return (
    <div css={galleryStyle.galleryContainer}>
      <PhotoAlbum
        layout="rows"
        photos={imgList}
        renderPhoto={(allProps) => (
          <GalleryTile
            imgData={imgData}
            imgRoot={imgRoot}
            itemType={itemType}
            isInfoType={isInfoType}
            allProps={allProps}
          />
        )}
        padding={isInfoType ? 10 : 0}
        spacing={isInfoType ? 5 : 3}
        targetRowHeight={500}
      />
    </div>
  );
}
