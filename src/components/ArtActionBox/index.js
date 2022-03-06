import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { arrow } from '../../resources/icons';
import style from './style';

function getPriceTag(imgData, mediaType) {
  if (imgData.type === 'adult-colouring') {
    return (
      <span css={style.coloringPriceTag}>
        From
        <span css={style.originalPrice}>
          €
          {mediaType === 'DIGITAL'
            ? imgData.digitalPrice.toFixed(2)
            : imgData.printedPrice.toFixed(2)}
        </span>
      </span>
    );
  }

  return (
    (imgData.original === 'AVAILABLE' || imgData.original !== 'MSG') &&
    imgData.original !== 'SOLD' && (
      <span css={style.originalPrice}>€{imgData.price}</span>
    )
  );
}

function getOriginalActionLink(imgData) {
  if (!imgData.original) {
    return null;
  }

  if (imgData.type === 'adult_colouring') {
    return (
      <>
        {imgData.printedUrl && (
          <>
            <h4>Printed version</h4>
            {getPriceTag(imgData, 'PRINTED')}
            <a
              href={imgData.printedUrl}
              title={`Buy "${imgData.title}" original artwork by PannaDraws`}
              target="_blank"
              rel="noopener noreferrer"
              css={style.mainActionLink}
            >
              Buy it on Etsy
              <span>{arrow()}</span>
            </a>
          </>
        )}
        {imgData.digitalUrl && (
          <>
            <h4>Downloadable version</h4>
            {getPriceTag(imgData, 'DIGITAL')}
            <a
              href={imgData.digitalUrl}
              title={`Buy "${imgData.title}" original artwork by PannaDraws`}
              target="_blank"
              rel="noopener noreferrer"
              css={style.mainActionLink}
            >
              Buy it on Etsy
              <span>{arrow()}</span>
            </a>
          </>
        )}
      </>
    );
  }

  switch (imgData.original) {
    case 'AVAILABLE': {
      return (
        <>
          {getPriceTag(imgData)}
          <a
            href={imgData.buyUrl}
            title={`Buy "${imgData.title}" original artwork by PannaDraws`}
            target="_blank"
            rel="noopener noreferrer"
            css={style.mainActionLink}
          >
            Buy original on Etsy
            <span>{arrow()}</span>
          </a>
        </>
      );
    }
    case 'SOLD': {
      return <p css={style.sold}>Original is sold.</p>;
    }
    default: {
      return (
        <>
          {getPriceTag(imgData)}
          <Link
            css={style.mainActionLink}
            to="/contact/"
            state={{
              msgSubj: `Purchase inquiry: ${imgData.title}, ${imgData.year}`,
            }}
          >
            Message me to buy
          </Link>
        </>
      );
    }
  }
}

function getPrintActionLink(imgData) {
  if (!imgData.prints || imgData.type === 'adult_colouring') {
    return null;
  }

  switch (imgData.prints) {
    case 'AVAILABLE': {
      return (
        <a
          href={imgData.printUrl}
          title={`Buy "${imgData.title}" art prints`}
          target="_blank"
          rel="noopener noreferrer"
          css={style.secondaryActionLink}
        >
          {`Buy prints (from €${imgData.printPrice} + shipping)`}
          <span>{arrow()}</span>
        </a>
      );
    }
    case 'NOTYET': {
      return <p css={style.sold}>Prints are not available.</p>;
    }
    default: {
      return <p css={style.sold}>Prints are no longer available.</p>;
    }
  }
}

function getMerchItems(merchItems) {
  return merchItems.map((item) => {
    return (
      <div css={style.merchItem} key={item.url}>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          title={`${item.name} by PannaDraws on Etsy`}
        >
          {item.name} {arrow()}
        </a>
        <span>(from € {item.price} + shipping)</span>
      </div>
    );
  });
}

function getMerch(imgData) {
  return imgData.merch && imgData.merch.length > 0 ? (
    <div css={style.merchContainer}>{getMerchItems(imgData.merch)}</div>
  ) : null;
}

export default function ArtActionBox({ imgData }) {
  return (
    <div className="artActionBox" css={style.artActionBox}>
      <div css={style.originalContainer}>
        {getOriginalActionLink(imgData)}
        {imgData.ship === 'FREE_IRL' && imgData.original !== 'SOLD' && (
          <span css={style.freeShip}>FREE shipping to Ireland</span>
        )}
      </div>
      {getPrintActionLink(imgData)}
      {getMerch(imgData)}
    </div>
  );
}
