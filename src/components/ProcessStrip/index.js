import React from 'react';
/** @jsxImportSource @emotion/react */
import style from './style';

const steps = [
  { title: 'Brief', desc: 'Tell me about your story, characters and vision' },
  { title: 'Sketch', desc: 'I send rough compositions for your approval' },
  { title: 'Paint', desc: 'Final artwork with revision rounds included' },
  { title: 'Deliver', desc: 'High-res files plus optional original painting' },
];

export default function ProcessStrip() {
  return (
    <div css={style.strip}>
      <div css={style.inner}>
        <h3>How it works</h3>
        <div css={style.steps}>
          {steps.map((step, i) => (
            <React.Fragment key={step.title}>
              <div css={style.step}>
                <div css={style.circle}>{i + 1}</div>
                <p css={style.stepTitle}>{step.title}</p>
                <p css={style.stepDesc}>{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <span css={style.arrow} aria-hidden="true">›</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
