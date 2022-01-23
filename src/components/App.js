import * as React from 'react';
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import Layout from './Layout';

export default function App() {
  return (
    <BrowserRouter>
      <div>
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
              <Route path="cardsAndBookmarksShop" element={<CardsAndBookmarksShop />} />
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
};

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Art() {
  return (
    <div>
      <h2>Art</h2>
      <div>
        <Link to="animalArt">All Birds & Wildlife Art</Link>
        <Link to="adultColoring">Adult Colouring</Link>
        <Link to="fantasyArt">Fantasy Art</Link>
      </div>
      <div><Outlet /></div>
    </div>
  );
}

function CommissionArt() {
  return (
    <div>
      <h2>Commission Art</h2>
    </div>
  );
}

function Shop() {
  return (
    <div>
      <h2>Shop</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

// Submenus

function AnimalArt() {
  return (
    <div>
      <h2>All Birds & Wildlife Art</h2>

      {/*<Link to="/irish_raptors/">Irish Raptors</Link>
      <Link to="/feathers_of_tales/">Feathers of Tales</Link>*/}
    </div>
  );
}

function AdultColoring() {
  return (
    <div>
      <h2>Adult Colouring</h2>
    </div>
  );
}

function FantasyArt() {
  return (
    <div>
      <h2>Fantasy Art</h2>
    </div>
  );
}

function OriginalArtShop() {
  return (
    <div>
      <h2>Original Art for sale</h2>
    </div>
  );
}

function ArtPrintShop() {
  return (
    <div>
      <h2>Art Prints for sale</h2>
    </div>
  );
}

function CardsAndBookmarksShop() {
  return (
    <div>
      <h2>Cards and Bookmarks</h2>
    </div>
  );
}

function ClothingShop() {
  return (
    <div>
      <h2>Clothing</h2>
    </div>
  );
}

function StickersShop() {
  return (
    <div>
      <h2>Stickers and Magnets</h2>
    </div>
  );
}

function NotebooksShop() {
  return (
    <div>
      <h2>Notebooks</h2>
    </div>
  );
}
