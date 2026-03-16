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
          <NavLink to="/art/fantasyArt">Art</NavLink>
        </li>
        {/*<li>
          <span className="fakeLink">Art</span>
          <div className="artMenu" css={style.subMenu}>
            <NavLink className="subMenuLink" to="/art/fantasyArt">
              Fantasy & Wildlife Art
            </NavLink>
            <NavLink className="subMenuLink" to="/art/adultColoring">
              Adult Colouring
            </NavLink>
          </div>
        </li>*/}
        <li>
          <NavLink to="/illustrations">Illustrations</NavLink>
        </li>
        <li>
          <NavLink to="/characterCreatureDesign">Character & Creature Design</NavLink>
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
