import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Checkbox from '../../components/Checkbox';
import style from './style';

export default function ContactForm() {
  const [subjectVal, setSubjectVal] = useState('');
  const [consentVal, setConsentVal] = useState(false);

  const handleSubjectChange = (event) => {
    setSubjectVal(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setConsentVal(event.target.checked);
  };

  return (
    <div className="contactForm">
      <form
        css={style.contactForm}
        name="contact"
        method="post"
        action="/form_success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div
          css={css`
            ${style.contactFormRow};
            ${style.contactFormRowFlex}
          `}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
        </div>
        <div css={style.contactFormRow}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            value={subjectVal}
            onChange={(e) => handleSubjectChange(e)}
          />
        </div>
        <div css={style.contactFormRow}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" required />
        </div>
        <div css={style.contactFormRow}>
          <label css={style.checkbox}>
            <Checkbox checked={consentVal} onChange={handleCheckboxChange} />
            <span>
              I agree that my email address and name can be used to enable
              replying to my message.
            </span>
          </label>
          <p css={style.infoText}>
            All personal data is handled according to the{' '}
            <Link to="/privacy_policy">Privacy Policy</Link>.
          </p>
        </div>
        <div css={style.contactFormActions}>
          <input
            css={style.submitBtn}
            type="submit"
            value="Send Message"
            disabled={!consentVal}
          />
        </div>
      </form>
    </div>
  );
}
