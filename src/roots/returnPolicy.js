import * as React from 'react';
import ReactPixel from 'react-facebook-pixel';
import { Link } from 'react-router-dom';
import TextPage from '../components/TextPage';
import style from '../components/ArtActionBox/style';

export function ReturnPolicy() {
  return (
    <div>
      {ReactPixel.pageView()}
      <TextPage>
        <h1>Return Policy</h1>
        <p>Last updated: March 13, 2022</p>
        <p>
          For complete details on returns please refer to my Etsy shop:{' '}
          <a
            href="https://www.etsy.com/ie/shop/PannaDraws"
            target="_blank"
            title="PannaDraws on Etsy"
            rel="noopener noreferrer"
          >
            https://www.etsy.com/ie/shop/PannaDraws
          </a>
          .
        </p>
        <p>
          PannaDraws accepts returns within 14 days of delivery, except for
          custom items made to order.
        </p>
        <p>
          If you purchased your item through my Etsy shop and would like to
          initiate a return, please see the following link:{' '}
          <a
            href="https://help.etsy.com/hc/en-us/articles/115015440807-How-to-Return-or-Exchange-an-Item-on-Etsy?segment=shopping"
            target="_blank"
            title="How to initiate a return on Etsy"
            rel="noopener noreferrer"
          >
            How to initiate a return on Etsy
          </a>
          . Alternatively you can send me a{' '}
          <Link
            to="/contact/"
            state={{
              msgSubj: 'Return item',
            }}
          >
            message
          </Link>{' '}
          about your request. Please provide the following information:
        </p>
        <ul>
          <li>Your name</li>
          <li>The title/name of the artwork/item</li>
          <li>The date of purchase</li>
          <li>
            The purchase price (please include a screenshot or photo of the
            receipt if applicable)
          </li>
          <li>The reason for requesting a return</li>
          <li>
            If the art arrived damaged, please include a photo of the damage.
          </li>
        </ul>

        <h2>Accepted payment methods</h2>
        <p>The accepted payment methods are:</p>
        <ul>
          <li>Credit cards</li>
          <li>Debit cards</li>
          <li>Etsy Gift Cards and Etsy Credits</li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
          <li>Paypal</li>
        </ul>
        <p>
          For more info see{' '}
          <a
            href="https://help.etsy.com/hc/en-us/articles/360026831353-What-Payment-Methods-Can-I-Use-to-Check-Out-on-Etsy-?segment=shopping"
            target="_blank"
            title="Payment methods on Etsy"
            rel="noopener noreferrer"
          >
            this link
          </a>
          .
        </p>
      </TextPage>
    </div>
  );
}
