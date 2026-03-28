import React from 'react';
/** @jsxImportSource @emotion/react */
import style from './style';

const ExternalArrow = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path
      d="M1 9L9 1M9 1H3M9 1V7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function BtnLabel({ label, external }) {
  if (!external) return label;
  return (
    <span css={style.buttonInner}>
      <ExternalArrow />
      {label}
    </span>
  );
}

export default function CtaBanner({
  title,
  text,
  buttonLabel,
  buttonHref,
  buttonVariant = 'primary',
  buttonExternal,
  secondButton,
  theme,
}) {
  const isDark = theme === 'DARK';

  return (
    <div css={[style.banner, isDark && style.darkBanner]}>
      <div css={style.content}>
        <h2 css={[style.title, isDark && style.darkTitle]}>{title}</h2>
        {text && <p css={style.text}>{text}</p>}
      </div>
      <div css={style.buttons}>
        <a
          css={style.button(buttonVariant)}
          href={buttonHref}
          {...(buttonExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          <BtnLabel label={buttonLabel} external={buttonExternal} />
        </a>
        {secondButton && (
          <a
            css={style.button(secondButton.variant)}
            href={secondButton.href}
            {...(secondButton.external && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <BtnLabel label={secondButton.label} external={secondButton.external} />
          </a>
        )}
      </div>
    </div>
  );
}
