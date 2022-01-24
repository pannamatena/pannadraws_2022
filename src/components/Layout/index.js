import * as React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { Link, Outlet } from 'react-router-dom';
import { logo, logoText, facebook, instagram } from '../../resources/icons';
import style from './style';

export default function Layout() {
  return (
    <div css={style.layout}>
      <div css={style.header}>
        <div css={style.headerLeft}>
          <div css={style.logoContainer}>
            <Link to="/">
              <div css={style.logoImg}>{logo()}</div>
              <div css={style.logoText}>{logoText()}</div>
            </Link>
          </div>
        </div>
        <div css={style.headerRight}>
          <nav css={style.mainMenu}>
            <ul>
              <li>
                <Link to="/art">Art</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/commissionArt">Commission Art</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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

      <div css={style.pageContent}>
        <Outlet />
      </div>
    </div>
  );
}
