import * as React from 'react';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import TextPage from '../components/TextPage';
import ContactForm from '../components/ContactForm';
import Faq from '../components/Faq';
import PictureCard from '../components/pictureCard';
import Commission_BirdPortrait from '../resources/images/commission_bird_portrait.jpg';
import Commission_AnimalPortrait from '../resources/images/commission_animal_portrait.jpg';
import Commission_Colouring from '../resources/images/commission_colouring.jpg';
import Commission_FantasyArt from '../resources/images/commission_fantasy_art.mp4';
import Commission_InkArtwork from '../resources/images/commission_ink_artwork.jpg';
import Commission_Tattoo from '../resources/images/commission_tattoo.jpg';

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
          valuable, one of a kind treasure that will keep its value through the
          years to come.
          <div className="callToActionContainer callToActionContainer--center">
            <a
              className="btnCallToAction"
              href="#contact_form"
              title="Contact Panna about Commissions"
              onClick={() => {
                ReactPixel.trackCustom('ContactClick', {
                  source: 'CommissionPage',
                });
                ReactGA.event({
                  category: 'CommissionPage',
                  action: 'Clicked Contact',
                });
              }}
            >
              Get in touch!
            </a>
          </div>
        </p>
        <h2>How does it work?</h2>
        <p>
          If you've never commissioned art before it might look like an
          impossible process. "How do I explain my idea or wish to the artist?"
          "How can I make sure I get what I wanted, looking exactly how I wanted
          it?" Or "I'm not even sure how I want it to look!" "What if I don't
          like it?"
        </p>
        <p>
          These are common concerns but I'd like to answer every question you
          might have. Have a look at the{' '}
          <a
            href="#faq_container"
            title="Frequently Asked Questions about commissioning artwork from PannaDraws"
          >
            Frequently Asked Questions
          </a>{' '}
          below!
        </p>
        <div className="exampleContainer">
          <h3>So what can you commission?</h3>
          <PictureCard
            imgSrc={Commission_BirdPortrait}
            imgAlt="Irish Bird Art Commission from PannaDraws"
            title="Bird Portraits"
            rotation={-5}
          />
          <PictureCard
            imgSrc={Commission_AnimalPortrait}
            imgAlt="Farm animal portraits and wildlife art Commission from PannaDraws"
            title="Animal Portraits"
            rotation={2}
          />
          <PictureCard
            imgSrc={Commission_Colouring}
            imgAlt="Custom colouring pages from PannaDraws"
            title="Colouring Page"
            rotation={-7}
          />
          <PictureCard
            imgSrc={Commission_Tattoo}
            imgAlt="Tattoo commissions from PannaDraws"
            title="Tattoo Designs"
            rotation={5}
          />
          <PictureCard
            videoSrc={Commission_FantasyArt}
            imgAlt="Fantasy art commissions from PannaDraws"
            title="Fantasy Art"
          />
          <PictureCard
            imgSrc={Commission_InkArtwork}
            imgAlt="Ink art commissions from PannaDraws"
            title="Ink Drawings"
            rotation={-2}
          />
        </div>
        <div id="faq_container" className="faqContainer anchor">
          <h3>What to Know about Commissioning Artwork?</h3>
          <Faq />
        </div>
        <p>
          Still have questions? Let me know and I'll get back to you in 1-2
          business days!
        </p>
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
