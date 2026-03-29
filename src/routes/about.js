import * as React from 'react';
/** @jsxImportSource @emotion/react */
import Img from 'react-cool-img';
import ReactPixel from 'react-facebook-pixel';
import TextPage from '../components/TextPage';
import PageSection from '../components/PageSection';
import CtaBanner from '../components/CtaBanner';
import Image_me from '../resources/images/me.jpg';
import Image_me_at_work from '../resources/images/me_at_work.jpg';
import Image_me_hunting from '../resources/images/me_hunting.jpg';
import Image_my_workspace from '../resources/images/my_workspace.jpg';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div>
      {ReactPixel.pageView()}
      <TextPage>
        <h1>The artist behind the magic</h1>
        <h2 className="quoteHighlight">
          I bring to life the creatures that lived only in your imagination —
          and the worlds they come from. I'm a creator.
        </h2>
        <p>
          I'm Panna, a watercolour artist based in Dublin, Ireland. I paint
          fantasy illustrations — book covers, character portraits, creature
          designs and story art — all by hand, using traditional media.
        </p>
        <p>
          I was born and raised in Budapest, Hungary but childhood adventures at
          Lake Balaton or along the river Danube made me feel at home in the
          wild while I went fishing with my dad, or sneaked away to catch water
          snakes and bring them out from the reeds in a bouquet to my mom's
          greatest horror... I've always liked getting first-hand experience
          with animals.
        </p>
        <p>
          But there was something else that fascinated me just as much: stories
          of dragons and magical beasts, myths and legends of old times. Books
          where the illustrations pulled you into another world entirely.
          Secretly I always imagined all that magic was true, just hidden.
        </p>
        <div className="imgBlock">
          <div className="imgContainer imgContainer--rotateLeft">
            <Img
              lazy
              cache
              alt="Panna in her awesome unicorn tee"
              src={Image_me}
            />
          </div>
          <div className="imgContainer imgContainer--rotateRight">
            <Img
              lazy
              cache
              alt="Panna at work while her boss is supervising the job done"
              src={Image_me_at_work}
            />
            <span>
              Panna at work while her boss is supervising the job done
            </span>
          </div>
        </div>

        <p>
          All my school textbooks were full of doodles of birds, horses, stags
          and of course dragons, unicorns and gryphons. I always had a
          sketchbook with me, and now maybe it's safe to admit I had it open
          during most classes...
        </p>
        <p>
          I decided to turn this passion into a business in 2019, just before
          the pandemic started. The lockdown left me only one option to escape
          the monotony of everyday life: I got out into the Irish wilderness. I
          realised I'm never truly isolated when I'm in the wild — surrounded by
          life, colour and story. I wanted to share what I see with others, to
          show that the magic is there for everyone.
        </p>
        <div className="imgContainer imgContainer--rotateLeft">
          <Img
            lazy
            cache
            alt="Panna sketching 'The Robin'"
            src={Image_my_workspace}
          />
          <span>Panna sketching "The Robin"</span>
        </div>
        <p>
          BBut how do I show what I see? Nature is beautiful, but terrible. It's
          brutal, ruthless and dark, but also romantic, clever and full of
          wonders. This is what drove my style: it's feminine, but tough, and
          even the prettiest thing has something gloomy lurking there. Just like
          me, or you, or anyone — it's not black or white. It's both. Yin and
          Yang.
        </p>
        <div className="imgContainer imgContainer--rotateRight">
          <Img
            lazy
            cache
            alt="Panna on the hunt for good reference photos at the Bull Island bird sanctuary"
            src={Image_me_hunting}
          />
          <span>Panna on the hunt for good reference photos</span>
        </div>
        <p>
          I keep discovering new worlds to paint. My work has always moved
          between wildlife and fantasy — the wild creatures of Ireland and
          Hungary on one side, dragons and mythical beasts on the other — and
          lately those two worlds have started to bleed into each other in the
          most interesting ways. There's wildness in every monster I draw, and
          magic in every animal.
        </p>
        <p>
          If you'd like to follow the adventure, you'll find me on{' '}
          <a
            href="https://www.facebook.com/pannadraws"
            target="_blank"
            rel="noopener noreferrer"
            title="PannaDraws on Facebook"
          >
            Facebook
          </a>{' '}
          and{' '}
          <a
            href="https://www.instagram.com/pannamatena/"
            target="_blank"
            rel="noopener noreferrer"
            title="PannaDraws on Instagram"
          >
            Instagram
          </a>
          , or you can <Link to="/">join my email list</Link> for
          behind-the-scenes work and early access to new pieces. And if my work
          speaks to you — if you have a story, a character, or a creature that
          deserves to exist on paper — I'd love to bring it to life.
        </p>
      </TextPage>
      <PageSection>
        <CtaBanner
          title="Commission a piece"
          buttonLabel="Illustration commissions"
          buttonHref="/illustrations"
          buttonVariant="primary"
          secondButton={{ label: 'Characters & Creatures', href: '/characterCreatureDesign', variant: 'primary' }}
        />
      </PageSection>
    </div>
  );
}
