import * as React from 'react';
import Img from 'react-cool-img';
import ReactPixel from 'react-facebook-pixel';
import TextPage from '../components/TextPage';
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
        <h1>About</h1>
        <h2 className="quoteHighlight">
          It says "fantasy and animal" art, but in truth all my subjects are
          magical.
        </h2>
        <p>
          I'm Panna, a self-taught watercolour artist based in Dublin, Ireland.
        </p>
        <p>
          I was born and raised in Budapest, Hungary but childhood adventures at
          Lake Balaton or along the river Danube made me feel at home in the
          wild while I went fishing with my dad, or sneaked away to catch water
          snakes and bring them out from the reeds in a boquet to my mom's
          greatest horror... I've always liked getting first-hand experience
          with animals.
        </p>
        <p>
          But there was something else that fascinated me just as much: stories
          of dragons and magical beasts, myths and legends of old times.
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
          I decided to turn this passion into business in 2019, just before the
          pandemic started. The lockdown left me only one option to escape the
          monotony of everyday life: I got out to the Irish wilderness. I had to
          realise there I'm never really isolated when I'm in the wild,
          surrounded by life. And I wanted to share what I see with others, to
          show that this magic is there for everyone.
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
          But how do I show what I see? That nature is beautiful, but terrible.
          It's brutal, ruthless and dark, but it's also romantic, clever, and
          full of wonders. This is what drove my style: it's feminine, but
          tough, and even the prettiest thing has something gloomy lurking
          there. Just like me, or you, or anyone: it's not black or white, it's
          both. Yin and Yang.
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
          I keep discovering and creating as there's so much to show! Recently I
          started exploring the wild ancestry in domesticated animals and pets,
          but I also often return to the subject of wild birds and mythical
          beasts.
        </p>
        <p>
          Now that the world is open again there are new opportunities for me to
          find this magic out there and turn it into my muse. If you would like
          to be part of this adventure follow me on{' '}
          <a
            href="https://www.facebook.com/pannadraws"
            target="_blank"
            rel="noopener noreferrer"
            title="PannaDraws on Facebook"
          >
            Facebook
          </a>{' '}
          or{' '}
          <a
            href="https://www.instagram.com/pannamatena/"
            target="_blank"
            rel="noopener noreferrer"
            title="PannaDraws on Instagram"
          >
            Instagram
          </a>
          , or <Link to="/">sign up to my email list</Link>!
          <br />
          Let's explore what's beyond the obvious!
        </p>
      </TextPage>
    </div>
  );
}
