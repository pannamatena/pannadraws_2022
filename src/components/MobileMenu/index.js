import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import style from './style';
import { facebook, instagram, close } from '../../resources/icons';
import { breakPoints } from '../../resources/breakpoints';

export default function MobileMenu(props) {
  //const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <div
      css={css`
        ${style.mobileMenuContent};
        display: ${props.isOpen ? 'flex' : 'none'};
        @media ${breakPoints.desktopSmall} {
          display: none;
        }
      `}
    >
      <button css={style.closeBtn} onClick={() => props.onClose()}>
        {close()}
      </button>
      <nav css={style.mainMenu}>
        <ul>
          <li>
            <NavLink to="/art" onClick={() => props.onClose()}>
              Art
            </NavLink>
            {/*<div id="subMenu_art" css={style.subMenu}>
              <NavLink to="/art/animalArt">Birds & Wildlife</NavLink>
              <NavLink to="/art/adultColoring">Adult Colouring</NavLink>
              <NavLink to="/art/fantasyArt">Fantasy Art</NavLink>
            </div>*/}
          </li>
          <li>
            <NavLink to="/shop" onClick={() => props.onClose()}>
              Shop
            </NavLink>
            {/*<div id="subMenu_shop" css={style.subMenu}>
              <NavLink to="/shop/originalArtShop">Original Art</NavLink>
              <NavLink to="/shop/artPrintShop">Art Prints</NavLink>
              <NavLink to="/shop/cardsAndBookmarksShop">
                Cards & Bookmarks
              </NavLink>
              <NavLink to="/shop/clothingShop">Clothing</NavLink>
              <NavLink to="/shop/stickersShop">Stickers</NavLink>
              <NavLink to="/shop/notebooksShop">Notebooks</NavLink>
            </div>*/}
          </li>
          <li>
            <NavLink to="/commissionArt" onClick={() => props.onClose()}>
              Commission Art
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => props.onClose()}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => props.onClose()}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div css={style.socialMenu}>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/pannadraws"
              target="_blank"
              rel="noopener noreferrer"
              title="PannaDraws on Facebook"
            >
              {facebook()}
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pannamatena/"
              target="_blank"
              rel="noopener noreferrer"
              title="PannaDraws on Instagram"
            >
              {instagram()}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
