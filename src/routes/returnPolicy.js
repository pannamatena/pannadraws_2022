import * as React from 'react';
import ReactPixel from 'react-facebook-pixel';
import { Link } from 'react-router-dom';
import TextPage from '../components/TextPage';

export function ReturnPolicy() {
  return (
    <div>
      {ReactPixel.pageView()}
      <TextPage>
        <h1>Return Policy — PannaDraws</h1>
        <p>Last updated: April 2026</p>

        <h2>Made-to-Order &amp; Commissioned Artwork</h2>
        <p>
          All commissioned and made-to-order paintings are created specifically
          to your specifications. As such, they are exempt from the 14-day right
          of withdrawal under EU consumer law (Article 16(c), Directive
          2011/83/EU). By placing a commission order, you acknowledge and agree
          that you cannot return it simply because you changed your mind. This
          does not affect your rights if the item arrives damaged or is
          significantly not as described.
        </p>

        <h2>Ready-Made Original Artworks, Prints, Bookmarks &amp; Stickers</h2>
        <p>
          If you are an EU buyer, you have the right to withdraw from your
          purchase within 14 days of receiving your item, for any reason and
          with no penalty. To exercise this right, contact me within 14 days of
          delivery via Etsy messages or by{' '}
          <Link
            to="/contact/"
            state={{
              msgSubj: 'Return item',
            }}
          >
            email
          </Link>
          . You may use the standard EU withdrawal form, available here:{' '}
          <a
            href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32011L0083"
            target="_blank"
            title="EU Model Withdrawal Form"
            rel="noopener noreferrer"
          >
            EU Model Withdrawal Form
          </a>
          .
        </p>
        <p>
          You must return the item within 14 days of notifying me of your
          withdrawal. Return shipping costs are the buyer's responsibility unless
          otherwise agreed. Items must be returned in their original condition. I
          will issue a full refund (including the original standard shipping
          cost) within 14 days of receiving the returned item or proof of
          postage.
        </p>

        <h2>Damaged or Faulty Items</h2>
        <p>
          If your item arrives damaged or is significantly not as described,
          please contact me within a reasonable time with photos of the damage.
          Under EU law, you are entitled to a remedy (repair, replacement, or
          refund) for up to two years from delivery. Return shipping for damaged
          or faulty items will be covered by me.
        </p>

        <h2>How to Initiate a Return</h2>
        <p>
          Contact me via{' '}
          <a
            href="https://www.etsy.com/ie/shop/PannaDraws"
            target="_blank"
            title="PannaDraws on Etsy"
            rel="noopener noreferrer"
          >
            Etsy messages
          </a>{' '}
          or by{' '}
          <Link
            to="/contact/"
            state={{
              msgSubj: 'Return item',
            }}
          >
            email
          </Link>{' '}
          with the following information:
        </p>
        <ul>
          <li>Your name</li>
          <li>The item name</li>
          <li>Date of purchase</li>
          <li>Purchase price</li>
          <li>Reason for return</li>
          <li>If the item arrived damaged, please include photos of the damage.</li>
        </ul>
        <p>
          Alternatively, if you purchased through my Etsy shop, you can initiate
          a return directly through Etsy:{' '}
          <a
            href="https://help.etsy.com/hc/en-us/articles/115015440807-How-to-Return-or-Exchange-an-Item-on-Etsy?segment=shopping"
            target="_blank"
            title="How to initiate a return on Etsy"
            rel="noopener noreferrer"
          >
            How to initiate a return on Etsy
          </a>
          .
        </p>

        <h2>Accepted Payment Methods</h2>
        <p>
          Credit cards, debit cards, Etsy Gift Cards and Etsy Credits, Apple
          Pay, Google Pay, and PayPal. All prices are listed in EUR. Local taxes
          may apply at checkout. Shipping costs and customs charges are not
          included in item prices.
        </p>
      </TextPage>
    </div>
  );
}
