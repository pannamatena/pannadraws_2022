import * as React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, Outlet } from 'react-router-dom';
import { colours } from '../resources/colors';

const style = {
  page: css`
    background: ${colours.c3};
  `,
};

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/art">Art</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div css={style.page}>
        <Outlet />
      </div>
    </div>
  );
}
