import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import style from './style';
import Checkbox from '../Checkbox';
import { validateEmail } from '../../resources/utils';
import { close, check } from '../../resources/icons';
import { colours } from '../../resources/colors';

function NewsletterForm({ status, message, onValidated }) {
  const [consentVal, setConsentVal] = useState('');
  const [emailIsWrong, setEmailIsWrong] = useState(false);
  let email, firstName, lastName;

  const handleCheckboxChange = (event) => {
    setConsentVal(event.target.checked);
  };

  const onSubmitClick = () => {
    console.log('onSubmitClick');
    console.log(validateEmail(email.value));
    if (!validateEmail(email.value)) {
      setEmailIsWrong(true);
    }
    return (
      email &&
      firstName &&
      lastName &&
      validateEmail(email.value) &&
      onValidated({
        EMAIL: email.value,
        FNAME: firstName.value,
        LNAME: lastName.value,
      })
    );
  };

  const getResultMsg = () => {
    switch (status) {
      case 'sending': {
        return (
          <div css={style.sendingMsg}>
            <span>Sending...</span>
          </div>
        );
      }
      case 'error': {
        return (
          <div css={style.errorMsg}>
            <i>{close()}</i>
            <span>Please fill all fields.</span>
          </div>
        );
      }
      case 'success': {
        return (
          <div css={style.successMsg}>
            <i>{check()}</i>
            <span>
              Thank you! A confirmation email has been sent to the address
              you've given.
            </span>
          </div>
        );
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div css={style.newsletterSignup}>
      <div css={style.newsletterForm}>
        <h2>Sign up to my email list!</h2>
        <div css={style.newsletterSplitFormRow}>
          <div>
            <label htmlFor="first_name">First Name</label>
            <input ref={(node) => (firstName = node)} type="text" required />
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input ref={(node) => (lastName = node)} type="text" required />
          </div>
        </div>
        <div css={style.newsletterFormRow}>
          <label htmlFor="email">Email</label>
          <input
            ref={(node) => (email = node)}
            css={css`
              background: ${emailIsWrong
                ? colours.c_error
                : colours.c2} !important;
            `}
            type="email"
            required
            onChange={() => setEmailIsWrong(false)}
          />
        </div>
        <div css={style.newsletterFormRow}>
          <label css={style.checkbox}>
            <Checkbox checked={consentVal} onChange={handleCheckboxChange} />
            <span>I would like to get monthly emails from PannaDraws.</span>
          </label>
          <p className="infoText">
            You can unsubscribe at any time by clicking the link in the footer
            of my emails. All personal data is handled according to the{' '}
            <Link to="/privacy_policy">Privacy Policy</Link>.
          </p>
          <p className="infoText">
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
        {emailIsWrong && (
          <div css={style.errorMsg}>
            <i>{close()}</i>
            <span>Please provide a valid email address.</span>
          </div>
        )}
        <div css={style.newsletterFormActions}>
          <button
            css={style.submitBtn}
            onClick={onSubmitClick}
            disabled={!consentVal}
          >
            Sign Me Up!
          </button>
        </div>
      </div>
    </div>
  );
}

export function NewsletterDescription() {
  return (
    <div css={style.newsletterDetails}>
      <ul>
        <li>free art printable on signup</li>
        <li>monthly emails with behind-the-scenes and exclusive content</li>
        <li>special offers only for subscribers</li>
        <li>art freebies every month</li>
      </ul>
    </div>
  );
}

export default function Newsletter() {
  return (
    <MailchimpSubscribe
      url={process.env.REACT_APP_MAILCHIMP_KEY}
      render={({ subscribe, status, message }) => (
        <NewsletterForm
          status={status}
          message={message}
          onValidated={(formData) => {
            subscribe(formData);
          }}
        />
      )}
    />
  );
}
