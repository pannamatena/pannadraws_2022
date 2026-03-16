import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Img from 'react-cool-img';
import style from './style';
import { colours } from '../../resources/colors';
import BouncyText from '../../components/BouncyText';
import MainImg from '../../resources/images/pannadraws_website_main_img.jpg';

export default function Banner() {
  const [viewPortHeight, setViewPortHeight] = useState(0);

  useEffect(() => {
    setViewPortHeight(window.innerHeight);
  }, []);

  return (
    <div css={style.container}>
      <Img
        src={MainImg}
        alt="Dragon and unicorn under cherry blossoms - ink drawing by PannaDraws"
      />
      <div css={style.headlineContainer}>
        <div css={style.headlineContainerInner}>
          <h2 className="headline headline--first">Fantasy illustrations for</h2>
          <h2 className="headline headline--second">Books, Stories</h2>
          <h2 className="headline headline--third">& Adventures.</h2>
          <span className="headline headline--xs" css={css`color: ${colours.c4};`}>Book covers · Character design · Monster art · World-building</span>
          <span className="headline">the art of Panna Zsamba</span>
        </div>
      </div>
      {/*<div
        css={css`
          ${style.bouncyText};
          top: ${viewPortHeight}px;
        `}
      >
        <BouncyText content={<span>Fancy a freebie?</span>} />
      </div>*/}
    </div>
  );
}
