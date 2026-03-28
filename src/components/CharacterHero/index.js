import React from 'react';
import ServiceHero from '../ServiceHero';
import ImgLarge from '../../resources/pictures/2025/lakeside_rest_2025_web.jpg';
import ImgDetail1 from '../../resources/pictures/2025/griys_2025_web.jpg';
import ImgDetail2 from '../../resources/pictures/2025/the_dragonslayer_2025_web.jpg';

export default function CharacterHero() {
  return (
    <ServiceHero
      eyebrow="Character & Creature Design"
      title="Your character,"
      accentText="brought to life."
      body="Portraits, party art, monster design and campaign illustrations — for D&D players, dungeon masters and world-builders. Handpainted traditional watercolour and mixed media artworks."
      primaryBtn={{ label: 'Commission a piece', href: '#contact_form' }}
      secondaryBtn={{ label: 'See examples', href: '#previous_work' }}
      imageGrid={[
        {
          src: ImgLarge,
          alt: 'Lakeside Rest — fantasy watercolour illustration by PannaDraws',
        },
        {
          src: ImgDetail1,
          alt: 'Griys — fantasy watercolour illustration by PannaDraws',
          objectPosition: 'center 15%',
        },
        {
          src: ImgDetail2,
          alt: 'The Dragonslayer — fantasy watercolour illustration by PannaDraws',
          scale: 1.5,
          transformOrigin: 'center 20%',
        },
      ]}
      imageFirst={false}
      theme="DARK"
    />
  );
}
