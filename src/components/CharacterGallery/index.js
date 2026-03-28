import React from 'react';
/** @jsxImportSource @emotion/react */
import Img from 'react-cool-img';
import style from './style';
import ImgPortrait from '../../resources/pictures/2022/fighting_the_green_dragon_2022_web.jpg';
import ImgParty from '../../resources/pictures/2026/the_dream_of_zarathustra_2026_web.jpg';
import ImgCreature from '../../resources/pictures/2025/the_keeper_of_the_gates_2025_web.jpg';

const items = [
  {
    src: ImgPortrait,
    alt: 'Fighting the Green Dragon — Character Portrait',
    caption: 'Character Portrait',
    subCaption: 'Pen and Watercolour',
  },
  {
    src: ImgParty,
    alt: 'The Dream of Zarathustra — Party Portrait',
    caption: 'Party Portrait',
    subCaption: 'Group of adventurers',
    scale: 1.6,
    transformOrigin: 'center 55%',
  },
  {
    src: ImgCreature,
    alt: 'The Keeper of the Gates — Creature Design',
    caption: 'Creature Design',
    subCaption: 'Custom Monster in full colour',
    scale: 1.5,
    transformOrigin: '15% 30%',
  },
];

export default function CharacterGallery() {
  return (
    <div css={style.grid}>
      {items.map((item) => (
        <div css={style.tile} key={item.caption}>
          <Img
            lazy
            cache
            src={item.src}
            alt={item.alt}
            style={{
              transform: item.scale ? `scale(${item.scale})` : undefined,
              transformOrigin: item.transformOrigin || 'center center',
            }}
          />
          <div css={style.overlay}>
            <span css={style.caption}>{item.caption}</span>
            <span css={style.subCaption}>{item.subCaption}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
