import React from 'react';
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import style from './style';

const faqs = [
  {
    question: 'Can I send reference images?',
    answer:
      "Yes — character sheets, inspiration images, descriptions. The more detail the better, however, I'm happy to work only from a description too.",
  },
  {
    question: 'How long does it take?',
    answer:
      "Usually 2–4 weeks depending on complexity. I'll give an estimate before we start.",
  },
  {
    question: 'Do I get a digital version of the painting?',
    answer:
      'You always receive the original, physical painting, but high-res digital files can be added to your order.',
  },
  {
    question: 'Can I use the artwork commercially?',
    answer:
      'Personal and TTRPG use included. Commercial licensing is available — just ask.',
    link: { to: '/terms_and_licencing', label: 'See Terms & Licencing' },
  },
];

export default function CharacterFaq() {
  return (
    <div>
      <div css={style.header}>
        <h2 css={style.title}>Good to Know</h2>
        <p css={style.subtitle}>before you commission</p>
      </div>
      <div css={style.grid}>
        {faqs.map((faq) => (
          <div css={style.card} key={faq.question}>
            <p css={style.question}>{faq.question}</p>
            <p css={style.answer}>
              {faq.answer}
              {faq.link && (
                <>
                  {' '}
                  <Link css={style.answerLink} to={faq.link.to}>
                    {faq.link.label}
                  </Link>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
