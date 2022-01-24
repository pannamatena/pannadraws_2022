import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { Home } from '../roots/home';
import { About } from '../roots/about';
import { Contact } from '../roots/contact';
import { NoMatch } from '../roots/noMatch';
import { CommissionArt } from '../roots/commissionArt';
import { Art, AnimalArt, AdultColoring, FantasyArt } from '../roots/art';
import {
  Shop,
  OriginalArtShop,
  ArtPrintShop,
  CardsAndBookmarksShop,
  ClothingShop,
  StickersShop,
  NotebooksShop,
} from '../roots/shop';

export default function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="art" element={<Art />}>
              <Route path="animalArt" element={<AnimalArt />} />
              <Route path="adultColoring" element={<AdultColoring />} />
              <Route path="fantasyArt" element={<FantasyArt />} />
            </Route>
            <Route path="commissionArt" element={<CommissionArt />} />
            <Route path="shop" element={<Shop />}>
              <Route path="originalArtShop" element={<OriginalArtShop />} />
              <Route path="artPrintShop" element={<ArtPrintShop />} />
              <Route
                path="cardsAndBookmarksShop"
                element={<CardsAndBookmarksShop />}
              />
              <Route path="clothingShop" element={<ClothingShop />} />
              <Route path="stickersShop" element={<StickersShop />} />
              <Route path="notebooksShop" element={<NotebooksShop />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
