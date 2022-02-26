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
          <ul>
            <li>free art printable on signup</li>
            <li>monthly emails with behind-the-scenes and exclusive content</li>
            <li>special offers only for subscribers</li>
            <li>art freebies every month</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
