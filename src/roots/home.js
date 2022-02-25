import * as React from 'react';
import Banner from '../components/Banner';
import SegmentedLayout from '../components/SegmentedLayout';
import Newsletter, { NewsletterDescription } from '../components/Newsletter';
import { colours } from '../resources/colors';

export function Home() {
  return (
    <div>
      <Banner />
      <SegmentedLayout
        type="narrow"
        contentLeft={<NewsletterDescription />}
        contentRight={<Newsletter />}
        rightBackground={colours.c5}
      />
    </div>
  );
}
