import React from 'react';
/** @jsxImportSource @emotion/react */
import style from './style';

const tracks = [
  {
    pill: 'For players & DMs',
    title: 'Character Design',
    body: 'Bring your character sheet to life. A painted portrait with armour, expression and personality — yours to keep.',
    list: [
      'Single character portrait',
      'Party group portrait',
      'Character reference sheet',
      'Scene with background',
    ],
  },
  {
    pill: 'For DMs & Authors',
    title: 'Creature & Monster Design',
    body: 'Custom creatures for your campaign, novel or game — from subtle fey to full eldritch horrors. Designed from your brief.',
    list: [
      'Original creature design',
      'Monster from description',
      'Boss / encounter illustration',
      'Creature reference sheet',
    ],
  },
];

export default function CharacterTracks() {
  return (
    <div css={style.container}>
      {tracks.map((track) => (
        <div css={style.track} key={track.title}>
          <span css={style.pill}>{track.pill}</span>
          <h2 css={style.title}>{track.title}</h2>
          <p css={style.body}>{track.body}</p>
          <ul css={style.list}>
            {track.list.map((item) => (
              <li css={style.listItem} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
