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
            <NavLink className="subMenuLink" to="/art/animalArt">
              Birds & Wildlife
            </NavLink>
            <NavLink className="subMenuLink" to="/art/adultColoring">
              Adult Colouring
            </NavLink>
            <NavLink className="subMenuLink" to="/art/fantasyArt">
              Fantasy Art
            </NavLink>
          </div>
        </li>
        <li>
          <span className="fakeLink">Shop</span>
          <div css={style.subMenu}>
            <NavLink className="subMenuLink" to="/shop/originalArtShop">
              Original Art
            </NavLink>
            <NavLink className="subMenuLink" to="/shop/artPrintShop">
              Art Prints
            </NavLink>
            <NavLink className="subMenuLink" to="/shop/colouringShop">
              Coloring Pages
            </NavLink>
            <NavLink className="subMenuLink" to="/shop/cardsAndBookmarksShop">
              Cards & Bookmarks
            </NavLink>
            <NavLink className="subMenuLink" to="/shop/clothingShop">
              Clothing
            </NavLink>
            <NavLink className="subMenuLink" to="/shop/stickersShop">
              Stickers
            </NavLink>
            <NavLink className="subMenuLink" to="/shop/notebooksShop">
              Notebooks
            </NavLink>
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
