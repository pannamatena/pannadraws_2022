import React from 'react';
/** @jsxImportSource @emotion/react */
import { ExternalArrow, btnExternalLabel } from '../../resources/buttons';
import style from './style';

function BtnLabel({ label, external }) {
  if (!external) return label;
  return (
    <span css={btnExternalLabel}>
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
