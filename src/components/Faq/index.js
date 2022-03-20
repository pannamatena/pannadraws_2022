import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import style from './style';

export default function Faq() {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  function handleFaqTitleClick(faqId) {
    if (openQuestionId === faqId) {
      setOpenQuestionId(null);
    } else {
      setOpenQuestionId(faqId);
    }
  }

  return (
    <div className="textPage" css={style.faq}>
      <h2>How to Order</h2>
      <div
        id="q_1"
        css={style.faqQuestion}
        className={openQuestionId === 'q_1' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_1')}>
          I like your art, how do I start?
        </h5>
        <p>
          The easiest way is to{' '}
          <a
            href="#contact_form"
            title="contact Panna about an art commission!"
          >
            send me a message
          </a>{' '}
          and we can discuss the details like what is it you would like me to
          paint, how much it will cost, when do you need the finished picture,
          etc. Alternatively you can check out the listings I have in{' '}
          <a
            href="https://www.etsy.com/shop/pannadraws/?section_id=32291570"
            title="PannaDraws commissions on Etsy"
            target="_blank"
            rel="noopener noreferrer"
          >
            my shop
          </a>{' '}
          that can give you a guidance on prices and more details on how the
          process works. You can also purchase the commission there!
          <br />
          <br />
          But since commissioning artwork is a very personal matter, I'm more
          than happy to discuss the details first and make an offer after.
        </p>
      </div>
      <div
        id="q_17"
        css={style.faqQuestion}
        className={openQuestionId === 'q_17' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_17')}>
          Can I give you a photo to paint from?
        </h5>
        <p>
          Absolutely! Many times I paint a commission the subject is a pet, in
          which case the reference is essential.
          <br />
          <br />
          When it comes to pictures found on the Internet, however, I cannot
          "copy" any photo that came up in Google, that is against copyright
          rules. I can use these images only as inspiration, and if you'd like
          to provide some to better explain your idea by all means do so!
        </p>
      </div>
      <div
        id="q_18"
        css={style.faqQuestion}
        className={openQuestionId === 'q_18' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_18')}>
          I don't have photos of the thing I want, can you still paint it?
        </h5>
        <p>
          No problem, I have a big stock of resource images I took on my
          journeys, so it's very likely that I have a reference to work from.
          <br />
          <br />
          When it comes to pictures found on the Internet, however, I cannot
          "copy" any photo that came up in Google, that is against copyright
          rules. I can use these images only as inspiration, and if you'd like
          to provide some to better explain your idea by all means do so!
        </p>
      </div>
      <div
        id="q_2"
        css={style.faqQuestion}
        className={openQuestionId === 'q_2' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_2')}>
          I'd like a painting of a thing you don't usually paint, is that
          possible?
        </h5>
        <p>
          Let me know what you have in mind! I like unusual requests, they
          challenge my creativity. However, a general rule is that I don't take
          sexual, racist or obscene subjects, and I don't copy other people's
          artworks.
        </p>
      </div>
      <div
        id="q_3"
        css={style.faqQuestion}
        className={openQuestionId === 'q_3' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_3')}>
          I like one of your sold artworks, can you remake it?
        </h5>
        <p>
          An original painting is unique, because only one of it exists. Even if
          it would be possible I wouldn't recreate the exact same artwork, but I
          can take it as an inspiration for a new one.
          <br />
          <br />
          Let me know what you liked about that painting! The mood? The figure?
          The pose? I'm sure in the end you'll get one you'll like even more!
        </p>
      </div>

      <h2>Payment</h2>
      <div
        id="q_16"
        css={style.faqQuestion}
        className={openQuestionId === 'q_16' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_16')}>
          How much does it cost?
        </h5>
        <p>
          The pricing of a commissioned artwork depends on a few different
          factors: how big the painting is, how many figures there are, how
          complex the background is, how quickly you need it, etc.
          <br />
          <br />
          If you'd like a rough idea about the prices please see my commission
          listings in{' '}
          <a
            href="https://www.etsy.com/shop/pannadraws/?section_id=32291570"
            title="PannaDraws commissions on Etsy"
            target="_blank"
            rel="noopener noreferrer"
          >
            my Etsy shop
          </a>
          . These prices reflect quite well the general pricing I use when it
          comes to commissions!
        </p>
      </div>
      <div
        id="q_4"
        css={style.faqQuestion}
        className={openQuestionId === 'q_4' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_4')}>
          Do you take an advance payment? Or do I pay in full?
        </h5>
        <p>
          If you purchase your commission through{' '}
          <a
            href="https://www.etsy.com/shop/pannadraws/?section_id=32291570"
            title="PannaDraws commissions on Etsy"
            target="_blank"
            rel="noopener noreferrer"
          >
            my Etsy shop
          </a>{' '}
          you have to pay the full amount in advance. But I'm flexible on the
          matter, most people like to pay the first half in advance, and the
          rest when the painting is finished.
          <br />
          <br />
          If you'd like to pay in parts please{' '}
          <a
            href="#contact_form"
            title="contact Panna about an art commission!"
          >
            contact me
          </a>
          ! Please note that the finished artwork will not be posted before the
          full payment is complete.
        </p>
      </div>
      <div
        id="q_5"
        css={style.faqQuestion}
        className={openQuestionId === 'q_5' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_5')}>
          Can I pay by Paypal/Card/etc?
        </h5>
        <p>
          I take PayPal payments if you're buying from the EU. If you buy your
          commission through{' '}
          <a
            href="https://www.etsy.com/shop/pannadraws/?section_id=32291570"
            title="PannaDraws commissions on Etsy"
            target="_blank"
            rel="noopener noreferrer"
          >
            my Etsy shop
          </a>{' '}
          you can pay by card too. If you would like to use online card payment
          or you're outside the EU I will create a custom listing through Etsy
          because of the different taxes that apply to different countries.
          <br />
          <br />
          Please note I don't take cash, cheque or any other type of payment.
        </p>
      </div>

      <h2>The Process</h2>
      <div
        id="q_6"
        css={style.faqQuestion}
        className={openQuestionId === 'q_6' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_6')}>
          Can I see how the final artwork will look like?
        </h5>
        <p>
          Yes! When you order and either paid the full price or the first half I
          start making sketches that I'll send you usually in 2-3 days. If you
          like or don't like anything in them I can easily modify these.
          <br />
          <br />
          Once you're happy with the plan I start working on the final artwork!
          If you want I can send you in progress photos of how it's made.
        </p>
      </div>
      <div
        id="q_7"
        css={style.faqQuestion}
        className={openQuestionId === 'q_7' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_7')}>
          Can I make changes if I don't like something?
        </h5>
        <p>
          In the beginning I make some sketches to help visualise the final
          artwork. You can tell me if you like or don't like something about
          them, so I can come up with a final sketch that will serve as the
          foundation for the final artwork.
          <br />
          <br />
          After I start working on the final painting I can't make big changes
          to the picture, as watercolour doesn't allow painting over already
          painted areas.
        </p>
      </div>
      <div
        id="q_8"
        css={style.faqQuestion}
        className={openQuestionId === 'q_8' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_8')}>
          Can I see your progress?
        </h5>
        <p>
          If you want I can send you in progress photos of the work! Just let me
          know if you'd like that.
        </p>
      </div>
      <div
        id="q_9"
        css={style.faqQuestion}
        className={openQuestionId === 'q_9' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_9')}>
          I want to make changes while the final painting is in progress.
        </h5>
        <p>
          Ideally when I start working on the final painting it shouldn't and
          cannot be changed any more. Watercolour doesn't allow painting over
          already painted areas, so I can't change what's already painted. This
          is why the initial sketches are made in the beginning, to make sure
          everything is in order when I start working on the final picture.
          <br />
          <br />
          Making sure you get exactly what you're happy with is important to me,
          so if you have any change requests please let me know anyway. I'll see
          what I can do in order to fix them. However, once started I can't
          start the whole work again.
        </p>
      </div>
      <div
        id="q_10"
        css={style.faqQuestion}
        className={openQuestionId === 'q_10' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_10')}>
          I would like to have my painting framed.
        </h5>
        <p>
          No problem! I can get your painting professionally framed. The basic
          frame I usually get is black or white solid wooden frame with 70%
          UV-protective and non-reflective glass, with a white photo mount
          inside. The price depends on the size, but it's usually between 50-100
          EUR up to size A3.
          <br />
          <br />
          I don't recommend getting paintings larger than size A3 framed before
          shipping because it makes them much more expensive to ship and much
          more fragile.
          <br />
          <br />
          Frames, mounts and mounting techniques are available in many other
          styles, if you'd like something special please let me know!
        </p>
      </div>

      <h2>Shipping</h2>
      <div
        id="q_19"
        css={style.faqQuestion}
        className={openQuestionId === 'q_19' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_19')}>
          Which countries do you ship to?
        </h5>
        <p>
          Currently I ship to the following countries: all EU countries, USA and
          UK.
        </p>
      </div>
      <div
        id="q_11"
        css={style.faqQuestion}
        className={openQuestionId === 'q_11' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_11')}>
          How do you ship artworks?
        </h5>
        <p>
          Original artwork is by default shipped with tracking (registered post)
          wit An Post (the Irish post).
          <br />
          <br />
          Small artworks are packed flat in large envelopes, while larger ones
          are rolled up into posting tubes to avoid bending. Framed artwork is
          bubble wrapped several times then packed into a custom made cardboard
          box I make to fit it tightly and prevent sliding inside the box.
        </p>
      </div>
      <div
        id="q_12"
        css={style.faqQuestion}
        className={openQuestionId === 'q_12' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_12')}>
          I live outside of Ireland. Do you ship here, too?
        </h5>
        <p>
          I currently ship to all EU countries, USA and UK. However, any
          purchase outside EU must go through my Etsy shop.
        </p>
      </div>
      <div
        id="q_13"
        css={style.faqQuestion}
        className={openQuestionId === 'q_13' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_13')}>
          How is the artwork packed?
        </h5>
        <p>
          Small artworks are packed flat in large envelopes, while larger ones
          are rolled up into posting tubes to avoid bending. Framed artwork is
          bubble wrapped several times then packed into a custom made cardboard
          box I make to fit it tightly and prevent sliding inside the box.
        </p>
      </div>
      <div
        id="q_14"
        css={style.faqQuestion}
        className={openQuestionId === 'q_14' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_14')}>
          Can I return the painting?
        </h5>
        <p>
          Normally paintings made to order are not eligible for return. I have a
          thorough process in the beginning of a commissioned work to ensure you
          will be happy with the result. Unfortunately a custom made item cannot
          be returned therefore.
          <br />
          <br />
          For more information please refer to my{' '}
          <Link to="/return_policy">Return Policy</Link>.
        </p>
      </div>
      <div
        id="q_15"
        css={style.faqQuestion}
        className={openQuestionId === 'q_15' ? 'open' : ''}
      >
        <h5 css={style.faqTitle} onClick={() => handleFaqTitleClick('q_15')}>
          The painting was damaged when I received it!
        </h5>
        <p>
          Unfortunately accidents happen in transit despite all care that's
          taken when packing paintings. Please send me a photo of the damage and
          I'll try to sort it out for you!
          <br />
          <br />
          You can also check out my{' '}
          <Link to="/return_policy">Return Policy</Link> for more information.
        </p>
      </div>
    </div>
  );
}
