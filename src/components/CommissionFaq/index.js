import React from 'react';
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import style from './style';

const sections = [
  {
    label: 'How to order',
    items: [
      {
        q: 'How do I start?',
        answerParts: [
          { label: 'Send me a message', href: '#contact_form' },
          ' or order directly through my ',
          {
            label: 'Etsy shop',
            href: 'https://www.etsy.com/shop/pannadraws/?etsrc=sdt&section_id=32291570',
            external: true,
          },
          ". I'm happy to discuss your idea before you commit to anything.",
        ],
      },
      {
        q: 'Can I give you a photo to paint from?',
        a: 'Absolutely — for pet and animal portraits especially, reference photos are essential.',
      },
      {
        q: "I don't have photos — can you still paint it?",
        a: 'No problem. I have a large library of reference images, and for fantasy subjects I work from description.',
      },
      {
        q: 'Can you paint something unusual?',
        a: "I like unusual requests — they challenge my creativity. I only decline pornographic, racist or obscene subjects, and I don't copy other artists' work.",
      },
      {
        q: 'Can I order without using Etsy?',
        a: "No, at the moment I'm only taking orders through Etsy.",
      },
      {
        q: 'Do you take commissions?',
        answerParts: [
          'Yes! ',
          { label: 'Contact me', href: '#contact_form' },
          ' and we can discuss the details. I work on both personal and commercial commissions.',
        ],
      },
    ],
  },
  {
    label: 'Payment',
    items: [
      {
        q: 'How much does it cost?',
        answerParts: [
          'Pricing depends on size, complexity, number of figures and turnaround time. Check my ',
          {
            label: 'Etsy listings',
            href: 'https://www.etsy.com/shop/pannadraws/?etsrc=sdt&section_id=32291570',
            external: true,
          },
          ' for current prices as a guide.',
        ],
      },
      {
        q: 'Do I pay upfront or at the end?',
        a: 'Most clients pay the full price upfront. Full upfront payment is required for most commissions, but when you commission illustrations or other licenced artwork I accept half the payment upfront, and the rest on completion.',
      },
      {
        q: 'Does the price include taxes and shipping?',
        a: 'Prices are in Euro. Taxes may vary per country and are shown at Etsy checkout. Shipping costs are calculated at checkout based on your destination.',
      },
      {
        q: 'What payment methods do you accept?',
        answerParts: [
          'All purchases go through my Etsy shop, which means I accept ',
          {
            label: 'a wide variety',
            href: 'https://help.etsy.com/hc/en-us/articles/360026831353-What-Payment-Methods-Can-I-Use-to-Check-Out-on-Etsy?segment=shopping',
            external: true,
          },
          " of payment methods through Etsy Payments, including credit/debit cards (Visa, Mastercard, Amex, Discover), PayPal, Apple Pay, Google Pay, and Etsy Gift Cards/Credits. There are some other supported, region-specific options like Klarna installments, iDEAL (Netherlands), and bank transfers, with options varying by country. I don't accept cash or cheques.",
        ],
      },
      {
        q: 'What about copyright?',
        a: 'Copyright stays with me. You receive the artwork and the right to use it for agreed purposes. Commercial use requires a separate licence — ',
        link: { to: '/terms_and_licencing', label: 'see full terms' },
        highlighted: true,
      },
    ],
  },
  {
    label: 'The process',
    items: [
      {
        q: 'Can I see sketches first?',
        a: 'Yes — I always send rough sketches before starting the final piece. You can request changes at this stage.',
      },
      {
        q: 'Can I make changes?',
        a: "Changes are easy during the sketch stage. Once the watercolour is in progress, major changes aren't possible — watercolour can't be painted over.",
      },
      {
        q: 'Can I see progress photos?',
        a: "Yes, just let me know when you order and I'll send updates as the painting develops. I always send updates at major milestones of the process!",
      },
      {
        q: 'Can I get it framed?',
        a: 'Yes — for paintings sized up to 12x16" or A3. I can arrange professional framing. Black, white or dark brown solid wood frame with UV-protective glass. Just select the option at checkout!',
      },
    ],
  },
  {
    label: 'About the artwork',
    items: [
      {
        q: 'How do I know the painting is the original?',
        a: "I sign each piece — a smaller signature on the front, and a detailed one including the title on the back. You'll also receive a Certificate of Authenticity.",
      },
      {
        q: 'What can I do with my purchased art?',
        a: 'You can use it for personal purposes — hang it on your wall! You cannot reproduce it, make prints, or sell it as your own. I reserve the copyright of all artwork.',
      },
      {
        q: 'Is the artwork framed?',
        a: 'All available, finished artwork ships unmounted and ready to be framed, unless stated otherwise. Some paintings have a mounting option — choose it at checkout if available.',
      },
      {
        q: "The artwork doesn't look the same as in the photos!",
        a: "A slight colour difference is possible when digitalising traditional artwork. Screens vary in brightness and colour. If you're not happy, I accept returns as long as the artwork is undamaged.",
      },
      {
        q: 'I changed my mind!',
        a: 'No problem. Sometimes artwork looks different in its new home. Please read my return policy for details.',
        link: { to: '/return_policy', label: 'return policy' },
        linkInline: true,
      },
    ],
  },
  {
    label: 'Shipping',
    items: [
      {
        q: 'Where do you ship?',
        a: 'Worldwide, from Dublin, Ireland. Ireland: 1–2 business days. EU, UK and US: 4–5 days.',
      },
      {
        q: 'How is the artwork packed?',
        a: 'Smaller pieces ship flat between cardboard sheets. Larger unmounted pieces are rolled in a posting tube. Framed work is bubble-wrapped and boxed.',
      },
      {
        q: 'Is my order insured?',
        a: 'Insurance and tracking is added to all original artwork, shipped with UPS or similar.',
      },
      {
        q: 'How much does shipping cost?',
        a: 'I offer free shipping within Ireland on most originals. For all other orders, postage is calculated at checkout based on your destination.',
      },
    ],
  },
  {
    label: 'Caring for your painting',
    items: [
      {
        q: 'How do I care for fine art?',
        a: 'Watercolour loses saturation over time if exposed to strong heat or UV light. Even with UV-resistant varnish, I recommend not hanging paintings in direct sunlight.',
      },
      {
        q: 'The painting is curled — is that normal?',
        a: 'Yes, there is a natural curl to paintings made with water-based media. Once framed, it disappears completely.',
      },
    ],
  },
];

export default function CommissionFaq() {
  return (
    <div css={style.wrapper}>
      <div css={style.titleRow}>
        <h2 css={style.title}>Frequently asked questions</h2>
        <span css={style.subtitle}>everything you need to know</span>
      </div>
      {sections.map((section) => (
        <div css={style.section} key={section.label}>
          <span css={style.sectionLabel}>{section.label}</span>
          <div css={style.grid}>
            {section.items.map((item) => (
              <div
                css={[style.card, item.highlighted && style.cardHighlighted]}
                key={item.q}
              >
                <p
                  css={[
                    style.question,
                    item.highlighted && style.questionHighlighted,
                  ]}
                >
                  {item.q}
                </p>
                <p css={style.answer}>
                  {item.answerParts
                    ? item.answerParts.map((part, i) =>
                        typeof part === 'string' ? (
                          part
                        ) : part.external ? (
                          <a
                            key={i}
                            css={style.answerLink}
                            href={part.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {part.label}
                          </a>
                        ) : (
                          <a key={i} css={style.answerLink} href={part.href}>
                            {part.label}
                          </a>
                        )
                      )
                    : item.a}
                  {item.link && (
                    <Link css={style.answerLink} to={item.link.to}>
                      {item.link.label}
                    </Link>
                  )}
                  {item.linkInline && '.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
