import React from 'react';
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import { ExternalArrow, btnExternalLabel } from '../../resources/buttons';
import PaintingVideo from '../../resources/images/curls_progress.mp4';
import style from './style';

export default function CommissionVideo() {
  return (
    <div css={style.outer}>
      <div css={style.layout}>
        <div css={style.left}>
          <div css={style.leftContent}>
            <span css={style.eyebrow}>Commission a painting</span>
            <h2 css={style.heading}>
              Every painting starts with{' '}
              <em css={style.headingAccent}>your idea.</em>
            </h2>
            <p css={style.body}>
              Tell me what you're imagining — a book cover, a character, a
              creature. I'll take it from sketch to finished painting.
            </p>
            <div css={style.buttons}>
              <a
                css={style.btnEtsy}
                href="https://www.etsy.com/shop/pannadraws/?etsrc=sdt&section_id=32291570"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactPixel.trackCustom('CommissionEtsyClick', {
                    source: 'commissionVideo',
                  });
                  ReactGA.event({
                    category: 'Home',
                    action: 'Clicked Commission Etsy',
                    label: 'commissionVideo',
                  });
                }}
              >
                <span css={btnExternalLabel}>
                  <ExternalArrow />
                  Order on Etsy
                </span>
              </a>
              <Link
                css={style.btnMessage}
                to="/contact"
                onClick={() => {
                  ReactPixel.trackCustom('ContactClick', {
                    source: 'commissionVideo',
                  });
                  ReactGA.event({
                    category: 'Home',
                    action: 'Clicked Send Message',
                    label: 'commissionVideo',
                  });
                }}
              >
                Send me a message
              </Link>
            </div>
          </div>
        </div>

        <div css={style.right}>
          <div css={style.videoWrapper}>
            <video css={style.video} loop autoPlay muted playsInline>
              <source src={PaintingVideo} type="video/mp4" />
            </video>
            {/*<div css={style.videoOverlay} aria-hidden="true">
              <span css={style.overlayLabel}>
                Looping process video — silent · autoplay
              </span>
              <div css={style.playButton}>
                <svg viewBox="0 0 64 64" fill="none">
                  <circle
                    cx="32"
                    cy="32"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <polygon points="26,20 48,32 26,44" fill="currentColor" />
                </svg>
              </div>
              <span css={style.overlayCaption}>
                watch the painting come to life
              </span>
            </div>*/}
          </div>
          <div css={style.mediaStrip}>
            <span css={style.mediaCredit}>
              Watercolour and ink, painted by hand
            </span>
            <a
              css={style.instagramLink}
              href="https://www.instagram.com/pannamatena/"
              target="_blank"
              rel="noopener noreferrer"
            >
              More on Instagram →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
