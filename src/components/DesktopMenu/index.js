import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import style from './style';

export default function DesktopMenu() {
  return (
    <nav css={style.mainMenu}>
      <ul>
        <li>
          <span className="fakeLink">Art</span>
          <div css={style.subMenu}>
            <NavLink to="/art/animalArt">Birds & Wildlife</NavLink>
            <NavLink to="/art/adultColoring">Adult Colouring</NavLink>
            <NavLink to="/art/fantasyArt">Fantasy Art</NavLink>
          </div>
        </li>
        <li>
          <span className="fakeLink">Shop</span>
          <div css={style.subMenu}>
            <NavLink to="/shop/originalArtShop">Original Art</NavLink>
            <NavLink to="/shop/artPrintShop">Art Prints</NavLink>
            <NavLink to="/shop/cardsAndBookmarksShop">
              Cards & Bookmarks
            </NavLink>
            <NavLink to="/shop/clothingShop">Clothing</NavLink>
            <NavLink to="/shop/stickersShop">Stickers</NavLink>
            <NavLink to="/shop/notebooksShop">Notebooks</NavLink>
          </div>
        </li>
        <li>
          <NavLink to="/commissionArt">Commission Art</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
