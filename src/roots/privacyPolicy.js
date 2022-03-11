import * as React from 'react';
import ReactPixel from 'react-facebook-pixel';

export function PrivacyPolicy() {
  return (
    <div>
      {ReactPixel.pageView()}
      <h2>PP</h2>
    </div>
  );
}
