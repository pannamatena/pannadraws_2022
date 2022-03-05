import * as React from 'react';
import TextPage from '../components/TextPage';
import ContactForm from '../components/ContactForm';

export function Contact() {
  return (
    <div>
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
