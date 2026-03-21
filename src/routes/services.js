import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import TextPage from '../components/TextPage';
import ContactForm from '../components/ContactForm';
import contactStyle from '../components/ContactForm/style';
import IllustrationsHero from '../components/IllustrationsHero';
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
      <PageSection>
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
      <TextPage>
        <h1>Character & Creature Design</h1>
        <div className="highlighted">
          <ContactForm msgSubj="Character and Creature Design inquiry" />
        </div>
      </TextPage>
    </div>
  );
}
