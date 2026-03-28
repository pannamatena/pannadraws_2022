import React from 'react';
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import style from './style';

const romanNumerals = ['I', 'II', 'III', 'IV'];

const steps = [
  { title: 'Brief', desc: 'Tell me about your story, characters and vision' },
  { title: 'Sketch', desc: 'I send rough compositions for your approval' },
  { title: 'Paint', desc: 'Final artwork with revision rounds included' },
  { title: 'Deliver', desc: 'High-res files plus optional original painting · ', link: { to: '/terms_and_licencing', label: 'See Terms & Licencing' } },
];

export default function ProcessStrip({ stepOverrides = {} }) {
  const resolvedSteps = steps.map((step) =>
    stepOverrides[step.title] ? { ...step, ...stepOverrides[step.title] } : step
  );

  return (
    <div css={style.strip}>
      <div css={style.inner}>
        <h2 css={style.heading}>
          How it works{' '}
          <span css={style.headingSubtext}>from first message to finished painting</span>
        </h2>
        <div css={style.steps}>
          {resolvedSteps.map((step, i) => (
            <div css={style.step} key={step.title}>
              <div css={style.stepMarker}>
                <span css={style.stepNumeral}>{romanNumerals[i]}</span>
                <div css={style.stepLine} />
                <div css={style.stepDot} />
              </div>
              <p css={style.stepTitle}>{step.title}</p>
              <p css={style.stepDesc}>
                {step.desc}
                {step.link && <Link css={style.stepDescLink} to={step.link.to}>{step.link.label}</Link>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
