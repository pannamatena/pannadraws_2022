import React from 'react';
/** @jsxImportSource @emotion/react */
import Img from 'react-cool-img';
import { BtnLabel } from '../../resources/buttons';
import style from './style';

/**
 * Generic hero for service pages.
 *
 * Props:
 *   eyebrow        — small label above the heading
 *   title          — main heading text (before the accent)
 *   accentText     — red italic block below the title
 *   body           — paragraph text
 *   primaryBtn     — { label, href, external? }
 *   secondaryBtn   — { label, href, external? }
 *   image          — imported image src, or null for a placeholder
 *   imageAlt       — alt text for the image
 *   imagePosition  — CSS object-position value (default 'center 32%')
 *   imageFirst     — if true, image is on the left; if false, text is on the left (default true)
 *   theme          — 'DARK' applies dark background with light text colours
 *   imageGrid      — array of { src, alt } objects for a 3-cell grid (first spans 2 rows)
 */
export default function ServiceHero({
  eyebrow,
  title,
  accentText,
  body,
  primaryBtn,
  secondaryBtn,
  image,
  imageAlt,
  imagePosition = 'center 32%',
  imageFirst = true,
  theme,
  imageGrid,
}) {
  const isDark = theme === 'DARK';

  const imageSide = imageGrid ? (
    <div css={style.imageSide}>
      <div css={style.imageGrid}>
        {imageGrid.map((item, i) => (
          <div
            key={i}
            css={[style.imageGridCell, i === 0 && style.imageGridCellLarge]}
          >
            {item?.src && (
              <Img
                lazy
                cache
                src={item.src}
                alt={item.alt || ''}
                style={{
                  objectPosition: item.objectPosition || 'center center',
                  transform: item.scale ? `scale(${item.scale})` : undefined,
                  transformOrigin: item.transformOrigin || 'center center',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div css={style.imageSide}>
      {image && (
        <Img
          lazy
          cache
          src={image}
          alt={imageAlt}
          style={{ objectPosition: imagePosition }}
        />
      )}
    </div>
  );

  const contentSide = (
    <div css={[style.contentSide, isDark && style.darkContentSide]}>
      <div
        css={[
          style.contentInner,
          imageFirst
            ? style.contentInnerAlignLeft
            : style.contentInnerAlignRight,
        ]}
      >
        <h4 css={isDark && style.darkEyebrow}>{eyebrow}</h4>
        <h1 css={[style.heading, isDark && style.darkHeading]}>
          {title}
          <span css={style.headingAccent}>{accentText}</span>
        </h1>
        <p css={[style.body, isDark && style.darkBody]}>{body}</p>
        <div css={style.buttons}>
          <a
            css={style.btnPrimary}
            href={primaryBtn.href}
            {...(primaryBtn.external && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            <BtnLabel label={primaryBtn.label} external={primaryBtn.external} />
          </a>
          <a
            css={isDark ? style.btnSecondaryDark : style.btnSecondary}
            href={secondaryBtn.href}
            {...(secondaryBtn.external && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            <BtnLabel
              label={secondaryBtn.label}
              external={secondaryBtn.external}
            />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div css={style.hero}>
      {imageFirst ? imageSide : contentSide}
      {imageFirst ? contentSide : imageSide}
    </div>
  );
}
