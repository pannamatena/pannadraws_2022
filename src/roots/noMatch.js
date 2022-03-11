import * as React from 'react';
import { Link } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

export function NoMatch() {
  return (
    <div>
      {ReactPixel.pageView()}
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
