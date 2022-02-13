import React, { useState, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import Img from 'react-cool-img';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import galleryStyle from './style';
import style from '../ArtActionBox/style';

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
  galleryType = 'IMAGETILES',
}) {
  const [imgList, setImgList] = useState([]);
  const isInfoType = galleryType === 'INFOTILES';

  useEffect(() => {
    setImgList(createThumbList(imgData));
  }, [imgData]);

  function GalleryTile({
    imageProps: { alt, style, title, ...restImageProps },
  }) {
    const imgId = title.split('-');
    const currentImgData = imgData[imgId[0]];
    return (
      <Link
        to={`/${imgRoot}/${title}`}
        state={{ imgData: currentImgData }}
        css={css`
          ${galleryStyle.galleryTile};
          ${isInfoType ? galleryStyle.galleryInfoTile : ''};
          width: ${style?.width};
        `}
      >
        <div className="hoverContainer">
          <h3 css={galleryStyle.hoverContainerImgTitle}>
            {currentImgData.title}
          </h3>
          <p>{currentImgData.description}</p>
          <p css={galleryStyle.clickForMore}>Click for more info</p>
        </div>
        {currentImgData.original === 'SOLD' && (
          <span
            css={css`
              ${galleryStyle.label};
              ${galleryStyle.labelSold}
            `}
          >
            Sold
          </span>
        )}
        {currentImgData.prints === 'AVAILABLE' && (
          <span
            css={css`
              ${galleryStyle.label};
              ${galleryStyle.labelPrintsAvailable}
            `}
          >
            Prints Available!
          </span>
        )}
        {currentImgData.ship === 'FREE_IRL' &&
          currentImgData.original !== 'SOLD' && (
            <span
              css={css`
                ${galleryStyle.label};
                ${galleryStyle.labelFreeShipROI}
              `}
            >
              FREE shipping to Ireland!
            </span>
          )}
        <Img
          lazy
          cache
          alt={alt}
          {...restImageProps}
          style={{ ...style, width: '100%', padding: 0 }}
        />
        {isInfoType && (
          <div css={galleryStyle.imgInfoBox}>
            <div css={galleryStyle.priceLine}>
              <span css={galleryStyle.priceTag}>€{currentImgData.price}</span>
              <span css={galleryStyle.clickForMore}>Click for more info</span>
            </div>
          </div>
        )}
      </Link>
    );
  }

  return (
    <div css={galleryStyle.galleryContainer}>
      <PhotoAlbum
        layout="rows"
        photos={imgList}
        renderPhoto={GalleryTile}
        padding={isInfoType ? 10 : 0}
        spacing={isInfoType ? 5 : 3}
        targetRowHeight={500}
      />
    </div>
  );
}
