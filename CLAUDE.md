# Claude Code Instructions — pannadraws_2022

This is a React + Emotion CSS-in-JS art portfolio website. Follow these rules whenever reading, editing, or creating code.

---

## Shared Design Tokens — Always Use These

Never hardcode colours, font sizes, font families, or breakpoints. Always import from the shared resource files below.

### Colours — `src/resources/colors.js`

Import: `import { colours } from '../../resources/colors';`

| Token | Value | Meaning |
|---|---|---|
| `colours.c1` | `#d40707` | Primary red (brand accent, CTAs) |
| `colours.c1_h` | `#B10606` | Red hover state |
| `colours.c2` | `#211e1c` | Primary text / dark |
| `colours.c2_h` | `#0F0E0D` | Dark hover state |
| `colours.c3` | `#ffffff` | White / light backgrounds |
| `colours.c4` | `#ACACAC` | Muted / secondary text |
| `colours.c5` | `#ecebeb` | Light grey background |
| `colours.c_success` | `#407E1F` | Success state |
| `colours.c_error` | `#d40707` | Error state |
| `colours.c2_transparent` | `rgba(33,30,28,.8)` | Semi-transparent dark |
| `colours.c3_transparent` | `rgba(255,255,255,.8)` | Semi-transparent white |
| `colours.shadow` | `rgba(33,30,28,.4)` | Box shadow |
| `colours.c_promo_1` | `#f5f0eb` | Promo block background (warm) |
| `colours.c_promo_2` | `#ede8f5` | Promo block background (cool) |
| `colours.c_button_promo_2` | `#5c3d8f` | Promo 2 button colour |
| `colours.c_button_promo_2_h` | `#7755af` | Promo 2 button hover |

### Fonts — `src/resources/fonts.js`

Import: `import { fonts, textSize, xSmallHeadFontSize, smallHeadFontSize, mediumHeadFontSize, largeHeadFontSize } from '../../resources/fonts';`

**Font families:**
- `fonts.f1` — `patrick_hand_scregular` (display/heading font)
- `fonts.f2` — `robotoregular` (body font)
- `fonts.f3` — `cormorant_garamond` (variable font, weight 100–900, supports `font-style: italic`)
- `fonts.f4` — `playfair_display` (variable font, weight 100–900, supports `font-style: italic`)

**Responsive font size utilities (always prefer these over hardcoded px values):**

| Export | Mobile | desktopSmall | desktopLarge |
|---|---|---|---|
| `textSize` | 14px | 16px | — |
| `xSmallHeadFontSize` | 16px | 20px | 22px |
| `smallHeadFontSize` | 20px | 22px | 24px |
| `mediumHeadFontSize` | 20px | 22px | 32px |
| `largeHeadFontSize` | 22px | 24px | 34px |

Use `${textSize};` inside a `css` template to interpolate. Example:
```js
stepDesc: css`
  font-family: ${fonts.f2};
  ${textSize};
  color: ${colours.c4};
`,
```

Only use custom/hardcoded font sizes for intentional one-off display elements (e.g. a large hero heading that scales above the standard range). Document the reason with a comment.

### Breakpoints — `src/resources/breakpoints.js`

Import: `import { breakPoints } from '../../resources/breakpoints';`

| Token | Min-width |
|---|---|
| `breakPoints.mobileLandscape` | 480px |
| `breakPoints.tabletPortrait` | 600px |
| `breakPoints.tabletLandscape` | 800px |
| `breakPoints.desktopSmall` | 1224px |
| `breakPoints.desktopLarge` | 1600px |
| `breakPoints.desktopXLarge` | 2160px |

Use: `@media ${breakPoints.tabletPortrait} { ... }`

### Buttons — `src/resources/buttons.js`

Import: `import { btnPrimary, btnOutlineRed, btnOutlineBlack } from '../../resources/buttons';`

| Export | Appearance |
|---|---|
| `btnPrimary` | Red background, white text, responsive padding |
| `btnOutlineRed` | White background, red border and text |
| `btnOutlineBlack` | Transparent background, dark border and text |

All button styles include `textSize` and responsive padding. Use them directly as `css` prop values or interpolate into style objects:
```js
// Direct assignment in style object
btnPrimary,
btnSecondary: btnOutlineBlack,

// Interpolation in nested selector
a { ${btnPrimary}; }
```

Never write inline button styles from scratch. If a new button variant is needed, add it to `buttons.js`.

---

## Component Structure

### Emotion CSS-in-JS

Every file that uses the `css` prop must include the pragma at the top:
```js
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
```

Styles go in a sibling `style.js` file. Import and apply via `css={style.ruleName}`. Use array syntax for conditional styles:
```js
css={[style.base, isDark && style.baseDark]}
```

### Full-bleed Layout

To break out of the `pageContent` padding and create full-width backgrounds, apply negative horizontal margins matching the padding at each breakpoint:
```js
margin: 0 -10px;
@media ${breakPoints.tabletPortrait} { margin: 0 -15px; }
@media ${breakPoints.desktopSmall}  { margin: 0 -20px; }
```

### PageSection Component

Use `<PageSection>` (`src/components/PageSection`) to wrap content sections that need a background colour and centred max-width inner container. It handles the full-bleed breakout automatically.

Props:
- `background` — any CSS colour value (default: transparent)
- `flushBottom` — boolean, applies negative bottom margin to merge with footer

### Responsive Spacing

Match padding/gap/margin to the breakpoint scale:
- Mobile: `10px`
- tabletPortrait: `15px`
- desktopSmall: `20px`

---

## Before Creating Any New Component

1. Check `colors.js` — use tokens, not hex literals.
2. Check `fonts.js` — use `textSize` or a head size utility, not `font-size: Xpx`.
3. Check `breakpoints.js` — use `breakPoints.*`, not raw media query strings.
4. Check `buttons.js` — use an existing button export, not a new inline style.
5. Check existing components for a reusable pattern before creating a new one.
