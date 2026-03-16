import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import style from './style';

export default function PromoBox() {
  return (
    <div css={style.promoBoxContainer}>
      <div css={css`${style.promoBox}; background: #f5f0eb;`}>
        <h2>For Writers & Authors</h2>
        <p>
          Book covers, story illustrations, and character portraits that bring
          your story to life.
        </p>
        <div className="btnContainer">
          <Link className="btnCallToAction" to="/illustrations">
            Commission me
          </Link>
        </div>
      </div>
      <div css={css`${style.promoBox}; background: #ede8f5;`}>
        <h2>For D&D & other TTRPG</h2>
        <p>
          Character portraits, party art, monster design and campaign
          illustrations for your table.
        </p>
        <div className="btnContainer">
          <Link className="btnCallToAction" to="/characterCreatureDesign">
            Commission me
          </Link>
        </div>
      </div>
    </div>
  );
}
