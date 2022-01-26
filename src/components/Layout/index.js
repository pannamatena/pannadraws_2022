import React, { useState, useEffect } from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {
  logo,
  logoText,
  facebook,
  instagram,
  menu,
} from '../../resources/icons';
import { breakPoints } from '../../resources/breakpoints';
import style from './style';

export default function Layout() {
  const [topPos, setTopPos] = useState(0);

  const setTopScrollVal = () => {
    const scrollY = window ? window.scrollY : 0;
    setTopPos(scrollY);
  };

  useEffect(() => {
    setTopScrollVal();
    window.addEventListener('scroll', setTopScrollVal);
    return () => {
      window.removeEventListener('scroll', setTopScrollVal);
    };
  });

  return (
    <div css={style.layout}>
      <div
        css={css`
          ${style.header};
          padding: 10px;
          @media ${breakPoints.tabletPortrait} {
            padding: ${topPos > 0 ? '10' : '15'}px;
          }
          @media ${breakPoints.desktopSmall} {
            padding: ${topPos > 0 ? '15' : '20'}px;
          }
        `}
      >
        <div css={style.headerLeft}>
          <div css={style.logoContainer}>
            <Link to="/">
              <div
                css={css`
                  ${style.logoImg};
                  width: ${topPos > 0 ? '35' : '50'}px;
                  height: ${topPos > 0 ? '35' : '50'}px;
                  @media ${breakPoints.desktopSmall} {
                    width: ${topPos > 0 ? '46' : '66'}px;
                    height: ${topPos > 0 ? '41' : '61'}px;
                  }
                `}
              >
                {logo()}
              </div>
              <div
                css={css`
                  ${style.logoText};
                  @media ${breakPoints.tabletPortrait} {
                    width: ${topPos > 0 ? '66' : '80'}px;
                    height: ${topPos > 0 ? '35' : '50'}px;
                  }
                  @media ${breakPoints.desktopSmall} {
                    width: ${topPos > 0 ? '80' : '110'}px;
                    height: ${topPos > 0 ? '41' : '61'}px;
                  }
                `}
              >
                {logoText()}
              </div>
            </Link>
          </div>
        </div>
        <div css={style.headerRight}>
          <nav css={style.mainMenu}>
            <ul>
              <li>
                <NavLink to="/art">Art</NavLink>
                <div css={style.subMenu}>
                  <NavLink to="/art/animalArt">Birds & Wildlife</NavLink>
                  <NavLink to="/art/adultColoring">Adult Colouring</NavLink>
                  <NavLink to="/art/fantasyArt">Fantasy Art</NavLink>
                </div>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
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
        <div css={style.mobileMenuOpener}>
          <button
            css={css`
              width: ${topPos > 0 ? '25' : '30'}px;
              height: ${topPos > 0 ? '20' : '25'}px;
            `}
          >
            {menu()}
          </button>
        </div>
      </div>

      <div css={style.mobileMenuContent}>
        <nav css={style.mainMenuMobile}>
          <ul>
            <li>
              <NavLink to="/art">Art</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
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
        <div css={style.socialMenuMobile}>
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

      <div
        css={css`
          ${style.pageContent};
          padding-top: ${topPos > 0 ? '59' : '74'}px;
          @media ${breakPoints.tabletPortrait} {
            padding-top: ${topPos > 0 ? '60' : '85'}px;
          }
          @media ${breakPoints.desktopSmall} {
            padding-top: ${topPos > 0 ? '76' : '106'}px;
          }
        `}
      >
        <Outlet />
      </div>
    </div>
  );
}
