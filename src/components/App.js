import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { Home } from '../roots/home';
import { About } from '../roots/about';
import { Contact } from '../roots/contact';
import { PrivacyPolicy } from '../roots/privacyPolicy';
import { ReturnPolicy } from '../roots/returnPolicy';
import { NoMatch } from '../roots/noMatch';
import { CommissionArt } from '../roots/commissionArt';
import { AnimalArt, ArtPage, AdultColoring, FantasyArt } from '../roots/art';
import {
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
            <Route path="art">
              <Route index element={<NoMatch />} />
              <Route path="animalArt" element={<AnimalArt />}>
                <Route path=":imgTitle" element={<ArtPage />} />
              </Route>
              <Route path="adultColoring" element={<AdultColoring />} />
              <Route path="fantasyArt" element={<FantasyArt />}>
                <Route path=":imgTitle" element={<ArtPage />} />
              </Route>
              <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="commissionArt" element={<CommissionArt />} />
            <Route path="shop">
              <Route index element={<NoMatch />} />
              <Route path="originalArtShop" element={<OriginalArtShop />}>
                <Route path=":imgTitle" element={<ArtPage />} />
              </Route>
              <Route path="artPrintShop" element={<ArtPrintShop />} />
              <Route
                path="cardsAndBookmarksShop"
                element={<CardsAndBookmarksShop />}
              />
              <Route path="clothingShop" element={<ClothingShop />} />
              <Route path="stickersShop" element={<StickersShop />} />
              <Route path="notebooksShop" element={<NotebooksShop />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="return_policy" element={<ReturnPolicy />} />
            <Route path="privacy_policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
