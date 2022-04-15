import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactPixel from 'react-facebook-pixel';
import { Link } from 'react-router-dom';
import Img from 'react-cool-img';
import Banner from '../components/Banner';
import SegmentedLayout from '../components/SegmentedLayout';
import Newsletter, { NewsletterDescription } from '../components/Newsletter';
import { colours } from '../resources/colors';
import { breakPoints } from '../resources/breakpoints';
import PaintingVideo_1 from '../resources/images/curls_progress.mp4';
import OriginalArtworks from '../resources/images/original_artworks.jpg';

export function Home() {
  return (
    <div>
      {ReactPixel.pageView()}
      <Banner />
      <SegmentedLayout
        contentLeft={
          <div
            css={css`
              padding-bottom: 40px;
              @media ${breakPoints.tabletLandscape} {
                padding-bottom: 0;
              }
            `}
          >
            <NewsletterDescription />
          </div>
        }
        contentRight={<Newsletter />}
        rightBackground={colours.c5}
      />
      <SegmentedLayout
        contentLeft={
          <div
            css={css`
              float: right;
              @media ${breakPoints.desktopLarge} {
                max-width: 50%;
              }
            `}
          >
            <h2>Commission your artwork!</h2>
            <p>
              Do you want to get your own personalised painting? Commission your
              artwork today! Learn more about commissions{' '}
              <Link to="/commissionArt">here</Link>, or contact me right away!
            </p>
            <div className="btnContainer">
              <Link
                className="btnCallToAction"
                to="/commissionArt#contact_form"
              >
                Message me
              </Link>
            </div>
          </div>
        }
        contentRight={
          <div
            css={css`
              margin: -10px;
              @media ${breakPoints.desktopSmall} {
                margin: -15px;
              }
              @media ${breakPoints.desktopLarge} {
                margin: -20px;
              }
            `}
          >
            <video loop autoplay="autoplay" muted>
              <source src={PaintingVideo_1} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        }
        leftBackground={colours.c5}
      />
      <SegmentedLayout
        contentLeft={
          <div
            css={css`
              margin: -10px;
              @media ${breakPoints.desktopSmall} {
                margin: -15px;
              }
              @media ${breakPoints.desktopLarge} {
                margin: -20px;
              }
            `}
          >
            <Img
              src={OriginalArtworks}
              css={css`
                max-width: 100%;
              `}
              alt="Panna working on a large Old Irish goat watercolour portrait"
            />
          </div>
        }
        contentRight={
          <div
            css={css`
              @media ${breakPoints.desktopLarge} {
                max-width: 50%;
              }
            `}
          >
            <h2>Shop original artworks</h2>
            <p>
              There is only one available in the whole world of every original
              painting... Once they're gone they're gone. Here are the latest
              ones, but make sure to check out the rest!
            </p>
            <div className="btnContainer">
              <Link className="btnCallToAction" to="/shop/originalArtShop">
                Shop original art
              </Link>
            </div>
          </div>
        }
        rightBackground={colours.c5}
      />
    </div>
  );
}
