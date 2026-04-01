import React from 'react';
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import style from './style';
import { ExternalArrow, btnExternalLabel } from '../../resources/buttons';

const tags = [
  { label: 'Tattoo Designs', highlighted: true },
  { label: 'Animal Portraits' },
  { label: 'Bird Portraits' },
  { label: 'Ink Drawings' },
  { label: 'Custom Colouring Pages' },
];

export default function OtherCommissions() {
  return (
    <div css={style.wrapper}>
      <div css={style.left}>
        <span css={style.eyebrow}>Also available</span>
        <h2 css={style.title}>Other commissions</h2>
        <p css={style.body}>
          Don't see what you're looking for above? I also take these.
        </p>
      </div>
      <div css={style.right}>
        <div css={style.tags}>
          {tags.map((tag) => (
            <span
              key={tag.label}
              css={[style.tag, tag.highlighted && style.tagHighlighted]}
            >
              {tag.label}
            </span>
          ))}
        </div>
        <p css={style.description}>
          These commissions work exactly the same way — get in touch to discuss
          your idea and I'll give you a quote. Tattoo designs are a specialty:
          black ink or colour, any creature, any style.
        </p>
        <div css={style.buttons}>
          <a
            css={style.btnPrimary}
            href="https://www.etsy.com/ie/listing/1199705464/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span css={btnExternalLabel}>
              <ExternalArrow />
              Order on Etsy
            </span>
          </a>
          <a css={style.btnSecondary} href="#contact_form">
            Send a message
          </a>
        </div>
      </div>
    </div>
  );
}
