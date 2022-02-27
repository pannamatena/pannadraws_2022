import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Modal from '../Modal';
import Newsletter from '../../components/Newsletter';
import style from './style';

export default function NewsletterModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div css={style.newsletterModal}>
        <div css={style.form}>
          <Newsletter />
        </div>

        <div css={style.details}>
          <h3>Why sign up?</h3>
          <ul>
            <li>Get a FREE art printable on signup</li>
            <li>Monthly emails with behind-the-scenes and exclusive content</li>
            <li>Special offers only for subscribers</li>
            <li>Art freebies every month!</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
