import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import ArtPageComp from '../components/ArtPage';
import { getAvailableItems } from '../resources/utils';
import imgDataAnimalArt_2021 from '../resources/pictures/2021/imgData_animalArt_2021';
import imgDataAnimalArt_2020 from '../resources/pictures/2020/imgData_animalArt_2020';
import imgDataFantasyArt_2020 from '../resources/pictures/2020/imgData_fantasyArt_2020';
import imgData_adultColoring_2021 from '../resources/pictures/adult_coloring/imgData_adultColoring_2021';

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
            galleryType="INFOTILES"
          />
        </>
      )}
    </>
  );
}

export function ArtPrintShop() {
  return (
    <div>
      <h2>Art Prints for sale</h2>
    </div>
  );
}

export function CardsAndBookmarksShop() {
  return (
    <div>
      <h2>Cards and Bookmarks</h2>
    </div>
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
