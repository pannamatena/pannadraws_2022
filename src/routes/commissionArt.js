import * as React from 'react';
/** @jsxImportSource @emotion/react */
import ReactPixel from 'react-facebook-pixel';
import ServiceHero from '../components/ServiceHero';
import PageSection from '../components/PageSection';
import CommissionTracks from '../components/CommissionTracks';
import OtherCommissions from '../components/OtherCommissions';
import ProcessStrip from '../components/ProcessStrip';
import CommissionFaq from '../components/CommissionFaq';
import ContactForm from '../components/ContactForm';
import contactStyle from '../components/ContactForm/style';
import { colours } from '../resources/colors';
import HeroImage from '../resources/pictures/2025/rosehips_2025_web.jpg';

export function CommissionArt() {
  return (
    <div>
      {ReactPixel.pageView()}
      <ServiceHero
        eyebrow="Commission Artwork"
        title="Every painting starts with"
        accentText="your idea."
        body="Whether you have a detailed brief or just a feeling — I work with you from first sketch to finished painting. Here's everything you need to know before we get started."
        primaryBtn={{
          label: 'Order on Etsy',
          href: 'https://www.etsy.com/ie/listing/1199705464',
          external: true,
        }}
        secondaryBtn={{ label: 'Send a message', href: '#contact_form' }}
        image={HeroImage}
        imageAlt="Rosehips — fantasy watercolour illustration by PannaDraws"
        imagePosition="center 40%"
        imageFirst={true}
      />
      <PageSection>
        <CommissionTracks />
      </PageSection>
      <PageSection>
        <OtherCommissions />
      </PageSection>
      <ProcessStrip
        stepOverrides={{
          Brief: {
            desc: 'Tell me your idea, characters and the feeling you want',
          },
          Sketch: {
            desc: 'Rough compositions sent for your feedback and approval',
          },
          Paint: { desc: 'Final artwork with revision rounds included' },
          Deliver: { desc: 'Your unique, original artwork is shipped.' },
        }}
      />
      <PageSection>
        <CommissionFaq />
      </PageSection>
      <PageSection background={colours.c2} flushBottom id="contact_form">
        <p css={contactStyle.sectionEyebrow}>Ready to get started?</p>
        <h2 css={contactStyle.sectionHeading}>
          Let's make something together.
        </h2>
        <p css={contactStyle.sectionSubtext}>
          Order directly on Etsy, or send me a message to discuss your idea
          first.
        </p>
        <ContactForm msgSubj="Commission Artwork" theme="DARK" />
      </PageSection>
    </div>
  );
}
