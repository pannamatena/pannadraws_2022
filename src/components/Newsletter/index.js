import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import style from './style';
import Checkbox from '../Checkbox';
import { close, check } from '../../resources/icons';

export default function Newsletter() {
  const [firstNameVal, setFirstNameVal] = useState('');
  const [lastNameVal, setLastNameVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [consentVal, setConsentVal] = useState('');
  const [subResult, setSubResult] = useState('');

  const createMarkup = (story) => {
    return { __html: story };
  };

  const handleFirstNameChange = (value) => {
    setFirstNameVal(value);
  };
  const handleLastNameChange = (value) => {
    setLastNameVal(value);
  };
  const handleEmailChange = (value) => {
    setEmailVal(value);
  };
  const handleCheckboxChange = (event) => {
    setConsentVal(event.target.checked);
  };

  const resetForm = () => {
    setFirstNameVal('');
    setLastNameVal('');
    setEmailVal('');
    setConsentVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getResultMsg = () => {
    if (!subResult.result) {
      return null;
    }

    return subResult.result === 'success' ? (
      <span css={style.successSub}>
        <i>{check()}</i>
        {subResult.msg}
      </span>
    ) : (
      <span css={style.errorSub}>
        <i>{close()}</i>
        <span dangerouslySetInnerHTML={createMarkup(subResult.msg)} />
      </span>
    );
  };

  return (
    <div css={style.newsletterSignup}>
      <div css={style.newsletterDetails}>
        <h2>Sign up for PannaDraw's newsletter...</h2>
        <p>and get:</p>
        <ul>
          <li>free art printable on signup</li>
          <li>max 1 email per month</li>
          <li>news and exclusive insights of my studio work</li>
          <li>special offers only for subscribers</li>
          <li>art freebies every month</li>
        </ul>
      </div>
      <form
        css={style.newsletterForm}
        name="newsletter"
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <div css={style.newsletterSplitFormRow}>
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={firstNameVal}
              onChange={(e) => handleFirstNameChange(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={lastNameVal}
              onChange={(e) => handleLastNameChange(e.target.value)}
              required
            />
          </div>
        </div>
        <div css={style.newsletterFormRow}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={emailVal}
            onChange={(e) => handleEmailChange(e.target.value)}
            required
          />
        </div>
        <div css={style.newsletterFormRow}>
          <label css={style.checkbox}>
            <Checkbox checked={consentVal} onChange={handleCheckboxChange} />
            <span>I would like to get monthly emails from PannaDraws.</span>
          </label>
          <p css={style.infoText}>
            You can unsubscribe at any time by clicking the link in the footer
            of my emails. All personal data is handled according to the{' '}
            <Link to="/privacy_policy">Privacy Policy</Link>.
          </p>
          <p css={style.infoText}>
            I use Mailchimp as my marketing platform. By clicking below to
            subscribe, you acknowledge that your information will be transferred
            to Mailchimp for processing. See{' '}
            <a
              href="https://mailchimp.com/legal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mailchimp's privacy practices
            </a>
            .
          </p>
        </div>
        {getResultMsg()}
        <div css={style.newsletterFormActions}>
          <input css={style.submitBtn} type="submit" value="Sign Me Up!" />
        </div>
      </form>
    </div>
  );
}
