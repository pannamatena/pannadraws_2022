import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactPixel from 'react-facebook-pixel';
import TextPage from '../components/TextPage';
import ContactForm from '../components/ContactForm';
import IllustrationsHero from '../components/IllustrationsHero';
import ServicesStrip from '../components/ServicesStrip';
import PageSection from '../components/PageSection';
import WorkGallery from '../components/WorkGallery';
import ProcessStrip from '../components/ProcessStrip';
import { colours } from '../resources/colors';

const illustrationServices = [
  { heading: 'Book Covers', text: 'Full cover illustration or front panel art' },
  { heading: 'Chapter Art', text: 'Headers, vignettes and spot illustrations' },
  { heading: 'Character Portraits', text: 'Your protagonist or cast, painted' },
  { heading: 'Maps & World Art', text: 'Fantasy maps and environment pieces' },
];

export function Illustrations() {
  return (
    <div>
      {ReactPixel.pageView()}
      <IllustrationsHero />
      <PageSection>
        <ServicesStrip items={illustrationServices} />
      </PageSection>
      <PageSection>
        <WorkGallery />
      </PageSection>
      <ProcessStrip />
      <PageSection background={colours.c2} flushBottom id="contact_form">
        <h2 css={css`color: ${colours.c5};`}>Ready to bring your story to life?</h2>
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
