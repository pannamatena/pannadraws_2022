import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Checkbox from '../../components/Checkbox';
import style from './style';

export default function ContactForm(props) {
  let location = useLocation();
  const [nameVal, setNameVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [subjectVal, setSubjectVal] = useState(
    location.state?.msgSubj || props.msgSubj || ''
  );
  const [messageVal, setMessageVal] = useState('');
  const [consentVal, setConsentVal] = useState(false);
  const isDark = props.theme === 'DARK';

  const isSubmittable = consentVal && nameVal.trim() && emailVal.trim() && subjectVal.trim() && messageVal.trim();

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
          css={[style.contactFormRow, style.contactFormRowFlex, isDark && style.contactFormRowDark]}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required value={nameVal} onChange={(e) => setNameVal(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required value={emailVal} onChange={(e) => setEmailVal(e.target.value)} />
          </div>
        </div>
        <div css={[style.contactFormRow, isDark && style.contactFormRowDark]}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            value={subjectVal}
            onChange={(e) => setSubjectVal(e.target.value)}
          />
        </div>
        <div css={[style.contactFormRow, isDark && style.contactFormRowDark]}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" required value={messageVal} onChange={(e) => setMessageVal(e.target.value)} />
        </div>
        <div css={[style.contactFormRow, isDark && style.contactFormRowDark]}>
          <label css={[style.checkbox, isDark && style.checkboxDark]}>
            <Checkbox checked={consentVal} onChange={handleCheckboxChange} theme={props.theme} />
            <span>
              I agree that my email address and name can be used to enable
              replying to my message.
            </span>
          </label>
          <p css={[style.infoText, isDark && style.infoTextDark]}>
            All personal data is handled according to the{' '}
            <Link to="/privacy_policy">Privacy Policy</Link>.
          </p>
        </div>
        <div css={style.contactFormActions}>
          <input
            css={style.submitBtn}
            type="submit"
            value="Send Message"
            disabled={!isSubmittable}
          />
        </div>
      </form>
    </div>
  );
}
