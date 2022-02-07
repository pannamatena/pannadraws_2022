import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { arrow } from '../../resources/icons';
import style from './style';

function getOriginalActionLink(imgData) {
  if (!imgData.original) {
    return null;
  }

  switch (imgData.original) {
    case 'AVAILABLE': {
      return (
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
      );
    }
    default: {
      return <p css={style.sold}>Original is sold.</p>;
    }
  }
}

function getPrintActionLink(imgData) {
  if (!imgData.prints) {
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

export default function ArtActionBox({ imgData }) {
  return (
    <div className="artActionBox" css={style.artActionBox}>
      <div css={style.originalContainer}>
        {(imgData.original === 'AVAILABLE' || imgData.original !== 'MSG') &&
          imgData.original !== 'SOLD' && (
            <span css={style.originalPrice}>€{imgData.price}</span>
          )}
        {getOriginalActionLink(imgData)}
        {imgData.ship === 'FREE_IRL' && imgData.original !== 'SOLD' && (
          <span css={style.freeShip}>FREE shipping to Ireland</span>
        )}
      </div>
      {getPrintActionLink(imgData)}
    </div>
  );
}
