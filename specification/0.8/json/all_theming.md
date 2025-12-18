# All Theming Documentation


<!-- Source: README.md -->

# Theming Overview

<!-- catalog-only-start --><!-- ---
name: Material Theming
title: Theming
order: 1
-----><!-- catalog-only-end -->

# Theming

<!-- go/mwc-theming -->

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:concepts'
*-->

<!-- [TOC] -->

[Material Design theming](https://m3.material.io/foundations/customization)<!-- {.external} -->
creates unique branded products with familiar patterns and accessible
interactions.

![collage of views of a mobile UI that show a user's setting and preference for
a green primary color flows through system UI
harmoniously](images/theming.webp "A user-generated color scheme can flow through apps that use a custom theme.")

## Tokens

Material is expressed in
[design tokens](https://m3.material.io/foundations/design-tokens/overview)<!-- {.external} -->,
which are the building blocks of all UI elements.

Each component token maps to a system token, which has a concrete reference
value.

![A diagram showing the heirachy of component tokens to system tokens to
reference
tokens](images/token-types.webp "The relationship between reference, system, and component tokens.")

On the web, design tokens are
[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)<!-- {.external} -->
and can be scoped with CSS selectors.

```css
.square-buttons {
  /* Changes all <md-filled-button> instances matching the selector */
  --md-filled-button-container-shape: 0px;
}
```

### Reference

Reference tokens hold concrete values, such as a hex color, pixel size, or font
family name.

#### Typeface

[`--md-ref-typeface` tokens](typography.md#typeface) can be used to change font
families and weights across all system and component tokens.

```css
:root {
  --md-ref-typeface-brand: 'Open Sans';
  --md-ref-typeface-plain: 'Open Sans';
}
```

#### Palette

*MWC does not currently support `--md-ref-palette` tokens.*

### System

System tokens define decisions and roles that give the design system its
character, from color and typography, to elevation and shape.

#### Color

[`--md-sys-color` tokens](color.md#tokens) define dynamic color roles that map
to components. See the [color guide](color.md) for more details.

```css
:root {
  --md-sys-color-primary: red;
  --md-sys-color-secondary: blue;
}
```

#### Typography

[`--md-sys-typescale` tokens](typography.md#typescale) define typescale roles
that map to components. See the [typography guide](typography.md) for more
details.

```css
:root {
  --md-sys-typescale-body-medium-size: 1rem;
  --md-sys-typescale-body-medium-line-height: 1.5rem;
}
```

#### Shape

[`--md-sys-shape` tokens](shape.md#tokens) define corner shapes used in
components. See the [shape guide](shape.md) for more details.

```css
:root {
  --md-sys-shape-corner-small: 4px;
  --md-sys-shape-corner-medium: 6px;
  --md-sys-shape-corner-large: 8px;
}
```

#### Motion

*MWC does not currently support `--md-sys-motion` tokens.*

### Component

Component tokens are design attributes assigned to elements. They can be system
tokens or concrete values.

```css
:root {
  --md-filled-button-container-shape: 0px;
}

md-filled-button.error {
  --md-filled-button-container-color: var(--md-sys-color-error);
  --md-filled-button-label-text-color: var(--md-sys-color-on-error);
}
```

Refer to each [components' documentation](../components/) for available tokens.

> Note: unlike `--md-ref-*` and `--md-sys-*` tokens, which are prefixed with
> `ref` and `sys`, component tokens are *not* prefixed with `comp`.


---

<!-- Source: color.md -->

# Color

<!-- catalog-only-start --><!-- ---
name: Color
title: Color
order: 2
-----><!-- catalog-only-end -->

# Color

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:howTo'
*-->

<!-- go/mwc-color -->

<!-- [TOC] -->

[Color](https://m3.material.io/styles/color/overview)<!-- {.external} --> creates meaning
and communicates hierarchy, state, and brand.

## Color scheme

<!-- go/md-sys-color -->

A
[color scheme](https://m3.material.io/styles/color/the-color-system/color-roles#55d2b7d2-0202-4616-887e-f575a7946aac)<!-- {.external} -->
is the group of
[key color tones](https://m3.material.io/styles/color/the-color-system/key-colors-tones#5fdf196d-1e21-4d03-ae63-e802d61ad5ee)<!-- {.external} -->
assigned to specific roles that get mapped to components.

![Full palette derived from baseline colors](images/color-scheme-light.webp "From five key colors, roles are automatically assigned that map to light theme components")

![Dark palette derived from baseline colors](images/color-scheme-dark.webp "From five key colors, roles are automatically assigned that map to dark theme components")

> Tip: use the
> [Material theme builder Figma plugin](https://www.figma.com/community/plugin/1034969338659738588/Material-Theme-Builder)<!-- {.external} -->
> to generate a color scheme.
>
> Alternatively, use the
> [`material-color-utilities` library](https://www.npmjs.com/package/@material/material-color-utilities)<!-- {.external} -->
> to generate color schemes at runtime.

### Tokens

A color scheme can be set using
[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)<!-- {.external} -->.
Tokens follow the naming convention `--md-sys-color-<token>`.

All tokens have a corresponding `--md-sys-color-on-<token>` for content color
with accessible contrast.

Key color | Tokens
--------- | --------------------------------------------
Primary   | `--md-sys-color-primary`
&nbsp;    | `--md-sys-color-primary-container`
Secondary | `--md-sys-color-secondary`
&nbsp;    | `--md-sys-color-secondary-container`
Tertiary  | `--md-sys-color-tertiary`
&nbsp;    | `--md-sys-color-tertiary-container`
Error     | `--md-sys-color-error`
&nbsp;    | `--md-sys-color-error-container`
Neutral   | `--md-sys-color-background`
&nbsp;    | `--md-sys-color-surface`
&nbsp;    | `--md-sys-color-surface-bright` *
&nbsp;    | `--md-sys-color-surface-dim` *
&nbsp;    | `--md-sys-color-surface-container` *
&nbsp;    | `--md-sys-color-surface-container-lowest` *
&nbsp;    | `--md-sys-color-surface-container-low` *
&nbsp;    | `--md-sys-color-surface-container-high` *
&nbsp;    | `--md-sys-color-surface-container-highest` *
&nbsp;    | `--md-sys-color-outline`
&nbsp;    | `--md-sys-color-outline-variant`

*\* all surface tokens use `--md-sys-color-on-surface` or
`--md-sys-color-on-surface-variant` for their content.*

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-sys-color.scss)
    <!-- {.external} -->

```css
:root {
  /* Generated from Material Theme Builder Figma plugin
     or `material-color-utilities`. */
  --md-sys-color-primary: #006A6A;
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-primary-container: #6FF7F6;
  --md-sys-color-on-primary-container: #002020;
  /* ... */
}

/* Usage in custom components */
.primary {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}
```

<!--#include file="../../googlers/theming-color.md" -->


---

<!-- Source: shape.md -->

# Shape

<!-- catalog-only-start --><!-- ---
name: Shape
title: Shape
order: 4
-----><!-- catalog-only-end -->

# Shape

<!-- go/mwc-shape -->

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:howTo'
*-->

<!-- [TOC] -->

[Shape](https://m3.material.io/styles/shape)<!-- {.external} --> can direct attention,
communicate state, and express brand.

## Shape

<!-- go/md-sys-shape -->

Corners use a
[range of shape scales](https://m3.material.io/styles/shape/shape-scale-tokens#b85fe884-325c-45e6-b7fb-e753c6e03c82)<!-- {.external} -->
for their roundness, from straight to fully round.

> Note: "cut" corners are not supported.

### Tokens

Shape corners can be set using
[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)<!-- {.external} -->.
Tokens follow the naming convention `--md-sys-shape-<token>`.

Shape  | Token
------ | -----------------------------------
Corner | `--md-sys-shape-corner-none`
&nbsp; | `--md-sys-shape-corner-extra-small`
&nbsp; | `--md-sys-shape-corner-small`
&nbsp; | `--md-sys-shape-corner-medium`
&nbsp; | `--md-sys-shape-corner-large`
&nbsp; | `--md-sys-shape-corner-extra-large`
&nbsp; | `--md-sys-shape-corner-full`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-sys-shape.scss)
    <!-- {.external} -->

```css
:root {
  --md-sys-shape-corner-small: 4px;
  --md-sys-shape-corner-medium: 6px;
  --md-sys-shape-corner-large: 8px;
}
```


---

<!-- Source: typography.md -->

# Typography

<!-- catalog-only-start --><!-- ---
name: Typography
title: Typography
order: 3
-----><!-- catalog-only-end -->

# Typography

<!-- go/mwc-typography -->

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:howTo'
*-->

<!-- [TOC] -->

[Typography](https://m3.material.io/styles/typography)<!-- {.external} --> helps make
writing legible and beautiful.

> Tip: "typeface" and "typescale" can be confusing. "face" refers to
> `font-family` and `font-weight`.
>
> "scale" refers to a group of `font-family`, `font-size`, `line-height`, and
> `font-weight` tokens.

## Typeface

<!-- go/md-ref-typeface -->

A [typeface](https://m3.material.io/styles/typography/fonts)<!-- {.external} --> is a
`font-family`. In Material there are plain and brand typefaces.

Each typeface has normal, medium, and bold styles (defaults to `400`, `500`, and
`700`). All three weight styles need to be included for a font.

> Important: if you do not change the typeface, be sure to load the default
> `'Roboto'` font. For example, from
> [fonts.google.com](https://fonts.google.com/share?selection.family=Roboto:wght@400;500;700).

### Tokens

Typefaces can be set using
[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)<!-- {.external} -->.
Tokens follow the naming convention `--md-ref-typeface-<token>`.

Typeface | Token
-------- | -------------------------
Brand    | `--md-ref-typeface-brand`
Plain    | `--md-ref-typeface-plain`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-ref-typeface.scss)
    <!-- {.external} -->

```css
@import url('https://fonts.googleapis.com/css2?family=Open%20Sans:wght@400;500;700&display=swap');

:root {
  --md-ref-typeface-brand: 'Open Sans';
  --md-ref-typeface-plain: system-ui;
}
```

## Typescale

<!-- go/md-sys-typescale -->

A
[typescale](https://m3.material.io/styles/typography/type-scale-tokens)<!-- {.external} -->
is a collection of font styles: `font-family`, `font-size`, `line-height`, and
`font-weight`. They are organized into roles that describe their purpose.

Material's
[applying type guidelines](https://m3.material.io/styles/typography/applying-type)<!-- {.external} -->
explains when to use each typescale role.

### Classes

<!-- go/md-typescale -->

Typescales can be applied to an element using the classes from the typescale
stylesheet.

Class names follow the naming convention `.md-typescale-<scale>-<size>`.

```ts
import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';

// `typescaleStyles.styleSheet` is a `CSSStyleSheet` that can be added to a
// document or shadow root's `adoptedStyleSheets` to use the `.md-typescale-*`
// classes.
document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

// `typescaleStyles` can also be added to a `LitElement` component's styles.
class App extends LitElement {
  static styles = [typescaleStyles, css`...`];

  render() {
    return html`
      <h1 class="md-typescale-display-large">Large display</h1>
      <p class="md-typescale-body-medium">Body text</p>
    `;
  }
}
```

### Tokens

Typescales can be set using
[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)<!-- {.external} -->.
Each typescale has three sizes: `small`, `medium`, and `large`. Each size has
four properties: `font` (family), `size`, `line-height`, and `weight`.

Tokens follow the naming convention
`--md-sys-typescale-<scale>-<size>-<property>`.

Typescale | Tokens
--------- | ------------------------------------------------
Display   | `--md-sys-typescale-display-medium-font`
&nbsp;    | `--md-sys-typescale-display-medium-size`
&nbsp;    | `--md-sys-typescale-display-medium-line-height`
&nbsp;    | `--md-sys-typescale-display-medium-weight`
Headline  | `--md-sys-typescale-headline-medium-font`
&nbsp;    | `--md-sys-typescale-headline-medium-size`
&nbsp;    | `--md-sys-typescale-headline-medium-line-height`
&nbsp;    | `--md-sys-typescale-headline-medium-weight`
Title     | `--md-sys-typescale-title-medium-font`
&nbsp;    | `--md-sys-typescale-title-medium-size`
&nbsp;    | `--md-sys-typescale-title-medium-line-height`
&nbsp;    | `--md-sys-typescale-title-medium-weight`
Body      | `--md-sys-typescale-body-medium-font`
&nbsp;    | `--md-sys-typescale-body-medium-size`
&nbsp;    | `--md-sys-typescale-body-medium-line-height`
&nbsp;    | `--md-sys-typescale-body-medium-weight`
Label     | `--md-sys-typescale-label-medium-font`
&nbsp;    | `--md-sys-typescale-label-medium-size`
&nbsp;    | `--md-sys-typescale-label-medium-line-height`
&nbsp;    | `--md-sys-typescale-label-medium-weight`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-sys-typescale.scss)
    <!-- {.external} -->

```css
:root {
  --md-sys-typescale-body-medium-size: 1rem;
  --md-sys-typescale-body-medium-line-height: 1.5rem;
  /* ... */
}
```

> Tip: to change all font families across typescales, prefer setting
> `--md-ref-typeface-brand` and `--md-ref-typeface-plain`, which map to each
> typescale.
>
> Use `--md-sys-typescale-<scale>-<size>-font` to change the typeface that a
> font is mapped to. This is useful for custom typefaces.
>
> ```css
> :root {
>   --my-brand-font: 'Open Sans';
>   --my-headline-font: 'Montserrat';
>   --my-title-font: 'Montserrat';
>   --my-plain-font: system-ui;
>
>   --md-ref-typeface-brand: var(--my-brand-font);
>   --md-ref-typeface-plain: var(--my-plain-font);
>
>   --md-sys-typescale-headline-font: var(--my-headline-font);
>   --md-sys-typescale-title-font: var(--my-title-font);
> }
> ```

<!--#include file="../../googlers/theming-typography.md" -->


---
