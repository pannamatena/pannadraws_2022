import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import { arrow } from '../../resources/icons';
import { formatPrice } from '../../resources/utils';
import style from './style';

function getPriceTag(imgData, mediaType) {
  if (imgData.type === 'adult_colouring') {
    return (
      <span css={style.coloringPriceTag}>
        From
        <span css={style.originalPrice}>
          €
          {mediaType === 'DIGITAL'
            ? formatPrice(imgData.digitalPrice)
            : formatPrice(imgData.printedPrice)}
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
              onClick={() => {
                ReactPixel.trackCustom('BuyOnEtsyClick', {
                  artwork: `${imgData.title}, ${imgData.year}`,
                });
                ReactGA.event({
                  category: 'ArtActionBox',
                  action: 'Clicked Buy on Etsy',
                  label: `${imgData.title}, ${imgData.year}`,
                });
              }}
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
              onClick={() => {
                ReactPixel.trackCustom('BuyOnEtsyClick', {
                  artwork: `${imgData.title}, ${imgData.year}`,
                });
                ReactGA.event({
                  category: 'ArtActionBox',
                  action: 'Clicked Buy on Etsy',
                  label: `${imgData.title}, ${imgData.year}`,
                });
              }}
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
            onClick={() => {
              ReactPixel.trackCustom('BuyOnEtsyClick', {
                artwork: `${imgData.title}, ${imgData.year}`,
              });
              ReactGA.event({
                category: 'ArtActionBox',
                action: 'Clicked Buy on Etsy',
                label: `${imgData.title}, ${imgData.year}`,
              });
            }}
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
            onClick={() => {
              ReactPixel.trackCustom('ContactClick', {
                source: 'BuyArtworkInquiry',
              });
              ReactGA.event({
                category: 'ArtActionBox',
                action: 'Clicked Message me',
                label: `${imgData.title}, ${imgData.year}`,
              });
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
          onClick={() => {
            ReactPixel.trackCustom('BuyPrintsClick', {
              artwork: `${imgData.title}, ${imgData.year}`,
            });
            ReactGA.event({
              category: 'ArtActionBox',
              action: 'Clicked Buy Print',
              label: `${imgData.title}, ${imgData.year}`,
            });
          }}
        >
          {`Buy prints (from €${formatPrice(imgData.printPrice)} + shipping)`}
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
          onClick={() => {
            ReactPixel.trackCustom('BuyMerchClick', {
              artwork: `${item.title}, ${item.year}`,
            });
            ReactGA.event({
              category: 'ArtActionBox',
              action: 'Clicked Buy Merch',
              label: `${item.title}, ${item.year}`,
            });
          }}
        >
          {item.name} {arrow()}
        </a>
        <span>
          (from € {formatPrice(item.price)}
          {!item.digital && ' + shipping'})
        </span>
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
