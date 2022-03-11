import * as React from 'react';
import ReactPixel from 'react-facebook-pixel';

export function CommissionArt() {
  return (
    <div>
      {ReactPixel.pageView()}
      <h2>Commission Art</h2>
    </div>
  );
}
