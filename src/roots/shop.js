import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import ArtPageComp from '../components/ArtPage';
import { getAvailableItems, getMerchTypeItems } from '../resources/utils';
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
  const cards = getMerchTypeItems(imgData_merchandinse, 'greeting-cards');
  const bookmarks = getMerchTypeItems(imgData_merchandinse, 'bookmark-set');
  const magnets = getMerchTypeItems(imgData_merchandinse, 'magnets');
  return (
    <>
      {params.imgTitle ? (
        <Outlet />
      ) : (
        <>
          <h1>Cards and Bookmarks</h1>
          <Gallery
            imgData={Object.assign({}, cards, bookmarks, magnets)}
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
  return (
    <div>
      <h2>Clothing</h2>
    </div>
  );
}

export function StickersShop() {
  return (
    <div>
      <h2>Stickers and Magnets</h2>
    </div>
  );
}

export function NotebooksShop() {
  return (
    <div>
      <h2>Notebooks</h2>
    </div>
  );
}

export function ShopPage() {
  let params = useParams();
  return <ArtPageComp imgTitle={params.imgTitle} />;
}
