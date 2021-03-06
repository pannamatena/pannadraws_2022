import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import Img from 'react-cool-img';
import { Link } from 'react-router-dom';
import galleryStyle from '../style';
import { arrow } from '../../../resources/icons';
import { formatPrice } from '../../../resources/utils';

const getPrice = (currentImgData, itemType) => {
  switch (itemType) {
    case 'ORIGINAL': {
      return <span css={galleryStyle.priceTag}>€{currentImgData.price}</span>;
    }
    case 'PRINT': {
      return (
        <div>
          <span css={galleryStyle.priceFrom}>From</span>
          <span css={galleryStyle.priceTag}>€{currentImgData.printPrice}</span>
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
                €{formatPrice(currentImgData.digitalPrice)}
              </span>
            </>
          )}
          {currentImgData.printedPrice && (
            <>
              <span css={galleryStyle.priceFrom}>Printed from</span>
              <span css={galleryStyle.priceTag}>
                €{formatPrice(currentImgData.printedPrice)}
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

export default function GalleryTile({
  imgData,
  imgRoot,
  itemType,
  isInfoType,
  allProps,
}) {
  const { alt, style, title, ...restImageProps } = allProps.imageProps;
  const imgId = title.split('-');
  const currentImgData = imgData[imgId[0]];

  const imgUrlAttributes = title.split('-');
  const imgType = imgUrlAttributes[2];
  const imgYear = imgUrlAttributes[1];
  const imgTitle = imgUrlAttributes[0];

  return imgType === 'merchandise' ? (
    <div
      className="merchandiseTile"
      css={css`
        ${galleryStyle.galleryTile};
        ${isInfoType ? galleryStyle.galleryInfoTile : ''};
        width: ${style?.width};
      `}
    >
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
        <div className="merchInfoBox" css={galleryStyle.imgInfoBox}>
          <span css={galleryStyle.merchPriceTag}>
            From{' '}
            <span css={galleryStyle.merchPrice}>
              €{formatPrice(currentImgData.price)}
            </span>
          </span>
          <a
            href={currentImgData.buyUrl}
            title={`Buy "${currentImgData.title}" by PannaDraws`}
            target="_blank"
            rel="noopener noreferrer"
            css={galleryStyle.mainActionLink}
            onClick={() => {
              ReactPixel.trackCustom('BuyOnEtsyClick', {
                artwork: `${currentImgData.title}, ${currentImgData.year}`,
              });
              ReactGA.event({
                category: 'GalleryTile',
                action: 'Clicked Buy on Etsy',
              });
            }}
          >
            Buy on Etsy
            <span>{arrow()}</span>
          </a>
        </div>
      )}
    </div>
  ) : (
    <Link
      to={`/${imgRoot}/${imgType}/${imgYear}/${imgTitle}`}
      css={css`
        ${galleryStyle.galleryTile};
        ${isInfoType ? galleryStyle.galleryInfoTile : ''};
        width: ${style?.width};
      `}
      onClick={() => {
        ReactPixel.trackCustom('GalleryTileClick', {
          artworkURL: `/${imgRoot}/${imgType}/${imgYear}/${imgTitle}`,
        });
        ReactGA.event({
          category: 'GalleryTile',
          action: 'Clicked the tile',
        });
      }}
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
            {getPrice(currentImgData, itemType)}
            <span css={galleryStyle.clickForMore}>Click for more info</span>
          </div>
        </div>
      )}
    </Link>
  );
}
