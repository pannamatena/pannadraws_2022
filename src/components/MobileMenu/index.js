import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import style from './style';
import { facebook, instagram, close } from '../../resources/icons';
import { breakPoints } from '../../resources/breakpoints';

export default function MobileMenu(props) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const triggerSubmenu = (subMenuId) => {
    if (openSubmenu === subMenuId) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(subMenuId);
    }
  };

  return (
    <div
      css={css`
        ${style.mobileMenuContent};
        width: ${props.isOpen ? '100vw' : '0'};
        height: ${props.isOpen ? '100vh' : '0'};
        padding: ${props.isOpen ? '10px' : '0'};
        @media ${breakPoints.tabletPortrait} {
          padding: ${props.isOpen ? '15px' : '0'};
        }
        @media ${breakPoints.desktopSmall} {
          display: none;
        }
      `}
    >
      <div css={style.mobileMenuScrollContainer}>
        <button
          css={css`
            ${style.closeBtn};
            width: ${props.isOpen ? '30px' : '0'};
            height: ${props.isOpen ? '25px' : '0'};
          `}
          onClick={() => props.onClose()}
        >
          {close()}
        </button>
        <nav css={style.mainMenu}>
          <ul>
            <li>
              <span
                className="fakeLink"
                onClick={() => triggerSubmenu('subMenu_art')}
              >
                Art
              </span>
              <div
                id="subMenu_art"
                css={css`
                  ${style.subMenu};
                  padding-top: ${openSubmenu === 'subMenu_art' ? '5px' : '0'};
                  height: ${openSubmenu === 'subMenu_art' ? '110px' : '0'};
                  @media ${breakPoints.tabletPortrait} {
                    height: ${openSubmenu === 'subMenu_art' ? '130px' : '0'};
                  }
                `}
                onClick={() => props.onClose()}
              >
                <NavLink to="/art/animalArt" onClick={() => props.onClose()}>
                  Birds & Wildlife
                </NavLink>
                <NavLink
                  to="/art/adultColoring"
                  onClick={() => props.onClose()}
                >
                  Adult Colouring
                </NavLink>
                <NavLink to="/art/fantasyArt" onClick={() => props.onClose()}>
                  Fantasy Art
                </NavLink>
              </div>
            </li>
            <li>
              <span
                className="fakeLink"
                onClick={() => triggerSubmenu('subMenu_shop')}
              >
                Shop
              </span>
              <div
                id="subMenu_shop"
                css={css`
                  ${style.subMenu};
                  padding-top: ${openSubmenu === 'subMenu_shop' ? '5px' : '0'};
                  height: ${openSubmenu === 'subMenu_shop' ? '203px' : '0'};
                  @media ${breakPoints.tabletPortrait} {
                    height: ${openSubmenu === 'subMenu_shop' ? '245px' : '0'};
                  }
                `}
              >
                <NavLink to="/shop/originalArtShop">Original Art</NavLink>
                <NavLink to="/shop/artPrintShop">Art Prints</NavLink>
                <NavLink to="/shop/colouringShop">Colouring Pages</NavLink>
                <NavLink to="/shop/cardsAndBookmarksShop">
                  Cards & Bookmarks
                </NavLink>
                <NavLink to="/shop/clothingShop">Clothing</NavLink>
                <NavLink to="/shop/stickersShop">Stickers & Magnets</NavLink>
                <NavLink to="/shop/notebooksShop">Notebooks</NavLink>
              </div>
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
    </div>
  );
}
