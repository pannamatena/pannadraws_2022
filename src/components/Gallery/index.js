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
  itemType,
  galleryType = 'IMAGETILES',
}) {
  const [imgList, setImgList] = useState([]);
  const isInfoType = galleryType === 'INFOTILES';

  useEffect(() => {
    setImgList(createThumbList(imgData));
  }, [imgData]);

  const getPrice = (currentImgData) => {
    switch (itemType) {
      case 'ORIGINAL': {
        return <span css={galleryStyle.priceTag}>€{currentImgData.price}</span>;
      }
      case 'PRINT': {
        return (
          <div>
            <span css={galleryStyle.priceFrom}>From</span>
            <span css={galleryStyle.priceTag}>
              €{currentImgData.printPrice}
            </span>
          </div>
        );
      }
      case 'COLOURING': {
        return (
          <div>
            {currentImgData.digitalPrice && (
              <>
                <span css={galleryStyle.priceFrom}>Downloadable from</span>
                <span css={galleryStyle.priceTag}>
                  €{currentImgData.digitalPrice.toFixed(2)}
                </span>
              </>
            )}
            {currentImgData.printedPrice && (
              <>
                <span css={galleryStyle.priceFrom}>Printed from</span>
                <span css={galleryStyle.priceTag}>
                  €{currentImgData.printedPrice.toFixed(2)}
                </span>
              </>
            )}
          </div>
        );
      }
      default: {
        return null;
      }
    }
  };

  function GalleryTile({
    imageProps: { alt, style, title, ...restImageProps },
  }) {
    const imgId = title.split('-');
    const currentImgData = imgData[imgId[0]];

    const imgUrlAttributes = title.split('-');
    const imgType = imgUrlAttributes[2];
    const imgYear = imgUrlAttributes[1];
    const imgTitle = imgUrlAttributes[0];

    return (
      <Link
        to={`/${imgRoot}/${imgType}/${imgYear}/${imgTitle}`}
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
        {currentImgData.original === 'SOLD' && !isInfoType && (
          <span
            css={css`
              ${galleryStyle.label};
              ${galleryStyle.labelSold}
            `}
          >
            Sold
          </span>
        )}
        {currentImgData.prints === 'AVAILABLE' && !isInfoType && (
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
              {getPrice(currentImgData)}
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
