import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import Img from 'react-cool-img';
import { ExternalArrow, btnExternalLabel } from '../resources/buttons';
import Banner from '../components/Banner';
import PromoBox from '../components/PromoBox';
import CommissionVideo from '../components/CommissionVideo';
import SegmentedLayout from '../components/SegmentedLayout';
import Newsletter, { NewsletterDescription } from '../components/Newsletter';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import { breakPoints } from '../resources/breakpoints';
import OriginalArtworks from '../resources/images/original_artworks.jpg';

export function Home() {
  return (
    <div>
      {ReactPixel.pageView()}
      <Banner />
      <PromoBox />
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
              && p {
                font-family: ${fonts.f3};
                font-size: 16px;
                line-height: 1.5em;
                font-weight: 400;
                @media ${breakPoints.desktopSmall} {
                  font-size: 18px;
                }
              }
            `}
          >
            <h2>  Shop original artworks</h2>
            <p>
              My original artworks are available in my Etsy shop along with bookmarks, cards, prints, stickers and other goodies made from my art.
            </p>
            <div className="btnContainer">
              <a
                className="btnCallToAction"
                href="https://www.etsy.com/shop/pannadraws/?etsrc=sdt&section_id=28846472"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactPixel.trackCustom('ShopOriginalArtClick', {
                    source: 'mainPage',
                  });
                  ReactGA.event({
                    category: 'Home',
                    action: 'Clicked ShopOriginalArt',
                    label: 'segmentedLayout',
                  });
                }}
              >
                <span css={btnExternalLabel}>
                  <ExternalArrow />
                  Shop original art
                </span>
              </a>
            </div>
          </div>
        }
        rightBackground={colours.c5}
      />
      <CommissionVideo />
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
        contentRight={<Newsletter source="home" />}
        rightBackground={colours.c5}
      />
    </div>
  );
}
