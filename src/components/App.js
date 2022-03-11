import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import Layout from './Layout';
import { Home } from '../roots/home';
import { About } from '../roots/about';
import { Contact } from '../roots/contact';
import { PrivacyPolicy } from '../roots/privacyPolicy';
import { ReturnPolicy } from '../roots/returnPolicy';
import { FormSuccess, FormError } from '../roots/formResponses';
import { NoMatch } from '../roots/noMatch';
import { CommissionArt } from '../roots/commissionArt';
import { AnimalArt, ArtPage, AdultColoring, FantasyArt } from '../roots/art';
import {
  OriginalArtShop,
  ArtPrintShop,
  ColouringShop,
  CardsAndBookmarksShop,
  ClothingShop,
  StickersShop,
  NotebooksShop,
  ShopPage,
} from '../roots/shop';

export default function App() {
  const advancedMatching = { em: '' };
  const options = {
    autoConfig: true,
    debug: false,
  };
  ReactPixel.init('3024697907551904', advancedMatching, options);
  return (
    <BrowserRouter>
      {ReactGA.initialize('UA-222723169-1', {
        debug: true,
        titleCase: false,
      })}
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="art">
              <Route index element={<NoMatch />} />
              <Route path="animalArt" element={<AnimalArt />}>
                <Route
                  path=":imgType/:imgYear/:imgTitle"
                  element={<ArtPage />}
                />
              </Route>
              <Route path="adultColoring" element={<AdultColoring />} />
              <Route path="fantasyArt" element={<FantasyArt />}>
                <Route
                  path=":imgType/:imgYear/:imgTitle"
                  element={<ArtPage />}
                />
              </Route>
              <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="commissionArt" element={<CommissionArt />} />
            <Route path="shop">
              <Route index element={<NoMatch />} />
              <Route path="originalArtShop" element={<OriginalArtShop />}>
                <Route
                  path=":imgType/:imgYear/:imgTitle"
                  element={<ShopPage />}
                />
              </Route>
              <Route path="artPrintShop" element={<ArtPrintShop />}>
                <Route
                  path=":imgType/:imgYear/:imgTitle"
                  element={<ShopPage />}
                />
              </Route>
              <Route path="colouringShop" element={<ColouringShop />}>
                <Route
                  path=":imgType/:imgYear/:imgTitle"
                  element={<ShopPage />}
                />
              </Route>
              <Route
                path="cardsAndBookmarksShop"
                element={<CardsAndBookmarksShop />}
              >
                <Route
                  path=":imgType/:imgYear/:imgTitle"
                  element={<ShopPage />}
                />
              </Route>
              <Route path="clothingShop" element={<ClothingShop />}>
                <Route
                  path=":imgType/:imgYear/:imgTitle"
                  element={<ShopPage />}
                />
              </Route>
              <Route path="stickersShop" element={<StickersShop />}>
                <Route
                  path=":imgType/:imgYear/:imgTitle"
                  element={<ShopPage />}
                />
              </Route>
              <Route path="notebooksShop" element={<NotebooksShop />}>
                <Route
                  path=":imgType/:imgYear/:imgTitle"
                  element={<ShopPage />}
                />
              </Route>
              <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="return_policy" element={<ReturnPolicy />} />
            <Route path="privacy_policy" element={<PrivacyPolicy />} />
            <Route path="form_success" element={<FormSuccess />} />
            <Route path="form_error" element={<FormError />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
