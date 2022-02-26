import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Img from 'react-cool-img';
import style from './style';
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
          <h2 className="headline headline--first">Irish wilderness.</h2>
          <h2 className="headline headline--second">Magical creatures.</h2>
          <h2 className="headline headline--third">enchanted watercolour.</h2>
          <span className="headline">the art of Panna Zsamba</span>
        </div>
      </div>
      <div
        css={css`
          ${style.bouncyText};
          top: ${viewPortHeight - 270}px;
        `}
      >
        <BouncyText content={<span>Fancy a freebie?</span>} />
      </div>
    </div>
  );
}
