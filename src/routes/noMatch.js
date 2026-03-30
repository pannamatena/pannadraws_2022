import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import { css } from '@emotion/react';
import { colours } from '../resources/colors';
import { fonts, mediumHeadFontSize } from '../resources/fonts';
import { breakPoints } from '../resources/breakpoints';
import { btnPrimary, btnOutlineBlack } from '../resources/buttons';

const style = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 60px 20px;

    @media ${breakPoints.tabletPortrait} {
      padding: 80px 20px;
    }
    @media ${breakPoints.desktopSmall} {
      padding: 120px 20px;
    }
  `,
  number: css`
    font-family: ${fonts.f4};
    font-weight: 900;
    font-style: italic;
    color: ${colours.c5};
    line-height: 1;
    margin-bottom: 0;

    font-size: 120px;
    @media ${breakPoints.tabletPortrait} {
      font-size: 180px;
    }
    @media ${breakPoints.desktopSmall} {
      font-size: 240px;
    }
  `,
  heading: css`
    && {
      font-family: ${fonts.f4};
      font-weight: 400;
      text-transform: none;
      letter-spacing: normal;
      ${mediumHeadFontSize};
      margin-bottom: 8px;
    }
  `,
  accent: css`
    color: ${colours.c1};
    font-style: italic;
    display: block;
  `,
  body: css`
    && {
      font-family: ${fonts.f3};
      font-style: italic;
      font-size: 16px;
      color: ${colours.c4};
      max-width: 420px;
      margin: 0 auto 30px;

      @media ${breakPoints.tabletPortrait} {
        margin-bottom: 40px;
      }
    }
  `,
  buttons: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  `,
};

export function NoMatch() {
  return (
    <div>
      {ReactPixel.pageView()}
      <div css={style.wrapper}>
        <p css={style.number}>404</p>
        <h1 css={style.heading}>
          You've wandered off the map.
          <span css={style.accent}>Even dragons need directions.</span>
        </h1>
        <p css={style.body}>
          The page you're looking for doesn't exist — but there's plenty of
          art waiting for you back home.
        </p>
        <div css={style.buttons}>
          <Link css={btnPrimary} to="/">Back to Home</Link>
          <Link css={btnOutlineBlack} to="/commissionArt">Commission a Piece</Link>
        </div>
      </div>
    </div>
  );
}
