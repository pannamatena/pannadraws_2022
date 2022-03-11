import * as React from 'react';
import ReactPixel from 'react-facebook-pixel';

export function ReturnPolicy() {
  return (
    <div>
      {ReactPixel.pageView()}
      <h2>RP</h2>
    </div>
  );
}
