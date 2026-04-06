import React from 'react';
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { ExternalArrow, btnExternalLabel } from '../../resources/buttons';
import style from './style';

export default function PromoBox() {
  return (
    <div css={style.outer}>
      <div css={style.inner}>
        <div css={style.statsBar}>
          <div css={style.statItem}>
            <span css={style.statNumber}>2–4</span>
            <span css={style.statLabel}>Weeks typical turnaround</span>
          </div>
          <div css={style.statItem}>
            <span css={style.statNumber}>100%</span>
            <span css={style.statLabel}>Traditional, handpainted</span>
          </div>
          <div css={style.statItem}>
            <span css={style.statNumber}>5.0</span>
            <span css={style.statLabel}>Rating · 175+ reviews on Etsy</span>
          </div>
        </div>

        <div css={style.mainPanel}>
          <div css={style.leftSide}>
            <span css={style.commissionsEyebrow}>Commission a painting</span>
            <h2 css={style.heading}>Have something in mind?</h2>
            <p css={style.body}>
              Every commission starts with a conversation. Tell me your idea —
              I'll take it from there.
            </p>
          </div>
          <div css={style.rightSide}>
            <Link css={style.serviceCard} to="/illustrations">
              <div css={style.serviceCardContent}>
                <span css={style.cardEyebrow}>
                  For authors &amp; publishers
                </span>
                <h3 css={style.cardTitle}>Book &amp; Story Illustrations</h3>
                <p css={style.cardDesc}>
                  Covers, chapter art, character portraits, world maps
                </p>
              </div>
              <span css={style.cardArrow}>→</span>
            </Link>
            <Link css={style.serviceCard} to="/characterCreatureDesign">
              <div css={style.serviceCardContent}>
                <span css={style.cardEyebrow}>
                  For D&amp;D players &amp; GMs
                </span>
                <h3 css={style.cardTitle}>Character &amp; Creature Design</h3>
                <p css={style.cardDesc}>
                  Portraits, party art, monster design, campaign art
                </p>
              </div>
              <span css={style.cardArrow}>→</span>
            </Link>
          </div>
        </div>

        <div css={style.bottomBar}>
          <p css={style.bottomText}>
            Ready to order? Skip the conversation and go straight to Etsy.
          </p>
          <div css={style.bottomButtons}>
            <a
              css={style.btnEtsy}
              href="https://www.etsy.com/shop/pannadraws/?etsrc=sdt&section_id=32291570"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span css={btnExternalLabel}>
                <ExternalArrow />
                Order on Etsy
              </span>
            </a>
            <Link css={style.btnMessage} to="/contact">
              Send a message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
