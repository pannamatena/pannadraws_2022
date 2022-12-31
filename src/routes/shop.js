import React from 'react';
import ReactPixel from 'react-facebook-pixel';
import { Outlet, useParams } from 'react-router-dom';
import { getDataSource } from '../resources/utils';
import Gallery from '../components/Gallery';
import ArtPageComp from '../components/ArtPage';
import { getAvailableItems, getMerchTypeItems } from '../resources/utils';
import imgDataAnimalArt_2022 from '../resources/pictures/2022/imgData_animalArt_2022';
import imgDataFantasyArt_2022 from '../resources/pictures/2022/imgData_fantasyArt_2022';
import imgDataAnimalArt_2021 from '../resources/pictures/2021/imgData_animalArt_2021';
import imgDataAnimalArt_2020 from '../resources/pictures/2020/imgData_animalArt_2020';
import imgDataFantasyArt_2020 from '../resources/pictures/2020/imgData_fantasyArt_2020';
import imgData_adultColoring_2021 from '../resources/pictures/adult_coloring/imgData_adultColoring_2021';
import imgData_merchandinse from '../resources/pictures/merchandise/imgData_merchandise';

export function OriginalArtShop() {
  let params = useParams();
  const availableOriginals = getAvailableItems(
    Object.assign(
      {},
      imgDataFantasyArt_2022,
      imgDataAnimalArt_2022,
      imgDataAnimalArt_2021,
      imgDataAnimalArt_2020,
      imgDataFantasyArt_2020
    ),
    'original'
  );
  return (
    <>
      {params.imgTitle ? (
        <Outlet />
      ) : (
        <>
          {ReactPixel.pageView()}
          <h1>Original paintings for sale</h1>
          <Gallery
            imgData={availableOriginals}
            imgRoot="shop/originalArtShop"
            itemType="ORIGINAL"
            galleryType="INFOTILES"
          />
        </>
      )}
    </>
  );
}

export function ArtPrintShop() {
  let params = useParams();
  const availablePrints = getAvailableItems(
    Object.assign(
      {},
      imgDataAnimalArt_2022,
      imgDataFantasyArt_2022,
      imgDataAnimalArt_2021,
      imgDataAnimalArt_2020,
      imgDataFantasyArt_2020
    ),
    'prints'
  );
  return (
    <>
      {params.imgTitle ? (
        <Outlet />
      ) : (
        <>
          {ReactPixel.pageView()}
          <h1>Art Prints</h1>
          <Gallery
            imgData={availablePrints}
            imgRoot="shop/artPrintShop"
            itemType="PRINT"
            galleryType="INFOTILES"
          />
        </>
      )}
    </>
  );
}

export function ColouringShop() {
  let params = useParams();
  return (
    <>
      {params.imgTitle ? (
        <Outlet />
      ) : (
        <>
          {ReactPixel.pageView()}
          <h1>Adult colouring pages</h1>
          <Gallery
            imgData={imgData_adultColoring_2021}
            imgRoot="shop/colouringShop"
            itemType="COLOURING"
            galleryType="INFOTILES"
          />
        </>
      )}
    </>
  );
}

export function CardsAndBookmarksShop() {
  let params = useParams();
  const cards = getMerchTypeItems(imgData_merchandinse, 'greeting_cards');
  const bookmarks = getMerchTypeItems(imgData_merchandinse, 'bookmark_set');
  return (
    <>
      {params.imgTitle ? (
        <Outlet />
      ) : (
        <>
          {ReactPixel.pageView()}
          <h1>Cards and Bookmarks</h1>
          <Gallery
            imgData={Object.assign({}, cards, bookmarks)}
            imgRoot="shop/colouringShop"
            itemType="COLOURING"
            galleryType="INFOTILES"
          />
        </>
      )}
    </>
  );
}

export function ClothingShop() {
  let params = useParams();
  const clothing = getMerchTypeItems(imgData_merchandinse, 'clothing');
  return (
    <>
      {params.imgTitle ? (
        <Outlet />
      ) : (
        <>
          {ReactPixel.pageView()}
          <h1>T-shirts and tops</h1>
          <Gallery
            imgData={clothing}
            imgRoot="shop/clothingShop"
            itemType="CLOTHING"
            galleryType="INFOTILES"
          />
        </>
      )}
    </>
  );
}

export function StickersShop() {
  let params = useParams();
  const stickers = getMerchTypeItems(imgData_merchandinse, 'stickers');
  const magnets = getMerchTypeItems(imgData_merchandinse, 'magnets');
  return (
    <>
      {params.imgTitle ? (
        <Outlet />
      ) : (
        <>
          {ReactPixel.pageView()}
          <h1>Stickers and Magnets</h1>
          <Gallery
            imgData={Object.assign({}, stickers, magnets)}
            imgRoot="shop/stickersShop"
            itemType="STICKERS"
            galleryType="INFOTILES"
          />
        </>
      )}
    </>
  );
}

export function NotebooksShop() {
  let params = useParams();
  const notebooks = getMerchTypeItems(imgData_merchandinse, 'notebooks');
  return (
    <>
      {params.imgTitle ? (
        <Outlet />
      ) : (
        <>
          {ReactPixel.pageView()}
          <h1>Notebooks</h1>
          <Gallery
            imgData={notebooks}
            imgRoot="shop/stickersShop"
            itemType="NOTEBOOKS"
            galleryType="INFOTILES"
          />
        </>
      )}
    </>
  );
}

export function ShopPage() {
  {
    ReactPixel.pageView();
  }
  let params = useParams();
  const dataSource = getDataSource(params);
  return <ArtPageComp imgId={params.imgTitle} dataSource={dataSource} />;
}
