import * as React from 'react';
import ReactPixel from 'react-facebook-pixel';
import TextPage from '../components/TextPage';
import ContactForm from '../components/ContactForm';
import Faq from '../components/Faq';

export function CommissionArt() {
  return (
    <div>
      {ReactPixel.pageView()}
      <TextPage>
        <h1>Commission Artwork</h1>
        <p className="highlighted">
          I take art commissions! Creating a personalized piece of art is both a
          challenge and a privilege for me, knowing you trust me and my skills
          to create something unique. Let it be a gift for someone else, or a
          treat for yourself, one thing is sure: a custom made artwork will be a
          valuable, one of a kind ornament that will keep its value through the
          years to come.
          <div className="callToActionContainer callToActionContainer--center">
            <a className="btnCallToAction" href="#contact_form">
              Get in touch!
            </a>
          </div>
        </p>
        <h2>How does it work?</h2>
        <p>
          If you've never commissioned art before it might look like an
          impossible process. "How do I explain my idea or wish to the artist,
          who's a stranger to me?" "How can I make sure I get what I wanted,
          looking exactly how I wanted it?" Or "I'm not even sure how I want it,
          I'm not artist!" "What if I don't like it, I don't want to be rude and
          say so!"
        </p>
        <p>
          If you have any questions either like the ones above, or different
          ones, have a look at the FAQ below:
        </p>
        <h3>What to Know about Commissioning Artwork?</h3>
        <div className="faqContainer">
          <Faq />
        </div>
        <div id="contact_form" className="anchor">
          <div className="highlighted">
            <h4>Tell me about your painting!</h4>
            <ContactForm msgSubj="Commission Artwork" />
          </div>
        </div>
      </TextPage>
    </div>
  );
}
