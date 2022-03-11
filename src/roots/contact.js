import * as React from 'react';
import ReactPixel from 'react-facebook-pixel';
import TextPage from '../components/TextPage';
import ContactForm from '../components/ContactForm';

export function Contact() {
  return (
    <div>
      {ReactPixel.pageView()}
      <TextPage>
        <h1>Contact</h1>
        <p>
          You can get in touch by filling this form below and sending me an
          email.
        </p>
        <ContactForm />
      </TextPage>
    </div>
  );
}
