import React from 'react';
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import style from './style';

const tracks = [
  {
    eyebrow: 'For authors & publishers',
    title: 'Book & Story Illustrations',
    text: 'Book covers, chapter art, character portraits, world art',
    btn: { label: 'Discover Illustrations', to: '/illustrations' },
  },
  {
    eyebrow: 'For D&D players & DMs',
    title: 'Character & Creature Design',
    text: 'Character portraits, party art, monster & creature design',
    btn: {
      label: 'Discover Characters & Creatures',
      to: '/characterCreatureDesign',
    },
  },
];

export default function CommissionTracks() {
  return (
    <div css={style.container}>
      {tracks.map((track) => (
        <div css={style.track} key={track.title}>
          <div css={style.content}>
            <span css={style.eyebrow}>{track.eyebrow}</span>
            <h2 css={style.title}>{track.title}</h2>
            <p css={style.text}>{track.text}</p>
          </div>
          <Link css={style.btn} to={track.btn.to}>
            {track.btn.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
