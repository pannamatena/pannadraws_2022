import * as React from 'react';
import Img from 'react-cool-img';
import ReactPixel from 'react-facebook-pixel';
import TextPage from '../components/TextPage';
import Image_me from '../resources/images/me.jpg';
import Image_me_at_work from '../resources/images/me_at_work.jpg';
import Image_me_hunting from '../resources/images/me_hunting.jpg';
import Image_my_workspace from '../resources/images/my_workspace.jpg';

export function About() {
  return (
    <div>
      {ReactPixel.pageView()}
      <TextPage>
        <h1>About</h1>
        <h2>I paint because I can't sit on my butt!</h2>
        <p>
          Panna is a self-taught watercolour artist based in Dublin, Ireland.
        </p>
        <p>
          She was born and raised in Budapest, Hungary. Childhood adventures at
          Lake Balaton or the river Danube all left a mark on her as she learnt
          how to observe nature, learn the call of birds and other animals,
          recognise plants and herbs.
        </p>
        <p>
          In 2009 she graduated from college where with a major in English
          Literature and Culture, writing her thesis on "Dragons in Celtic
          Mythology and Literature" and marking officially her interest in
          myths, folklore and the supernatural.
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
          Through her teenage years Panna was mostly interested in digital art,
          but as the years went by she found her love for the traditional. She
          believes painting with traditional media is more challenging for her
          as it doesn't offer the option to go back and fix mistakes later. That
          is, there's no undo!
        </p>
        <p>
          She decided to turn this passion into business in 2019, just before
          the pandemic started, making her face new challenges in the changed
          situation. The lockdown made it possible for her to connect with
          nature even more, as social events were forbidden, and for someone who
          can't stay idle for long the only option remaining was getting out
          into the wild.
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
          This extra time in the wilderness of Ireland enabled her to discover
          more about the connection of humans, the natural and the supernatural
          world, which forms the core of her work. Folklore and myth all emerge
          from the research of this connection, the drive to explain humanity's
          place in this universe, and Panna's art is one way to find answers to
          this ultimate question: how do we see this world, and ourselves in it?
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
      </TextPage>
    </div>
  );
}
