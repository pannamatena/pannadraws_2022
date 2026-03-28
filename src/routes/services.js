import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import ContactForm from '../components/ContactForm';
import contactStyle from '../components/ContactForm/style';
import IllustrationsHero from '../components/IllustrationsHero';
import CharacterHero from '../components/CharacterHero';
import CharacterTracks from '../components/CharacterTracks';
import CharacterGallery from '../components/CharacterGallery';
import CharacterFaq from '../components/CharacterFaq';
import CtaBanner from '../components/CtaBanner';
import ServicesStrip from '../components/ServicesStrip';
import PageSection from '../components/PageSection';
import WorkGallery from '../components/WorkGallery';
import ProcessStrip from '../components/ProcessStrip';
import { colours } from '../resources/colors';

const illustrationServices = [
  {
    heading: 'Book Covers',
    text: 'Full cover illustration or front panel art',
  },
  { heading: 'Chapter Art', text: 'Headers, vignettes and spot illustrations' },
  { heading: 'Character Portraits', text: 'Your protagonist or cast, painted' },
  {
    heading: 'World Art',
    text: 'Fantasy environment pieces and world building',
  },
];

export function Illustrations() {
  return (
    <div>
      {ReactPixel.pageView()}
      <IllustrationsHero />
      <ServicesStrip items={illustrationServices} />
      <PageSection id="previous_work">
        <WorkGallery />
      </PageSection>
      <ProcessStrip />
      <PageSection background={colours.c2} flushBottom id="contact_form">
        <p css={contactStyle.sectionEyebrow}>Commissions Open</p>
        <h2 css={contactStyle.sectionHeading}>
          Ready to bring your story to life?
        </h2>
        <p css={contactStyle.sectionSubtext}>
          Typically 2–4 weeks · High-res files included · Original available ·{' '}
          <Link to="/terms_and_licencing">See Terms &amp; Licencing</Link>
        </p>
        <ContactForm msgSubj="Illustration inquiry" theme="DARK" />
      </PageSection>
    </div>
  );
}

export function CharacterCreatureDesign() {
  return (
    <div>
      {ReactPixel.pageView()}
      <CharacterHero />
      <PageSection>
        <CharacterTracks />
      </PageSection>
      <PageSection>
        <CtaBanner
          title="Ready to bring your character to life?"
          text="Order on Etsy for immediate checkout · Message me to discuss your idea first"
          buttonLabel="Order on Etsy"
          buttonHref="https://www.etsy.com/ie/listing/1199705464/"
          buttonVariant="primary"
          buttonExternal
          secondButton={{
            label: 'Send me a message',
            href: '#contact_form',
            variant: 'outlineBlack',
          }}
        />
      </PageSection>
      <PageSection id="previous_work">
        <CharacterGallery />
      </PageSection>
      <PageSection background={colours.c2}>
        <CtaBanner
          title="Like what you see? Let's make something together."
          buttonLabel="Order on Etsy"
          buttonHref="https://www.etsy.com/ie/listing/1199705464/"
          buttonVariant="primary"
          buttonExternal
          secondButton={{
            label: 'Ask me first',
            href: '#contact_form',
            variant: 'outlineWhite',
          }}
          theme="DARK"
        />
      </PageSection>
      <ProcessStrip
        stepOverrides={{
          Paint: {
            desc: 'Final artwork with frequent updates on the progress.',
          },
          Deliver: { desc: 'Your unique, original artwork is shipped.' },
        }}
      />
      <PageSection background={colours.c_light_brown}>
        <CharacterFaq />
      </PageSection>
      <PageSection>
        <CtaBanner
          title="Still have questions? Just ask."
          text="Happy to chat through your idea before you commit to anything."
          buttonLabel="Send me a message"
          buttonHref="#contact_form"
          buttonVariant="outlineRed"
          secondButton={{
            label: 'Go straight to Etsy',
            href: 'https://www.etsy.com/ie/listing/1199705464/',
            variant: 'outlineBlack',
            external: true,
          }}
        />
      </PageSection>
      <PageSection background={colours.c1} flushBottom id="contact_form">
        <p css={[contactStyle.sectionEyebrow, contactStyle.sectionEyebrowRed]}>Commissions Open</p>
        <h2 css={contactStyle.sectionHeading}>
          Ready to commission your piece?
        </h2>
        <p css={[contactStyle.sectionSubtext, contactStyle.sectionSubtextRed]}>
          Get in touch to discuss your idea — no commitment required
        </p>
        <ContactForm
          msgSubj="Character and Creature Design inquiry"
          theme="RED"
        />
      </PageSection>
    </div>
  );
}
