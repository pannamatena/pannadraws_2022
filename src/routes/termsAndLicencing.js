import * as React from 'react';
import ReactPixel from 'react-facebook-pixel';
import TextPage from '../components/TextPage';

export function TermsAndLicencing() {
  return (
    <div>
      {ReactPixel.pageView()}
      <TextPage>
        <h1>Terms and Licencing</h1>
      </TextPage>
    </div>
  );
}
