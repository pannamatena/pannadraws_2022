import React, { useState, useEffect } from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, Outlet } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { colours } from '../../resources/colors';
import { fonts } from '../../resources/fonts';
import {
  logo,
  logoText,
  facebook,
  instagram,
  menu,
} from '../../resources/icons';
import { breakPoints } from '../../resources/breakpoints';
import style from './style';
import DesktopMenu from '../DesktopMenu';
import MobileMenu from '../MobileMenu';

export default function Layout() {
  const [topPos, setTopPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const setTopScrollVal = () => {
    const scrollY = window ? window.scrollY : 0;
    setTopPos(scrollY);
  };

  useEffect(() => {
    setTopScrollVal();
    window.addEventListener('scroll', setTopScrollVal);
    return () => {
      window.removeEventListener('scroll', setTopScrollVal);
    };
  });

  return (
    <div css={style.layout}>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="PannaDraws Cookie Consent"
        style={{ background: colours.c2, fontSize: '1em' }}
        buttonStyle={{
          color: colours.c3,
          fontSize: '1em',
          background: colours.c1,
          fontFamily: fonts.f1,
          textTransform: 'uppercase',
        }}
      >
        This site uses cookies to enhance user experience. To learn more about
        how PannaDraws uses cookies please read my{' '}
        <Link css={style.cookiePP} to="/privacy_policy">
          Privacy Policy
        </Link>
        .
      </CookieConsent>
      <div
        css={css`
          ${style.header};
          padding: 10px;
          @media ${breakPoints.tabletPortrait} {
            padding: ${topPos > 0 ? '10' : '15'}px;
          }
          @media ${breakPoints.desktopSmall} {
            padding: ${topPos > 0 ? '15' : '20'}px;
          }
        `}
      >
        <div css={style.headerLeft}>
          <div css={style.logoContainer}>
            <Link to="/">
              <div css={style.logo}>
                <div
                  css={css`
                    ${style.logoImg};
                    width: ${topPos > 0 ? '35' : '50'}px;
                    height: ${topPos > 0 ? '35' : '50'}px;
                    @media ${breakPoints.desktopSmall} {
                      width: ${topPos > 0 ? '46' : '66'}px;
                      height: ${topPos > 0 ? '41' : '61'}px;
                    }
                  `}
                >
                  {logo()}
                </div>
                <div
                  css={css`
                    ${style.logoText};
                    @media ${breakPoints.tabletPortrait} {
                      width: ${topPos > 0 ? '66' : '80'}px;
                      height: ${topPos > 0 ? '35' : '50'}px;
                    }
                    @media ${breakPoints.desktopSmall} {
                      width: ${topPos > 0 ? '80' : '110'}px;
                      height: ${topPos > 0 ? '41' : '61'}px;
                    }
                  `}
                >
                  {logoText()}
                </div>
              </div>
              <h2
                css={css`
                  display: none;
                  @media ${breakPoints.tabletLandscape} {
                    display: ${topPos > 0 ? 'none' : 'block'};
                  }
                `}
              >
                fantasy and animal fine art
              </h2>
            </Link>
          </div>
        </div>
        <div css={style.headerRight}>
          <DesktopMenu />
          <div css={style.socialMenu}>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/pannadraws"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="PannaDraws on Facebook"
                >
                  {facebook()}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pannamatena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="PannaDraws on Instagram"
                >
                  {instagram()}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div css={style.mobileMenuOpener}>
          <button
            css={css`
              width: ${topPos > 0 ? '25' : '30'}px;
              height: ${topPos > 0 ? '20' : '25'}px;
            `}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            {menu()}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <div
        css={css`
          ${style.pageContent};
          padding-top: ${topPos > 0 ? '59' : '74'}px;
          padding-bottom: 144px;
          @media ${breakPoints.tabletPortrait} {
            padding-top: ${topPos > 0 ? '60' : '85'}px;
            padding-bottom: 144px;
          }
          @media ${breakPoints.tabletLandscape} {
            padding-top: ${topPos > 0 ? '60' : '104'}px;
          }
          @media ${breakPoints.desktopSmall} {
            padding-top: ${topPos > 0 ? '76' : '125'}px;
            padding-bottom: 159px;
          }
          @media ${breakPoints.desktopLarge} {
            padding-bottom: 164px;
          }
        `}
      >
        <Outlet />
      </div>

      <div css={style.footerContainer}>
        <p>All prices are indicated in EUR. Shipping costs are not included.</p>
        <p>
          Artwork and content &copy; {new Date().getFullYear()} Panna Zsamba
        </p>
        <div css={style.footerSocial}>
          <span>
            <a
              href="https://www.facebook.com/pannadraws"
              target="_blank"
              rel="noopener noreferrer"
              title="PannaDraws on Facebook"
            >
              Facebook
            </a>
          </span>
          <span>
            <a
              href="https://www.instagram.com/pannamatena/"
              target="_blank"
              rel="noopener noreferrer"
              title="PannaDraws on Instagram"
            >
              Instagram
            </a>
          </span>
          <span>
            <Link to="/return_policy">Return policy</Link>
          </span>
          <span>
            <Link to="/privacy_policy">Privacy policy</Link>
          </span>
          {/*<span><Link to="/faq">FAQ</Link></span>*/}
        </div>
      </div>
    </div>
  );
}
