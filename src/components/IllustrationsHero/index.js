import React from 'react';
import ServiceHero from '../ServiceHero';
import HeroImage from '../../resources/pictures/2024/the_dragon_meets_the_stag_2024_web.jpg';

export default function IllustrationsHero() {
  return (
    <ServiceHero
      eyebrow="Book & Story illustration"
      title="Your story,"
      accentText="painted."
      body="Watercolour fantasy illustrations for authors, publishers and storytellers who want art that feels like it was pulled from the pages. 100% traditional, handmade art from sketch to the last stroke."
      primaryBtn={{ label: 'Commission a piece', href: '#contact_form' }}
      secondaryBtn={{ label: 'See examples', href: '#previous_work' }}
      image={HeroImage}
      imageAlt="The Dragon Meets the Stag — fantasy watercolour illustration by PannaDraws"
      imagePosition="center 32%"
      imageFirst={true}
    />
  );
}
