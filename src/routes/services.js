import * as React from 'react';
import ReactPixel from 'react-facebook-pixel';
import TextPage from '../components/TextPage';
import ContactForm from '../components/ContactForm';

export function Illustrations() {
  return (
    <div>
      {ReactPixel.pageView()}
      <TextPage>
        <h1>Illustrations</h1>
        <div className="highlighted">
          <ContactForm msgSubj="Illustration inquiry" />
        </div>
      </TextPage>
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
