import * as React from 'react';
import TextPage from '../components/TextPage';

export function FormSuccess() {
  return (
    <div>
      <TextPage>
        <h1>Thank you!</h1>
        <p>Your message has been sent, I'll come back to you shortly!</p>
      </TextPage>
    </div>
  );
}

export function FormError() {
  return (
    <div>
      <TextPage>
        <h1>Oh no!</h1>
        <p>Something went wrong.</p>
      </TextPage>
    </div>
  );
}
