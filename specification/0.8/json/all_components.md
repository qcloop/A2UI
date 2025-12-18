# All Components Documentation


<!-- Source: button.md -->

# Button

<!-- catalog-only-start --><!-- ---
name: Buttons
dirname: button
-----><!-- catalog-only-end -->

<catalog-component-header>
<catalog-component-header-title slot="title">

# Buttons

<!-- no-catalog-start -->

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- go/md-button -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/button/).**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Buttons](https://m3.material.io/components/buttons)<!-- {.external} --> help people
initiate actions, from sending an email, to sharing a document, to liking a
post.

There are five types of common buttons: elevated, filled, filled tonal,
outlined, and text.

</catalog-component-header-title>

<img
    class="hero"
    alt="A phone showing a payment screen with a green filled button that says 'Make
payment'"
    title="There are 5 types of common buttons"
    src="images/button/hero.webp">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/buttons) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/button)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Types

<!-- no-catalog-start -->

![The 5 types of common buttons](images/button/types.webp "Elevated, filled, filled tonal, outlined, and text buttons")

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      class="types-image"
      style="justify-content:center;"
      title="Elevated, filled, filled tonal, outlined, and text buttons"
      aria-label="The 5 types of common buttons">
    <style>
      .types-image .wrapper,
      .types-image .wrapper > * {
        display: flex;
        padding: 8px;
        flex-wrap: wrap;
        justify-content: center;
      }
      .types-image .wrapper > * {
        flex-direction: column;
        align-items: center;
        padding-inline: 16px;
      }
      .types-image span {
        display: inline-flex;
        background-color: var(--md-sys-color-inverse-surface);
        color: var(--md-sys-color-inverse-on-surface);
        padding: 8px;
        margin-block-start: 8px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
      }
    </style>
    <div class="wrapper">
      <div>
        <md-elevated-button has-icon>
          <md-icon slot="icon">add</md-icon>
          Elevated
        </md-elevated-button>
        <span>1</span>
      </div>
      <div>
        <md-filled-button>Filled</md-filled-button>
        <span>2</span>
      </div>
      <div>
        <md-filled-tonal-button>Tonal</md-filled-tonal-button>
        <span>3</span>
      </div>
      <div>
        <md-outlined-button>Outlined</md-outlined-button>
        <span>4</span>
      </div>
      <div>
        <md-text-button>Text</md-text-button>
        <span>5</span>
      </div>
    </div>
  </figure>
</div>

-->

<!-- catalog-only-end -->

1.  [Elevated button](#elevated-button)
1.  [Filled button](#filled-button)
1.  [Filled tonal button](#filled-tonal-button)
1.  [Outlined button](#outlined-button)
1.  [Text button](#text-button)

## Usage

Buttons have label text that describes the action that will occur if a user taps
a button.

<!-- no-catalog-start -->

![An outlined button with the text "Back" next to a filled button with the text
"Complete"](images/button/usage.webp "Outlined and filled buttons.")

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;gap: 8px;"
      title="Outlined and filled buttons."
      aria-label="An outlined button with the text 'Back' next to a filled button with the text 'Complete'">
    <md-outlined-button>Back</md-outlined-button>
    <md-filled-button>Complete</md-filled-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-outlined-button>Back</md-outlined-button>
<md-filled-button>Complete</md-filled-button>
```

### Icon

An icon may optionally be added to a button to help communicate the button's
action and help draw attention.

<!-- no-catalog-start -->

![A tonal button with a right arrow send icon with text 'send' and a text button
with the text 'open' with a trailing icon arrow
box](images/button/usage-icon.webp "Slot in icons to the appropriate slots")

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;gap: 8px;"
      title="Outlined and filled buttons."
      aria-label="An outlined button with the text 'Back' next to a filled button with the text 'Complete'">
    <md-filled-tonal-button>
      Send
      <svg slot="icon" viewBox="0 0 48 48"><path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"/></svg>
    </md-filled-tonal-button>

    <md-text-button trailing-icon>
      Open
      <svg slot="icon" viewBox="0 0 48 48"><path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z"/></svg>
    </md-text-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-filled-tonal-button>
  Send
  <svg slot="icon" viewBox="0 0 48 48"><path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"/></svg>
</md-filled-tonal-button>

<md-text-button trailing-icon>
  Open
  <svg slot="icon" viewBox="0 0 48 48"><path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z"/></svg>
</md-text-button>
```

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute to buttons whose labels need a more descriptive label.

```html
<md-elevated-button aria-label="Add a new contact">Add</md-elevated-button>
```

### Focusable and disabled

By default, disabled buttons are not focusable with the keyboard, while
"soft-disabled" buttons are. Some use cases encourage focusability of disabled
toolbar items to increase their discoverability.

See the
[ARIA guidelines on focusability of disabled controls](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls)<!-- {.external} -->
for guidance on when this is recommended.

```html
<div role="toolbar">
  <md-text-button>Copy</md-text-button>
  <md-text-button>Cut</md-text-button>
  <!--
    This button is disabled but kept focusable to improve its discoverability
    in the toolbar.
  -->
  <md-text-button soft-disabled>Paste</md-text-button>
</div>
```

## Elevated button

<!-- go/md-elevated-button -->

[Elevated buttons](https://m3.material.io/components/buttons/guidelines#4e89da4d-a8fa-4e20-bb8d-b8a93eff3e3e)<!-- {.external} -->
are essentially filled tonal buttons with a shadow. To prevent shadow creep,
only use them when absolutely necessary, such as when the button requires visual
separation from a patterned background.

<!-- no-catalog-start -->

![An elevated button](images/button/usage-elevated-button.webp)

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      aria-label="An elevated button.">
    <md-elevated-button>Elevated</md-elevated-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-elevated-button>Elevated</md-elevated-button>
```

## Filled button

<!-- go/md-filled-button -->

[Filled buttons](https://m3.material.io/components/buttons/guidelines#9ecffdb3-ef29-47e7-8d5d-f78b404fcafe)<!-- {.external} -->
have the most visual impact after the FAB, and should be used for important,
final actions that complete a flow, like Save, Join now, or Confirm.

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      aria-label="A filled button.">
    <md-filled-button>Filled</md-filled-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-filled-button>Filled</md-filled-button>
```

## Filled tonal button

<!-- go/md-filled-tonal-button -->

A
[filled tonal button](https://m3.material.io/components/buttons/guidelines#07a1577b-aaf5-4824-a698-03526421058b)<!-- {.external} -->
is an alternative middle ground between filled and outlined buttons. They're
useful in contexts where a lower-priority button requires slightly more emphasis
than an outline would give, such as "Next" in an onboarding flow.

<!-- no-catalog-start -->

![A filled tonal button](images/button/usage-filled-tonal-button.webp)

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      aria-label="A tonal button.">
    <md-filled-tonal-button>Tonal</md-filled-tonal-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-filled-tonal-button>Tonal</md-filled-tonal-button>
```

## Outlined button

<!-- go/md-outlined-button -->

[Outlined buttons](https://m3.material.io/components/buttons/guidelines#3742b09f-c224-43e0-a83e-541bd29d0f05)<!-- {.external} -->
are medium-emphasis buttons. They contain actions that are important, but aren’t
the primary action in an app.

<!-- no-catalog-start -->

![An outlined button](images/button/usage-outlined-button.webp)

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      aria-label="An outlined button.">
    <md-outlined-button>Outlined</md-outlined-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-outlined-button>Outlined</md-outlined-button>
```

## Text button

<!-- go/md-text-button -->

[Text buttons](https://m3.material.io/components/buttons/guidelines#c9bcbc0b-ee05-45ad-8e80-e814ae919fbb)<!-- {.external} -->
are used for the lowest priority actions, especially when presenting multiple
options.

<!-- no-catalog-start -->

![A text button](images/button/usage-text-button.webp)

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      aria-label="A text button.">
    <md-text-button>Text</md-text-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-text-button>Text</md-text-button>
```

## Theming

Button supports [Material theming](../theming/README.md) and can be customized
in terms of color, typography, and shape.

### Elevated button tokens

Token                                   | Default value
--------------------------------------- | -------------------------------------
`--md-elevated-button-container-color`  | `--md-sys-color-surface`
`--md-elevated-button-container-shape`  | `--md-sys-shape-corner-full`
`--md-elevated-button-label-text-color` | `--md-sys-color-on-surface`
`--md-elevated-button-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-elevated-button.scss)
    <!-- {.external} -->

### Elevated button example

<!-- no-catalog-start -->

![Image of an elevated button with a different theme applied](images/button/theming-elevated-button.webp "Elevated button theming example.")

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      class="styled-example"
      title="Elevated button theming example."
      aria-label="Image of an elevated button with a different theme applied">
    <style>
      .styled-example {
        background-color: white;
        --md-elevated-button-container-shape: 0px;
        --md-elevated-button-label-text-font: system-ui;
        --md-sys-color-surface-container-low: #FAFDFC;
        --md-sys-color-primary: #191C1C;
      }
    </style>

    <md-elevated-button>Elevated</md-elevated-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
:root {
  --md-elevated-button-container-shape: 0px;
  --md-elevated-button-label-text-font: system-ui;
  --md-sys-color-surface-container-low: #FAFDFC;
  --md-sys-color-primary: #191C1C;
}
</style>

<md-elevated-button>Elevated</md-elevated-button>
```

### Filled button tokens

Token                                 | Default value
------------------------------------- | -------------------------------------
`--md-filled-button-container-color`  | `--md-sys-color-primary`
`--md-filled-button-container-shape`  | `--md-sys-shape-corner-full`
`--md-filled-button-label-text-color` | `--md-sys-color-on-primary`
`--md-filled-button-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-filled-button.scss)
    <!-- {.external} -->

### Filled button example

<!-- no-catalog-start -->

![Image of a filled button with a different theme applied](images/button/theming-filled-button.webp "Filled button theming example.")

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      class="styled-example"
      title="Filled button theming example."
      aria-label="Image of a filled button with a different theme applied">
    <style>
      .styled-example {
        background-color: white;
        --md-filled-button-container-shape: 0px;
        --md-filled-button-label-text-font: system-ui;
        --md-sys-color-primary: #006A6A;
        --md-sys-color-on-primary: #FFFFFF;
      }
    </style>

    <md-filled-button>Filled</md-filled-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
:root {
  --md-filled-button-container-shape: 0px;
  --md-filled-button-label-text-font: system-ui;
  --md-sys-color-primary: #006A6A;
  --md-sys-color-on-primary: #FFFFFF;
}
</style>

<md-filled-button>Filled</md-filled-button>
```

### Filled tonal button tokens

Token                                       | Default value
------------------------------------------- | -------------
`--md-filled-tonal-button-container-color`  | `--md-sys-color-secondary-container`
`--md-filled-tonal-button-container-shape`  | `--md-sys-shape-corner-full`
`--md-filled-tonal-button-label-text-color` | `--md-sys-color-on-secondary-container`
`--md-filled-tonal-button-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-filled-tonal-button.scss)
    <!-- {.external} -->

### Filled tonal button example

<!-- no-catalog-start -->

![Image of a filled tonal button with a different theme applied](images/button/theming-filled-tonal-button.webp "Filled tonal button theming example.")

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      class="styled-example"
      title="Tonal button theming example."
      aria-label="Image of a tonal button with a different theme applied">
    <style>
      .styled-example {
        background-color: white;
        --md-filled-tonal-button-container-shape: 0px;
        --md-filled-tonal-button-label-text-font: system-ui;
        --md-sys-color-secondary-container: #CCE8E7;
        --md-sys-color-on-secondary-container: #051F1F;
      }
    </style>

    <md-filled-tonal-button>Tonal</md-filled-tonal-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
:root {
  --md-filled-tonal-button-container-shape: 0px;
  --md-filled-tonal-button-label-text-font: system-ui;
  --md-sys-color-secondary-container: #CCE8E7;
  --md-sys-color-on-secondary-container: #051F1F;
}
</style>

<md-filled-tonal-button>Tonal</md-filled-tonal-button>
```

### Outlined button tokens

Token                                   | Default value
--------------------------------------- | -------------------------------------
`--md-outlined-button-outline-color`    | `--md-sys-color-outline`
`--md-outlined-button-container-shape`  | `--md-sys-shape-corner-full`
`--md-outlined-button-label-text-color` | `--md-sys-color-primary`
`--md-outlined-button-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-outlined-button.scss)
    <!-- {.external} -->

### Outlined button example

<!-- no-catalog-start -->

![Image of an outlined button with a different theme applied](images/button/theming-outlined-button.webp "Outlined button theming example.")

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      class="styled-example"
      title="Outlined button theming example."
      aria-label="Image of a outlined button with a different theme applied">
    <style>
      .styled-example {
        background-color: white;
        --md-outlined-button-container-shape: 0px;
        --md-outlined-button-label-text-font: system-ui;
        --md-sys-color-primary: #006A6A;
        --md-sys-color-outline: #6F7979;
      }
    </style>

    <md-outlined-button>Outlined</md-outlined-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
:root {
  --md-outlined-button-container-shape: 0px;
  --md-outlined-button-label-text-font: system-ui;
  --md-sys-color-primary: #006A6A;
  --md-sys-color-outline: #6F7979;
}
</style>

<md-outlined-button>Outlined</md-outlined-button>
```

### Text button tokens

Token                               | Default value
----------------------------------- | -------------------------------------
`--md-text-button-label-text-color` | `--md-sys-color-primary`
`--md-text-button-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-text-button.scss)
    <!-- {.external} -->

### Text button example

<!-- no-catalog-start -->

![Image of a text button with a different theme applied](images/button/theming-text-button.webp "Text button theming example.")

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      class="styled-example"
      title="Text button theming example."
      aria-label="Image of a text button with a different theme applied">
    <style>
      .styled-example {
        background-color: white;
        --md-text-button-label-text-font: system-ui;
        --md-sys-color-primary: #006A6A;
      }
    </style>

    <md-text-button>Text</md-text-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
:root {
  --md-text-button-label-text-font: system-ui;
  --md-sys-color-primary: #006A6A;
}
</style>

<md-text-button>Text</md-text-button>
```

<!-- auto-generated API docs start -->

## API


### MdElevatedButton <code>&lt;md-elevated-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the button is disabled. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | Whether or not the button is "soft-disabled" (disabled but still focusable).<br>Use this when a button needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `href` | `href` | `string` | `''` | The URL that the link button points to. |
| `download` | `download` | `string` | `''` | The filename to use when downloading the linked resource. If not specified, the browser will determine a filename. This is only applicable when the button is used as a link (`href` is set). |
| `target` | `target` | `string` | `''` | Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab. |
| `trailingIcon` | `trailing-icon` | `boolean` | `false` | Whether to render the icon at the inline end of the label rather than the inline start.<br>_Note:_ Link buttons cannot have trailing icons. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Whether to display the icon or not. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdFilledButton <code>&lt;md-filled-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the button is disabled. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | Whether or not the button is "soft-disabled" (disabled but still focusable).<br>Use this when a button needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `href` | `href` | `string` | `''` | The URL that the link button points to. |
| `download` | `download` | `string` | `''` | The filename to use when downloading the linked resource. If not specified, the browser will determine a filename. This is only applicable when the button is used as a link (`href` is set). |
| `target` | `target` | `string` | `''` | Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab. |
| `trailingIcon` | `trailing-icon` | `boolean` | `false` | Whether to render the icon at the inline end of the label rather than the inline start.<br>_Note:_ Link buttons cannot have trailing icons. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Whether to display the icon or not. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdFilledTonalButton <code>&lt;md-filled-tonal-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the button is disabled. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | Whether or not the button is "soft-disabled" (disabled but still focusable).<br>Use this when a button needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `href` | `href` | `string` | `''` | The URL that the link button points to. |
| `download` | `download` | `string` | `''` | The filename to use when downloading the linked resource. If not specified, the browser will determine a filename. This is only applicable when the button is used as a link (`href` is set). |
| `target` | `target` | `string` | `''` | Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab. |
| `trailingIcon` | `trailing-icon` | `boolean` | `false` | Whether to render the icon at the inline end of the label rather than the inline start.<br>_Note:_ Link buttons cannot have trailing icons. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Whether to display the icon or not. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdOutlinedButton <code>&lt;md-outlined-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the button is disabled. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | Whether or not the button is "soft-disabled" (disabled but still focusable).<br>Use this when a button needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `href` | `href` | `string` | `''` | The URL that the link button points to. |
| `download` | `download` | `string` | `''` | The filename to use when downloading the linked resource. If not specified, the browser will determine a filename. This is only applicable when the button is used as a link (`href` is set). |
| `target` | `target` | `string` | `''` | Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab. |
| `trailingIcon` | `trailing-icon` | `boolean` | `false` | Whether to render the icon at the inline end of the label rather than the inline start.<br>_Note:_ Link buttons cannot have trailing icons. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Whether to display the icon or not. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdTextButton <code>&lt;md-text-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the button is disabled. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | Whether or not the button is "soft-disabled" (disabled but still focusable).<br>Use this when a button needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `href` | `href` | `string` | `''` | The URL that the link button points to. |
| `download` | `download` | `string` | `''` | The filename to use when downloading the linked resource. If not specified, the browser will determine a filename. This is only applicable when the button is used as a link (`href` is set). |
| `target` | `target` | `string` | `''` | Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab. |
| `trailingIcon` | `trailing-icon` | `boolean` | `false` | Whether to render the icon at the inline end of the label rather than the inline start.<br>_Note:_ Link buttons cannot have trailing icons. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Whether to display the icon or not. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: checkbox.md -->

# Checkbox

<!-- catalog-only-start --><!-- ---
name: Checkbox
dirname: checkbox
-----><!-- catalog-only-end -->

<catalog-component-header>
<catalog-component-header-title slot="title">

# Checkbox

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: {
  owner: 'lizmitchell'
  reviewed: '2025-11-23'
}
tag: 'docType:reference'
*-->

<!-- no-catalog-start -->

<!-- go/md-checkbox -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/checkbox/).**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Checkboxes](https://m3.material.io/components/checkbox)<!-- {.external} --> allow users
to select one or more items from a set. Checkboxes can turn an option on or off.

There's one type of checkbox in Material. Use this selection control when the
user needs to select one or more options from a list.

</catalog-component-header-title>

<img
    class="hero"
    src="images/checkbox/hero.webp"
    alt="A list of burger additions represented with checkboxes"
    title="Checkboxes in a list of items.">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/checkbox) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/checkbox)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Usage

Checkboxes may be standalone, pre-checked, or indeterminate.

<!-- no-catalog-start -->

![Three checkboxes in a row that are unselected, selected, and indeterminate](images/checkbox/usage.webp "Unselected, selected, and indeterminate checkboxes.")

<!-- no-catalog-end -->
<!-- catalog-include "figures/checkbox/usage.html" -->

```html
<md-checkbox touch-target="wrapper"></md-checkbox>
<md-checkbox touch-target="wrapper" checked></md-checkbox>
<md-checkbox touch-target="wrapper" indeterminate></md-checkbox>
```

### Label

Associate a label with a checkbox using the `<label>` element.

<!-- no-catalog-start -->

![Two checkboxes with labels](images/checkbox/usage-label.webp "Labeled checkboxes.")

<!-- no-catalog-end -->
<!-- catalog-include "figures/checkbox/usage-label.html" -->

```html
<label>
  <md-checkbox touch-target="wrapper"></md-checkbox>
  Checkbox one
</label>

<md-checkbox id="checkbox-two" touch-target="wrapper"></md-checkbox>
<label for="checkbox-two">Checkbox two</label>
```

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute to checkboxes without labels or checkboxes whose labels need to be
more descriptive.

```html
<md-checkbox aria-label="Select all checkboxes"></md-checkbox>

<label>
  <md-checkbox aria-label="Agree to terms and conditions"></md-checkbox>
  Agree
</label>
```

> Note: checkboxes are not automatically labelled by `<label>` elements and
> always need an `aria-label`. See b/294081528.

## Theming

Checkbox supports [Material theming](../theming/README.md) and can be customized
in terms of color and shape.

### Tokens

Token                                    | Default value
---------------------------------------- | -----------------------------------
`--md-checkbox-outline-color`            | `--md-sys-color-on-surface-variant`
`--md-checkbox-selected-container-color` | `--md-sys-color-primary`
`--md-checkbox-selected-icon-color`      | `--md-sys-color-on-primary`
`--md-checkbox-container-shape`          | `2px`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-checkbox.scss)
    <!-- {.external} -->

### Example

<!-- no-catalog-start -->

![Image of a checkbox with a different theme applied](images/checkbox/theming.webp "Checkbox theming example.")

<!-- no-catalog-end -->
<!-- catalog-include "figures/checkbox/theming.html" -->

```html
<style>
  :root {
    /* System tokens */
    --md-sys-color-primary: #006a6a;
    --md-sys-color-on-primary: #ffffff;
    --md-sys-color-on-surface-variant: #3f4948;

    /* Component tokens */
    --md-checkbox-container-shape: 0px;
  }
</style>

<md-checkbox touch-target="wrapper"></md-checkbox>
<md-checkbox touch-target="wrapper" checked></md-checkbox>
```

<!-- auto-generated API docs start -->

## API


### MdCheckbox <code>&lt;md-checkbox&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `checked` | `checked` | `boolean` | `false` | Whether or not the checkbox is selected. |
| `indeterminate` | `indeterminate` | `boolean` | `false` | Whether or not the checkbox is indeterminate.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes |
| `required` | `required` | `boolean` | `false` | When true, require the checkbox to be selected when participating in form submission.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation |
| `value` | `value` | `string` | `'on'` | The value of the checkbox that is submitted with a form when selected.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value |
| `disabled` |  | `boolean` | `undefined` |  |
| `name` |  | `string` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `formResetCallback` | _None_ | `void` |  |
| `formStateRestoreCallback` | `state` | `void` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `change` | `Event` | Yes | No | The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) |
| `input` | `InputEvent` | Yes | Yes | The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: chip.md -->

# Chip

<!-- catalog-only-start --><!-- ---
name: Chips
dirname: chips
-----><!-- catalog-only-end -->

<catalog-component-header image-align="start">
<catalog-component-header-title slot="title">

# Chips

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- no-catalog-start -->

<!-- go/md-chips -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/chip/)**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Chips](https://m3.material.io/components/chips)<!-- {.external} --> help people enter
information, make selections, filter content, or trigger actions.

While buttons are expected to appear consistently and with familiar calls to
action, chips should appear dynamically as a group of multiple interactive
elements.

</catalog-component-header-title>

<img class="hero" src="images/chips/hero.webp" alt="Two collections of filter chips, with some options selected and some unselected."
title="Filter chips">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/chips) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/chips)
    <!-- {.external} -->

## Types

1.  [Assist chip](#assist-chip)
1.  [Filter chip](#filter-chip)
1.  [Input chip](#input-chip)
1.  [Suggestion chip](#suggestion-chip)

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Usage

Choose the type of chip based on its purpose and author.

-   **Assist** chips are common actions, such as adding an event to a calendar.
-   **Filter** chips are tags used to filter content, such as shopping
    categories.
-   **Input** chips are pieces of information entered by a user, such as event
    attendees.
-   **Suggestion** chips represent dynamic suggestions for user input, such as
    text message replies.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<md-chip-set>
  <md-assist-chip label="Assist"></md-assist-chip>
  <md-filter-chip label="Filter"></md-filter-chip>
  <md-input-chip label="Input"></md-input-chip>
  <md-suggestion-chip label="Suggestion"></md-suggestion-chip>
</md-chip-set>
```

### Chip sets

<!-- go/md-chip-set -->

Chips should always appear in a set. Chip sets are
[toolbars](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/toolbar_role)<!-- {.external} -->
that can display any type of chip or other toolbar items.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<h3>New event</h3>
<md-chip-set>
  <md-filter-chip label="All day"></md-filter-chip>
  <md-assist-chip label="Add to calendar"></md-assist-chip>
  <md-assist-chip label="Set a reminder"></md-assist-chip>
</md-chip-set>
```

### Icons

All chips may display an optional icon. Input chips can specify if an avatar
picture is displayed.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage-scenario-one.html" -->
<!-- catalog-only-end -->

```html
<md-chip-set>
  <md-assist-chip label="Add to calendar">
    <md-icon slot="icon">event</md-icon>
  </md-assist-chip>

  <md-input-chip label="Ping Qiang" avatar>
    <img slot="icon" src="...">
  </md-input-chip>
</md-chip-set>
```

### Elevated

Assist, filter, and suggestion chips can be elevated if the placement requires
protection, such as on top of an image.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage-scenario-one.html" -->
<!-- catalog-only-end -->

```html
<div>
  <img src="...">
  <md-chip-set>
    <md-suggestion-chip label="Share" elevated></md-suggestion-chip>
    <md-suggestion-chip label="Favorite" elevated></md-suggestion-chip>
  </md-chip-set>
</div>
```

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute to chip sets or reference a label with
[`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)<!-- {.external} -->.
Add an `aria-label` to chips whose labels need to be more descriptive.

```html
<h3 id="dates-label">Dates</h3>
<md-chip-set aria-labelledby="dates-label">
  <md-filter-chip label="Mon" aria-label="Monday"></md-filter-chip>
  <md-filter-chip label="Tue" aria-label="Tuesday"></md-filter-chip>
  <md-filter-chip label="Wed" aria-label="Wednesday"></md-filter-chip>
</md-chip-set>
```

### Focusable and disabled

By default, disabled chips are not focusable with the keyboard, while
"soft-disabled" chips are. Some use cases encourage focusability of disabled
toolbar items to increase their discoverability.

See the
[ARIA guidelines on focusability of disabled controls](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls)<!-- {.external} -->
for guidance on when this is recommended.

```html
<md-chip-set aria-label="Actions">
  <!--
    Disabled until text is selected. Since both are disabled by default, keep
    them focusable so that screen readers can discover the actions available.
  -->
  <md-assist-chip label="Copy" soft-disabled></md-assist-chip>
  <md-assist-chip label="Paste" soft-disabled></md-assist-chip>
</md-chip-set>
<md-outlined-text-field type="textarea"></md-outlined-text-field>
```

## Assist chip

<!-- go/md-assist-chip -->

[Assist chips](https://m3.material.io/components/chips/guidelines#5dd1928c-1476-4029-bdc5-fde66fc0dcb1)<!-- {.external} -->
represent smart or automated actions that can span multiple apps, such as
opening a calendar event from the home screen.

Assist chips function as though the user asked an assistant to complete the
action. They should appear dynamically and contextually in a UI.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage-scenario-one.html" -->
<!-- catalog-only-end -->

```html
<h3>A restaraunt location</h3>
<md-chip-set>
  <md-assist-chip label="Add to my itinerary">
    <md-icon slot="icon">calendar</md-icon>
  </md-assist-chip>
  <md-assist-chip label="12 mins from hotel">
    <md-icon slot="icon">map</md-icon>
  </md-assist-chip>
</md-chip-set>
```

## Filter chip

<!-- go/md-filter-chip -->

[Filter chips](https://m3.material.io/components/chips/guidelines#8d453d50-8d8e-43aa-9ae3-87ed134d2e64)<!-- {.external} -->
use tags or descriptive words to filter content. They can be a good alternative
to toggle buttons or checkboxes.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage-scenario-one.html" -->
<!-- catalog-only-end -->

```html
<h3>Choose where to share</h3>
<md-chip-set>
  <md-filter-chip label="Docs"></md-filter-chip>
  <md-filter-chip label="Slides" selected></md-filter-chip>
  <md-filter-chip label="Sheets" selected></md-filter-chip>
  <md-filter-chip label="Images"></md-filter-chip>
</md-chip-set>
```

### Removable

Filter chips can optionally be removable from the chip set. Removable chips have
a trailing remove icon.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage-scenario-one.html" -->
<!-- catalog-only-end -->

```html
<h3>Colors</h3>
<md-chip-set>
  <md-filter-chip label="Red" removable selected></md-filter-chip>
  <md-filter-chip label="Yellow" removable></md-filter-chip>
  <md-filter-chip label="Blue" removable></md-filter-chip>
  <md-filter-chip label="Green" removable></md-filter-chip>
</md-chip-set>
```

## Input chip

<!-- go/md-input-chip -->

[Input chips](https://m3.material.io/components/chips/guidelines#4d2d5ef5-3fcd-46e9-99f2-067747b2393f)<!-- {.external} -->
represent discrete pieces of information entered by a user, such as Gmail
contacts or filter options within a search field.

Input chips whose icons are user images may add the `avatar` attribute to
display the image in a larger circle.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage-scenario-one.html" -->
<!-- catalog-only-end -->

```html
<md-outlined-text-field label="Attendees" type="email"></md-outlined-text-field>

<md-chip-set>
  <md-input-chip label="Ping Qiang" avatar>
    <img slot="icon" src="...">
  </md-input-chip>
  <md-input-chip label="Thea Schröder" avatar>
    <img slot="icon" src="...">
  </md-input-chip>
</md-chip-set>
```

### Remove-only

All input chips are removable. If an input chip does not have an action
associated with clicking on it, it may be marked as `remove-only`.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage-scenario-one.html" -->
<!-- catalog-only-end -->

```html
<h3>Favorite movies</h3>
<md-chip-set>
  <md-input-chip label="Star Wars" remove-only></md-input-chip>
  <md-input-chip label="Star Trek" remove-only></md-input-chip>
</md-chip-set>
```

## Suggestion chip

<!-- go/md-suggestion-chip -->

[Suggestion chips](https://m3.material.io/components/chips/guidelines#36d7bb16-a9bf-4cf6-a73d-8e05510d66a7)<!-- {.external} -->
help narrow a user’s intent by presenting dynamically generated suggestions,
such as possible responses or search filters.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage-scenario-one.html" -->
<!-- catalog-only-end -->

```html
<h3>Suggested reply</h3>
<md-chip-set>
  <md-suggestion-chip label="I agree"></md-suggestion-chip>
  <md-suggestion-chip label="Looks good to me"></md-suggestion-chip>
  <md-suggestion-chip label="Thank you"></md-suggestion-chip>
</md-chip-set>
```

## Theming

Chips support [Material theming](../theming/README.md) and can be customized in
terms of color, typography, and shape.

### Assist chip tokens

Token                               | Default value
----------------------------------- | -------------------------------------
`--md-assist-chip-outline-color`    | `--md-sys-color-outline`
`--md-assist-chip-container-shape`  | `--md-sys-shape-corner-small`
`--md-assist-chip-icon-size`        | `18px`
`--md-assist-chip-label-text-color` | `--md-sys-color-on-surface`
`--md-assist-chip-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-assist-chip.scss)
    <!-- {.external} -->

### Assist chip example

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/theming.html" -->

```html
<style>
:root {
  --md-assist-chip-container-shape: 0px;
  --md-assist-chip-label-text-font: system-ui;
  --md-sys-color-outline: #6F7979;
  --md-sys-color-on-surface: #191C1C;
}
</style>

<md-assist-chip label="Assist"></md-assist-chip>
```

### Filter chip tokens

Token                                       | Default value
------------------------------------------- | -------------
`--md-filter-chip-selected-container-color` | `--md-sys-color-secondary-container`
`--md-filter-chip-outline-color`            | `--md-sys-color-outline`
`--md-filter-chip-container-shape`          | `--md-sys-shape-corner-small`
`--md-filter-chip-icon-size`                | `18px`
`--md-filter-chip-label-text-color`         | `--md-sys-color-on-surface`
`--md-filter-chip-label-text-font`          | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-filter-chip.scss)
    <!-- {.external} -->

### Filter chip example

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/theming.html" -->

```html
<style>
:root {
  --md-filter-chip-container-shape: 0px;
  --md-filter-chip-label-text-font: system-ui;
  --md-sys-color-outline: #6f7979;
  --md-sys-color-on-surface: #191c1c;
  --md-sys-color-secondary-container: #cce8e7;
}
</style>

<md-filter-chip label="Filter"></md-filter-chip>
```

### Input chip tokens

Token                              | Default value
---------------------------------- | -------------------------------------
`--md-input-chip-outline-color`    | `--md-sys-color-outline`
`--md-input-chip-container-shape`  | `--md-sys-shape-corner-small`
`--md-input-chip-icon-size`        | `18px`
`--md-input-chip-label-text-color` | `--md-sys-color-on-surface`
`--md-input-chip-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-input-chip.scss)
    <!-- {.external} -->

### Input chip example

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/theming.html" -->

```html
<style>
:root {
  --md-input-chip-container-shape: 0px;
  --md-input-chip-label-text-font: system-ui;
  --md-sys-color-outline: #6f7979;
  --md-sys-color-on-surface: #191c1c;
}
</style>

<md-input-chip label="Input"></md-input-chip>
```

### Suggestion chip tokens

Token                                   | Default value
--------------------------------------- | -------------------------------------
`--md-suggestion-chip-outline-color`    | `--md-sys-color-outline`
`--md-suggestion-chip-container-shape`  | `--md-sys-shape-corner-small`
`--md-suggestion-chip-icon-size`        | `18px`
`--md-suggestion-chip-label-text-color` | `--md-sys-color-on-surface`
`--md-suggestion-chip-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-suggestion-chip.scss)
    <!-- {.external} -->

### Suggestion chip example

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/theming.html" -->

```html
<style>
:root {
  --md-suggestion-chip-container-shape: 0px;
  --md-suggestion-chip-label-text-font: system-ui;
  --md-sys-color-outline: #6f7979;
  --md-sys-color-on-surface: #191c1c;
}
</style>

<md-suggestion-chip label="Suggestion"></md-suggestion-chip>
```

<!-- auto-generated API docs start -->

## API


### MdChipSet <code>&lt;md-chip-set&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `chips` |  | `Chip[]` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdAssistChip <code>&lt;md-assist-chip&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `elevated` | `elevated` | `boolean` | `false` |  |
| `href` | `href` | `string` | `''` |  |
| `download` | `download` | `string` | `''` | The filename to use when downloading the linked resource. If not specified, the browser will determine a filename. This is only applicable when the chip is used as a link (`href` is set). |
| `target` | `target` | `string` | `''` |  |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the chip is disabled.<br>Disabled chips are not focusable, unless `always-focusable` is set. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | Whether or not the chip is "soft-disabled" (disabled but still focusable).<br>Use this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `alwaysFocusable` | `always-focusable` | `boolean` | `false` | When true, allow disabled chips to be focused with arrow keys.<br>Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `label` | `label` | `string` | `''` | The label of the chip. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Only needed for SSR.<br>Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `update-focus` | `Event` | Yes | No | Dispatched when `disabled` is toggled. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdFilterChip <code>&lt;md-filter-chip&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `elevated` | `elevated` | `boolean` | `false` |  |
| `removable` | `removable` | `boolean` | `false` |  |
| `selected` | `selected` | `boolean` | `false` |  |
| `hasSelectedIcon` | `has-selected-icon` | `boolean` | `false` | Only needed for SSR.<br>Add this attribute when a filter chip has a `slot="selected-icon"` to avoid a Flash Of Unstyled Content. |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the chip is disabled.<br>Disabled chips are not focusable, unless `always-focusable` is set. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | Whether or not the chip is "soft-disabled" (disabled but still focusable).<br>Use this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `alwaysFocusable` | `always-focusable` | `boolean` | `false` | When true, allow disabled chips to be focused with arrow keys.<br>Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `label` | `label` | `string` | `''` | The label of the chip. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Only needed for SSR.<br>Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content. |
| `handleTrailingActionFocus` |  | `() => void` | `undefined` |  |
| `ariaLabelRemove` |  | `string` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `remove` | `Event` | No | No | Dispatched when the remove button is clicked. |
| `update-focus` | `Event` | Yes | No | Dispatched when `disabled` is toggled. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdInputChip <code>&lt;md-input-chip&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `avatar` | `avatar` | `boolean` | `false` |  |
| `href` | `href` | `string` | `''` |  |
| `target` | `target` | `string` | `''` |  |
| `removeOnly` | `remove-only` | `boolean` | `false` |  |
| `selected` | `selected` | `boolean` | `false` |  |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the chip is disabled.<br>Disabled chips are not focusable, unless `always-focusable` is set. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | Whether or not the chip is "soft-disabled" (disabled but still focusable).<br>Use this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `alwaysFocusable` | `always-focusable` | `boolean` | `false` | When true, allow disabled chips to be focused with arrow keys.<br>Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `label` | `label` | `string` | `''` | The label of the chip. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Only needed for SSR.<br>Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content. |
| `handleTrailingActionFocus` |  | `() => void` | `undefined` |  |
| `ariaLabelRemove` |  | `string` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `remove` | `Event` | No | No | Dispatched when the remove button is clicked. |
| `update-focus` | `Event` | Yes | No | Dispatched when `disabled` is toggled. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdSuggestionChip <code>&lt;md-suggestion-chip&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `elevated` | `elevated` | `boolean` | `false` |  |
| `href` | `href` | `string` | `''` |  |
| `download` | `download` | `string` | `''` | The filename to use when downloading the linked resource. If not specified, the browser will determine a filename. This is only applicable when the chip is used as a link (`href` is set). |
| `target` | `target` | `string` | `''` |  |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the chip is disabled.<br>Disabled chips are not focusable, unless `always-focusable` is set. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | Whether or not the chip is "soft-disabled" (disabled but still focusable).<br>Use this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `alwaysFocusable` | `always-focusable` | `boolean` | `false` | When true, allow disabled chips to be focused with arrow keys.<br>Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `label` | `label` | `string` | `''` | The label of the chip. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Only needed for SSR.<br>Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `update-focus` | `Event` | Yes | No | Dispatched when `disabled` is toggled. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: dialog.md -->

# Dialog

<!-- catalog-only-start --><!-- ---
name: Dialogs
dirname: dialog
-----><!-- catalog-only-end -->

<catalog-component-header image-align="start">
<catalog-component-header-title slot="title">

# Dialogs

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- no-catalog-start -->

<!-- go/md-dialog -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/dialog/)**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Dialogs](https://m3.material.io/components/dialogs)<!-- {.external} --> provide
important prompts in a user flow.

</catalog-component-header-title>

<img class="hero" src="images/dialog/hero.webp" alt="A dialog displaying phone ringtone options."
title="A dialog">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/dialogs) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/dialog)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Usage

Dialogs behave like
[`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)<!-- {.external} -->
elements, and can be closed with a `<form method="dialog">` element.

Dialogs have three optional sections: the headline title, the main content, and
action buttons.

```html
<md-dialog>
  <div slot="headline">
    Dialog title
  </div>
  <form slot="content" id="form-id" method="dialog">
    A simple dialog with free-form content.
  </form>
  <div slot="actions">
    <md-text-button form="form-id">Ok</md-text-button>
  </div>
</md-dialog>
```

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

> Tip: use `margin`, `height`, and `width` CSS properties to control the
> dialog's size and position.

### Opening and closing

Dialogs are opened and closed by setting the `open` attribute or property.

```html
<md-dialog open>
  <div slot="content">
    A dialog that is opened by default.
  </div>
</md-dialog>
```

Dialogs are also opened and closed by calling `dialog.show()` and
`dialog.close()`.

Both return a Promise that resolves after the dialog's animation finishes.

```ts
closeButton.addEventListener('click', async () => {
  await dialog.close();
});
```

### Return value

A button's value attribute will set the dialog's `returnValue` property to
identify which button closed it.

```html
<md-dialog open>
  <form slot="content" id="form-id" method="dialog">...</form>
  <div slot="actions">
    <md-text-button form="form-id" value="cancel">Cancel</md-text-button>
    <md-text-button form="form-id" value="ok">Ok</md-text-button>
  </div>
</md-dialog>
```

```ts
dialog.addEventListener('close', () => {
  const cancelClicked = dialog.returnValue === 'cancel';
  const okClicked = dialog.returnValue === 'ok';
});
```

## Accessibility

Dialogs are labelled by their headlines. Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute to dialogs without a headline.

```html
<md-dialog aria-label="Error message">
  <div slot="content">An error occurred, details ...</div>
</md-dialog>
```

### Alerts

Add a
[`type="alert"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
attribute to dialogs that need to communicate an important message and require a
user's response.

Common examples include error messages that require confirmation and other
action confirmation prompts.

```html
<md-dialog type="alert">
  <div slot="headline">Confirm deletion</div>
  <form slot="content" id="form-id" method="dialog">
    Are you sure you wish to delete this item?
  </form>
  <div slot="actions">
    <md-text-button form="form-id" value="cancel">Cancel</md-text-button>
    <md-text-button form="form-id" value="delete">Delete</md-text-button>
  </div>
</md-dialog>
```

## Theming

Dialogs supports [Material theming](../theming/README.md) and can be customized
in terms of color, typography, and shape.

### Tokens

Token                               | Default value
----------------------------------- | ---------------------------------------
`--md-dialog-container-color`       | `--md-sys-color-surface-container-high`
`--md-dialog-headline-color`        | `--md-sys-color-on-surface`
`--md-dialog-headline-font`         | `--md-sys-typescale-headline-small-font`
`--md-dialog-supporting-text-color` | `--md-sys-color-on-surface-variant`
`--md-dialog-supporting-text-font`  | `--md-sys-typescale-body-medium-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-dialog.scss)
    <!-- {.external} -->

### Example

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<style>
:root {
  /* System tokens */
  --md-sys-color-surface-container-highest: #dde4e3;
  --md-sys-color-on-surface: #161d1d;
  --md-sys-color-on-surface-variant: #3f4948;
  --md-sys-typescale-body-medium: system-ui 16px/24px;
  --md-sys-typescale-headline-small: system-ui 24px/32px;

  /* Component tokens */
  --md-dialog-container-shape: 0px;
}
</style>

<md-dialog>
  <div slot="headline">Title</div>
  <div slot="content">Dialog content</div>
</md-dialog>
```

<!-- auto-generated API docs start -->

## API


### MdDialog <code>&lt;md-dialog&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `quick` | `quick` | `boolean` | `false` | Skips the opening and closing animations. |
| `returnValue` |  | `string` | `''` | Gets or sets the dialog's return value, usually to indicate which button a user pressed to close it.<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue |
| `type` | `type` | `string` | `undefined` | The type of dialog for accessibility. Set this to `alert` to announce a dialog as an alert dialog. |
| `noFocusTrap` | `no-focus-trap` | `boolean` | `false` | Disables focus trapping, which by default keeps keyboard Tab navigation within the dialog.<br>When disabled, after focusing the last element of a dialog, pressing Tab again will release focus from the window back to the browser (such as the URL bar).<br>Focus trapping is recommended for accessibility, and should not typically be disabled. Only turn this off if the use case of a dialog is more accessible without focus trapping. |
| `open` | `open` | `boolean` | `undefined` |  |
| `getOpenAnimation` |  | `() => DialogAnimation` | `function { ... }` | Gets the opening animation for a dialog. Set to a new function to customize the animation. |
| `getCloseAnimation` |  | `() => DialogAnimation` | `function { ... }` | Gets the closing animation for a dialog. Set to a new function to customize the animation. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `show` | _None_ | `Promise<void>` | Opens the dialog and fires a cancelable `open` event. After a dialog's animation, an `opened` event is fired.<br>Add an `autofocus` attribute to a child of the dialog that should receive focus after opening. |
| `close` | `returnValue` | `Promise<void>` | Closes the dialog and fires a cancelable `close` event. After a dialog's animation, a `closed` event is fired. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `open` | `Event` | No | No | Dispatched when the dialog is opening before any animations. |
| `opened` | `Event` | No | No | Dispatched when the dialog has opened after any animations. |
| `close` | `Event` | No | No | Dispatched when the dialog is closing before any animations. |
| `closed` | `Event` | No | No | Dispatched when the dialog has closed after any animations. |
| `cancel` | `Event` | No | No | Dispatched when the dialog has been canceled by clicking on the scrim or pressing Escape. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: divider.md -->

# Divider

# Divider

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- go/md-divider -->

<!-- [TOC] -->

A [divider](https://m3.material.io/components/divider)<!-- {.external} --> is a thin line
that groups content in lists and containers.

Dividers can reinforce tapability, such as when used to separate list items or
define tappable regions in an accordion.

![Screenshot of five stacked dividers](images/divider/hero.webp "Dividers separating items in a list.")

*   [Design article](https://m3.material.io/components/divider) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/divider)
    <!-- {.external} -->

## Usage

Use full width dividers to separate larger sections of unrelated content.

![A full width divider separating two paragraphs of "Lorem ipsum"](images/divider/usage.webp "Full width divider example")

```html
<section>
  <p>Lorem ipsum...</p>
  <md-divider></md-divider>
  <p>Lorem ipsum...</p>
</section>
```

### Inset dividers

Use inset dividers to separate related content within a section.

![A list of design system names separated by an inset divider](images/divider/usage-inset.webp "Inset divider example")

```html
<section>
  <p>Material 2</p>
  <md-divider inset></md-divider>
  <p>Material 3</p>
</section>
```

Inset dividers are equally indented from both sides of the screen by default.
Use `inset-start` or `inset-end` to change this.

![A list of design system names separated by a leading inset divider](images/divider/usage-inset-start.webp "Leading inset divider example")

```html
<section>
  <p>Material 2</p>
  <md-divider inset-start></md-divider>
  <p>Material 3</p>
</section>
```

## Accessibility

Dividers are decorative by default and not announced by assistive technology.

Add a
[`role="separator"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role)<!-- {.external} -->
attribute to non-decorative dividers that should be announced.

```html
<ul>
  <li>Item one</li>
  <md-divider inset></md-divider>
  <li>Item two</li>
  <md-divider role="separator"></md-divider>
  <li>Item three</li>
  <md-divider inset></md-divider>
  <li>Item four</li>
</ul>
```

## Theming

Divider supports [theming](../theming/README.md) and can be customized with CSS
custom property tokens.

### Tokens

Token                    | Default value
------------------------ | --------------------------------
`--md-divider-color`     | `--md-sys-color-outline-variant`
`--md-divider-thickness` | `1px`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-divider.scss)
    <!-- {.external} -->

### Example

![A customized divider with a different color and thickness](images/divider/theming.webp "Divider theming example.")

```html
<style>
:root {
  --md-sys-color-outline-variant: #BEC9C8;
  --md-divider-thickness: 2px;
}
</style>

<section>
  <p>Lorem ipsum...</p>
  <md-divider></md-divider>
  <p>Lorem ipsum...</p>
</section>
```

<!-- auto-generated API docs start -->

## API


### MdDivider <code>&lt;md-divider&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `inset` | `inset` | `boolean` | `false` | Indents the divider with equal padding on both sides. |
| `insetStart` | `inset-start` | `boolean` | `false` | Indents the divider with padding on the leading side. |
| `insetEnd` | `inset-end` | `boolean` | `false` | Indents the divider with padding on the trailing side. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: elevation.md -->

# Elevation

# Elevation

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- go/md-elevation -->

<!-- [TOC] -->

[Elevation](https://m3.material.io/styles/elevation)<!-- {.external} --> is the relative
distance between two surfaces along the z-axis.

Material's elevation system is deliberately limited to just a handful of levels.
This creative constraint means you need to make thoughtful decisions about your
UI’s elevation story.

![Diagram showing the five elevation levels and their respective dp values](images/elevation/hero.webp "Material uses six levels of elevation, each with a corresponding dp value. These values are named for their relative distance above the UI’s surface: 0, +1, +2, +3, +4, and +5. An element’s resting state can be on levels 0 to +3, while levels +4 and +5 are reserved for user-interacted states such as hover and dragged.")

*   [Design article](https://m3.material.io/styles/elevation) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/elevation)
    <!-- {.external} -->

## Usage

Elevation can be set from 0 to 5 using the `--md-elevation-level` CSS custom
property. The elevation will automatically fill the nearest `position: relative`
element's size and shape.

![A rounded square with a drop shadow beneath it.](images/elevation/usage.webp "A surface with an elevation shadow.")

```html
<style>
  .surface {
    position: relative;
    border-radius: 16px;
    height: 64px;
    width: 64px;

    --md-elevation-level: 3;
  }
</style>
<div class="surface">
  <md-elevation></md-elevation>
  <!-- Content -->
</div>
```

### Animation

Shadows may be animated between levels by adding `transition-duration` and
`transition-easing-function` CSS properties.

![A rounded square with a drop shadow beneath it. After a moment, the square
lowers into the background and the shadow disappears, then
repeats.](images/elevation/usage-animation.gif "Animating between elevations.")

```html
<style>
  .surface {
    /* ... */
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;

    --md-elevation-level: 3;
  }

  .surface:active {
    --md-elevation-level: 0;
  }
</style>
<div class="surface">
  <md-elevation></md-elevation>
  <!-- Content -->
</div>
```

## Accessibility

Elevation is a visual component and does not have accessibility concerns.

## Theming

Elevation supports [Material theming](../theming/README.md) and can be
customized in terms of color.

### Tokens

Token                         | Default value
----------------------------- | -----------------------
`--md-elevation-level`        | `0`
`--md-elevation-shadow-color` | `--md-sys-color-shadow`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-elevation.scss)
    <!-- {.external} -->

### Example

![Image of an elevation surface with a different theme applied](images/elevation/theming.webp "Elevation theming example.")

```html
<style>
  .surface {
    position: relative;
    border-radius: 16px;
    height: 64px;
    width: 64px;
  }

  :root {
    --md-elevation-level: 5;
    --md-sys-color-shadow: #006A6A;
  }
</style>
<div class="surface">
  <md-elevation></md-elevation>
  <!-- Content -->
</div>
```

<!-- auto-generated API docs start -->
<!-- auto-generated API docs end -->


---

<!-- Source: fab.md -->

# Fab

<!-- catalog-only-start --><!-- ---
name: Floating action button (FAB)
dirname: fab
-----><!-- catalog-only-end -->

<catalog-component-header>
<catalog-component-header-title slot="title">

# Floating action buttons (FAB)

<!-- no-catalog-start -->

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- go/md-fab -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/fab/).**
<!-- external-only-end -->

<!-- no-catalog-end -->

[FAB](https://m3.material.io/components/floating-action-button)<!-- {.external} -->
represents the most important action on a screen. It puts key actions within
reach.

[Extended FABs](https://m3.material.io/components/extended-fab) help people take
primary actions. They're wider than FABs to accommodate a text label and larger
target area.

</catalog-component-header-title>

<img
    class="hero"
    alt="A phone showing a payment screen with a green filled button that says 'Make
payment'"
    src="images/fab/hero.webp">

</catalog-component-header>

*   Design articles
    *   [FAB](https://m3.material.io/components/floating-action-button)
        <!-- {.external} -->
    *   [Extended FAB](https://m3.material.io/components/extended-fab)
        <!-- {.external} -->
*   API Documentation (*coming soon*)
*   [Source code](https://github.com/material-components/material-web/tree/main/fab)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Types

<!-- no-catalog-start -->

![The 3 sizes of FAB](images/fab/fabs.webp "There are three sizes of floating action buttons: FAB, small FAB, and large FAB")

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/fabs.html" -->

1.  [FAB](#fab)
2.  [Small FAB](#sizes)
3.  [Large FAB](#sizes)

### Extended FAB

<!-- no-catalog-start -->

![2 examples of extended FABs](images/fab/extended-fabs.webp "There are two types of extended FABs with and without icon")

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/extended-fabs.html" -->

*   [Extended FAB with both icon and label text](#extended)
*   [API Documentation](#api)
*   [Extended FAB without icon](#without-icon)

## Usage

FABs should have an icon, such as a font `md-icon`, an `svg`, or an `img`.

<!-- no-catalog-start -->

![A standard surface fab](images/fab/usage-fab.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/usage-fab.html" -->

```html
<md-fab aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

### Lowered

FABs can be set to a lower elevation with the `lowered` attribute.

<!-- no-catalog-start -->

![A standard fab with an edit icon and lowered in elevation](images/fab/usage-lowered.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/usage-lowered.html" -->

```html
<md-fab lowered aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

## Accessibility

Icon-only FABs must include an `aria-label` that describes its action. Otherwise
if `aria-label` is not provided, the FAB will default to announcing its visible
contents.

```html
<md-fab aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

Extended FABs use their `label` for accessibility. Add an `aria-label` for
additional context if needed. By supplying the `label` attribute, the extended
FAB will make sure that the icon is not announced.

```html
<md-fab label="Edit" aria-label="Edit Comment">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

## FAB

FABs should display a clear and understandable icon.

<!-- no-catalog-start -->

![A standard surface fab](images/fab/usage-fab.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/usage-fab.html" -->

```html
<md-fab aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

### Extended

FABs may be extended with a label for additional emphasis. Extended FABs can
omit their icon.

<!-- no-catalog-start -->

![An extended FAB with an edit icon and the visible text edit](images/fab/usage-extended.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/usage-extended.html" -->

```html
<md-fab label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

#### Without icon

Extended FABs are the only FABs that can be used without an icon.

<!-- no-catalog-start -->

![An extended FAB with a visible label saying reroute](images/fab/usage-without-icon.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/usage-without-icon.html" -->

```html
<md-fab label="Reroute"></md-fab>
```

### Colors

FAB colors may be changed with the `variant` attribute. It can be set to
"surface" (default), "primary", "secondary", or "tertiary".

<!-- no-catalog-start -->

![Three fabs with edit icons next to each other but the first is primary
colored, second is secondary, and the last is tertiary
colored.](images/fab/usage-color.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/usage-color.html" -->

```html
<md-fab variant="primary" aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
<md-fab variant="secondary" aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
<md-fab variant="tertiary" aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

### Sizes

FABs may be small, medium (default), or large by setting the `size` attribute.
Small FABs can optionally further reduce their touch target.

<!-- no-catalog-start -->

![Four surface fabs side by side with edit icons of visual size size small,
small, medium, and large](images/fab/usage-sizes.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/usage-sizes.html" -->

```html
<md-fab size="small" touch-target="none" aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
<md-fab size="small" aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
<md-fab aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
<md-fab size="large" aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

## Branded FAB

<!-- no-catalog-start -->

<!-- go/md-branded-fab -->

<!-- no-catalog-end -->

Branded FABs use a brightly colored logo for their icon. Unlike [FAB](#fab),
branded FABs do not have color variants.

<!-- no-catalog-start -->

![A branded FAB with a google-colored plus icon.](images/fab/usage-branded.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/usage-branded.html" -->

```html
<md-branded-fab size="small" aria-label="Add">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
```

### Extended

Branded FABs may be extended with a label for additional emphasis. Unlike
[FAB](#fab), branded FABs should always display their logo icon.

<!-- no-catalog-start -->

![An extended branded fab with a google-colored plus icon and the visible text
Add](images/fab/usage-branded-extended.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/usage-branded-extended.html" -->

```html
<md-branded-fab label="Add">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
```

### Sizes

Branded FABs may be medium (default) or large by setting the `size` attribute.

<!-- no-catalog-start -->

![Two branded FABs next to each other with a google-branded plus icon. A medium
sized one and a large one.](images/fab/usage-branded-sizes.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/usage-branded-sizes.html" -->

```html
<md-branded-fab aria-label="Add">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
<md-branded-fab size="large" aria-label="Add">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
```

## Theming

FAB supports [Material theming](../theming/README.md) and can be customized in
terms of color, typography, and shape.

### FAB tokens

Token                              | Default value
---------------------------------- | ---------------------------------------
`--md-fab-container-color`         | `--md-sys-color-surface-container-high`
`--md-fab-lowered-container-color` | `--md-sys-color-surface-container-low`
`--md-fab-container-shape`         | `--md-sys-shape-corner-large`
`--md-fab-icon-color`              | `--md-sys-color-primary`
`--md-fab-icon-size`               | `24px`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-fab.scss)
    <!-- {.external} -->

### FAB example

<!-- no-catalog-start -->

![Image of a fab with a different theme applied](images/fab/theming-fab.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/theming-fab.html" -->

```html
<style>
  :root {
    --md-sys-color-surface-container-high: #e3e9e9;
    --md-sys-color-primary: #006a6a;
    --md-fab-container-shape: 0px;
    --md-fab-icon-size: 36px;
    background-color: #f4fbfa;
  }
</style>
<md-fab aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

#### Sizes tokens

Token                            | Default value
-------------------------------- | -------------
`--md-fab-small-container-shape` | `--md-sys-shape-corner-medium`
`--md-fab-small-icon-size`       | `24px`
`--md-fab-large-container-shape` | `--md-sys-shape-corner-extra-large`
`--md-fab-large-icon-size`       | `36px`

#### Extended FAB tokens

Token                      | Default value
-------------------------- | -------------------------------------
`--md-fab-label-text-font` | `--md-sys-typescale-label-large-font`

#### Extended FAB example

<!-- no-catalog-start -->

![Image of an extended FAB with a different theme applied](images/fab/theming-extended.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/theming-extended.html" -->

```html
<style>
  :root {
    --md-sys-color-surface-container-high: #e3e9e9;
    --md-sys-color-on-surface: #161d1d;
    --md-sys-color-primary: #006a6a;
    --md-fab-container-shape: 0px;
    --md-fab-icon-size: 36px;
    background-color: #f4fbfa;
  }
</style>
<md-fab label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

### Branded FAB tokens

Token                              | Default value
---------------------------------- | ---------------------------------------
`--md-fab-branded-container-color` | `--md-sys-color-surface-container-high`
`--md-fab-branded-container-shape` | `--md-sys-shape-corner-large`
`--md-fab-branded-icon-size`       | `36px`
`--md-fab-branded-label-text-font` | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-fab-branded.scss)
    <!-- {.external} -->

### Branded FAB example

<!-- no-catalog-start -->

![Image of two branded fabs, one regular, one extended with the visible label
Add with a different theme applied](images/fab/theming-branded.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/fab/theming-branded.html" -->

```html
<style>
  :root {
    --md-sys-color-surface-container-high: #e3e9e9;
    --md-sys-color-on-surface: #161d1d;
    --md-fab-branded-icon-size: 48px;
    --md-fab-branded-container-shape: 0px;
    background-color: #f4fbfa;
  }
</style>
<md-branded-fab size="small" aria-label="Add">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
<md-branded-fab size="small" label="Add">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
```

<!-- auto-generated API docs start -->

## API


### MdFab <code>&lt;md-fab&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `variant` | `variant` | `string` | `'surface'` | The FAB color variant to render. |
| `size` | `size` | `string` | `'medium'` | The size of the FAB.<br>NOTE: Branded FABs cannot be sized to `small`, and Extended FABs do not have different sizes. |
| `label` | `label` | `string` | `''` | The text to display on the FAB. |
| `lowered` | `lowered` | `boolean` | `false` | Lowers the FAB's elevation. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdBrandedFab <code>&lt;md-branded-fab&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `variant` | `variant` | `string` | `'surface'` | The FAB color variant to render. |
| `size` | `size` | `string` | `'medium'` | The size of the FAB.<br>NOTE: Branded FABs cannot be sized to `small`, and Extended FABs do not have different sizes. |
| `label` | `label` | `string` | `''` | The text to display on the FAB. |
| `lowered` | `lowered` | `boolean` | `false` | Lowers the FAB's elevation. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getRenderClasses` | _None_ | `{ primary: boolean; secondary: boolean; tertiary: boolean; small: boolean; lowered: boolean; large: boolean; extended: boolean; }` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: focus-ring.md -->

# Focus Ring

# Focus ring

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- go/md-focus-ring -->

<!-- [TOC] -->

Focus rings are accessible outlines for components to show keyboard focus.

Focus rings follow the same heuristics as
[`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)<!-- {.external} -->
to determine when they are visible.

![Three elements with a focus ring that moves between them.](images/focus/hero.gif "A focus ring moving across elements.")

*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/focus)
    <!-- {.external} -->

## Usage

Focus rings display on keyboard navigation. They may be attached to a control in
one of three ways.

![An element with a focus ring.](images/focus/usage.gif "A focus ring.")

1.  Attached to the parent element

    ```html
    <button style="position: relative">
      <md-focus-ring style="--md-focus-ring-shape: 8px"></md-focus-ring>
    </button>
    ```

1.  Attached to a referenced element

    ```html
    <div style="position: relative">
      <md-focus-ring for="control" style="--md-focus-ring-shape: 8px"></md-focus-ring>
      <input id="control">
    </div>
    ```

1.  Attached imperatively

    ```html
    <div style="position: relative">
      <md-focus-ring id="ring" style="--md-focus-ring-shape: 8px"></md-focus-ring>
      <button id="ring-control"></button>
    </div>
    <script>
      const focusRing = document.querySelector('#ring');
      const control = document.querySelector('#ring-control');
      focusRing.attach(control);
    </script>
    ```

> Note: focus rings must be placed within a `position: relative` container.

### Inward

Focus rings can be changed to animate inwards by adding an `inward` attribute.
This is useful for components like list items.

![An element with a focus ring that animates inward.](images/focus/usage-inward.gif "A focus ring animating inward.")

```html
<button style="position: relative">
  <md-focus-ring inward style="--md-focus-ring-shape: 8px"></md-focus-ring>
</button>
```

### Animation

The focus ring animation may be customized or disabled using CSS custom
properties.

![An element with a focus ring that does not animate.](images/focus/usage-animation.gif "A focus ring with disabled animations.")

```html
<style>
  md-focus-ring {
    --md-focus-ring-duration: 0s; /* disabled animation */
  }
</style>
```

## Accessibility

Focus rings are visual components and do not have assistive technology
requirements.

## Theming

Focus rings supports [Material theming](../theming/README.md) and can be
customized in terms of color and shape.

### Tokens

Token                   | Default value
----------------------- | --------------------------
`--md-focus-ring-color` | `--md-sys-color-secondary`
`--md-focus-ring-shape` | `--md-sys-shape-corner-full`
`--md-focus-ring-width` | `3px`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-focus-ring.scss)
    <!-- {.external} -->

### Example

![Image of a focus ring with a different theme applied](images/focus/theming.gif "Focus ring theming example.")

```html
<style>
md-focus-ring {
  --md-focus-ring-shape: 0px;
  --md-focus-ring-width: 2px;
  --md-focus-ring-active-width: 4px;
  --md-sys-color-secondary: #4A6363;
}
</style>

<button>
  <md-focus-ring></md-focus-ring>
</button>
```

<!-- auto-generated API docs start -->

## API


### MdFocusRing <code>&lt;md-focus-ring&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `visible` | `visible` | `boolean` | `false` | Makes the focus ring visible. |
| `inward` | `inward` | `boolean` | `false` | Makes the focus ring animate inwards instead of outwards. |
| `htmlFor` |  | `string` | `undefined` |  |
| `control` |  | `HTMLElement` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `attach` | `control` | `void` |  |
| `detach` | _None_ | `void` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `visibility-changed` | `Event` | No | No | Fired whenever `visible` changes. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: icon-button.md -->

# Icon Button

<!-- catalog-only-start --><!-- ---
name: Icon Buttons
dirname: iconbutton
-----><!-- catalog-only-end -->

<catalog-component-header>
<catalog-component-header-title slot="title">

# Icon Buttons

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- go/md-icon-button -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/icon-button/).**
<!-- external-only-end -->

[Icon buttons](https://m3.material.io/components/icon-buttons)<!-- {.external} --> help
people take supplementary actions with a single tap.

</catalog-component-header-title>
<img
    class="hero"
    alt="The top half of a phone application with a back icon button at the top left and three icon buttons on the top right, heart, share, and three dot."
    src="images/iconbutton/hero.webp">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/icon-buttons) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/iconbutton)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname, previewHeight=700 %}

-->

<!-- catalog-only-end -->

## Types

<!-- no-catalog-start -->

![Side by side view of standard and contained icon buttons](images/iconbutton/buttons.webp "1 - Standard Icon Button. 2 - Contained Icon Button (including filled, filled tonal, and outlined styles)")

<!-- no-catalog-end -->
<!-- catalog-include "figures/iconbutton/buttons.html" -->

1.  [Icon Button](#icon-button)
2.  [Filled Icon Button](#filled-icon-button)
3.  [Filled Tonal Icon Button](#filled-tonal-icon-button)
4.  [Outlined Icon Button](#outlined-icon-button)

## Usage

Use icon buttons to display actions in a compact layout. Icon buttons can
represent opening actions such as opening an overflow menu or search, or
represent binary actions that can be toggled on and off, such as favorite or
bookmark.

Icon buttons can be grouped together or they can stand alone.

To use icons by name, see the [Icon](icon.md#usage) documentation for loading
the icon font.

<!-- no-catalog-start -->

![A row of icon buttons](images/iconbutton/usage.webp "Icon buttons can be used within other components, such as a bottom app bar")

<!-- no-catalog-end -->
<!-- catalog-include "figures/iconbutton/usage.html" -->

```html
<md-icon-button>
  <md-icon>check</md-icon>
</md-icon-button>
<md-filled-icon-button>
  <md-icon>check</md-icon>
</md-filled-icon-button>
<md-filled-tonal-icon-button>
  <md-icon>check</md-icon>
</md-filled-tonal-icon-button>
<md-outlined-icon-button>
  <md-icon>check</md-icon>
</md-outlined-icon-button>
```

### Links

Add an
[`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href)<!-- {.external} -->
and optionally a
[`target`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target)<!-- {.external} -->
attribute to turn the icon button into a link.

```html
<md-icon-button href="https://google.com">
  <md-icon>check</md-icon>
</md-icon-button>
```

### Toggle

<!-- no-catalog-start -->

![Two rows of toggling icon buttons, the top row is unselected and the bottom
row is
selected](images/iconbutton/usage-toggle.webp "Unselected and Selected Icon Button")

<!-- no-catalog-end -->
<!-- catalog-include "figures/iconbutton/usage-toggle.html" -->

Toggle icon buttons allow a single choice to be selected or deselected, such as
adding or removing something from favorites.

Add a second icon in the `slot="selected"` slot to change the icon when
selected. Toggle icon buttons can be pre-selected by adding the `selected`
attribute.

```html
<div>
  <md-icon-button toggle>
    <md-icon>close</md-icon>
    <md-icon slot="selected">check</md-icon>
  </md-icon-button>
  <md-filled-icon-button toggle>
    <md-icon>close</md-icon>
    <md-icon slot="selected">check</md-icon>
  </md-filled-icon-button>
  <md-filled-tonal-icon-button toggle>
    <md-icon>close</md-icon>
    <md-icon slot="selected">check</md-icon>
  </md-filled-tonal-icon-button>
  <md-outlined-icon-button toggle>
    <md-icon>close</md-icon>
    <md-icon slot="selected">check</md-icon>
  </md-outlined-icon-button>
</div>
<div>
  <md-icon-button toggle selected>
    <md-icon>close</md-icon>
    <md-icon slot="selected">check</md-icon>
  </md-icon-button>
  <md-filled-icon-button toggle selected>
    <md-icon>close</md-icon>
    <md-icon slot="selected">check</md-icon>
  </md-filled-icon-button>
  <md-filled-tonal-icon-button toggle selected>
    <md-icon>close</md-icon>
    <md-icon slot="selected">check</md-icon>
  </md-filled-tonal-icon-button>
  <md-outlined-icon-button toggle selected>
    <md-icon>close</md-icon>
    <md-icon slot="selected">check</md-icon>
  </md-outlined-icon-button>
</div>
```

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute to icon buttons whose labels need a more descriptive label.

```html
<md-icon-button aria-label="Search for Contact">
  <md-icon>search</md-icon>
</md-icon-button>
```

### Toggle

Add an `aria-label-selected` attribute to toggle buttons whose labels need a
more descriptive label when selected.

```html
<md-icon-button toggle
  aria-label="Unselected"
  aria-label-selected="Selected">
  <md-icon>close</md-icon>
  <md-icon slot="selected">check</md-icon>
</md-icon-button>
```

### Focusable and disabled

By default, disabled icon buttons are not focusable with the keyboard, while
"soft-disabled" icon buttons are. Some use cases encourage focusability of
disabled toolbar items to increase their discoverability.

See the
[ARIA guidelines on focusability of disabled controls](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls)<!-- {.external} -->
for guidance on when this is recommended.

```html
<div role="toolbar">
  <md-icon-button aria-label="Copy">
    <md-icon>copy</md-icon>
  </md-icon-button>
  <md-icon-button aria-label="Cut">
    <md-icon>cut</md-icon>
  </md-icon-button>
  <!--
    This icon button is disabled but kept focusable to improve its
    discoverability in the toolbar.
  -->
  <md-icon-button aria-label="Paste" soft-disabled>
    <md-icon>paste</md-icon>
  </md-icon-button>
</div>
```

## Icon Button

Standard icon buttons do not have a background or outline, and have the lowest
emphasis of the icon buttons.

<!-- no-catalog-start -->

![A check icon](images/iconbutton/usage-standard.webp "Standard Icon Button with Check icon")

<!-- no-catalog-end -->
<!-- catalog-include "figures/iconbutton/usage-standard.html" -->

```html
<md-icon-button>
  <md-icon>check</md-icon>
</md-icon-button>
```

## Filled Icon Button

<!-- go/md-filled-icon-button -->

<!-- no-catalog-start -->

![A circular button with a check icon](images/iconbutton/usage-filled.webp "Filled Icon Button")

<!-- no-catalog-end -->
<!-- catalog-include "figures/iconbutton/usage-filled.html" -->

Filled icon buttons have higher visual impact and are best for high emphasis
actions.

```html
<md-filled-icon-button>
  <md-icon>check</md-icon>
</md-filled-icon-button>
```

## Filled Tonal Icon Button

<!-- go/md-filled-tonal-icon-button -->

<!-- no-catalog-start -->

![A filled tonal icon button with a check icon](images/iconbutton/usage-filled-tonal.webp "Filled Tonal Icon Button")

<!-- no-catalog-end -->
<!-- catalog-include "figures/iconbutton/usage-filled-tonal.html" -->

Filled tonal icon buttons are a middle ground between filled and outlined icon
buttons. They're useful in contexts where the button requires slightly more
emphasis than an outline would give, such as a secondary action paired with a
high emphasis action.

```html
<md-filled-tonal-icon-button>
  <md-icon>check</md-icon>
</md-filled-tonal-icon-button>
```

## Outlined Icon Button

<!-- go/md-outlined-icon-button -->

<!-- no-catalog-start -->

![An outlined circular icon button with a check icon](images/iconbutton/usage-outlined.webp "Outlined Icon button")

<!-- no-catalog-end -->
<!-- catalog-include "figures/iconbutton/usage-outlined.html" -->

Outlined icon buttons are medium-emphasis buttons. They're useful when an icon
button needs more emphasis than a standard icon button but less than a filled or
filled tonal icon button.

```html
<md-outlined-icon-button>
  <md-icon>check</md-icon>
</md-outlined-icon-button>
```

## Theming

Icon Button supports [Material theming](../theming/README.md) and can be
customized in terms of color, and shape.

### Icon Button tokens

Token                                | Default value
------------------------------------ | -----------------------------------
`--md-icon-button-icon-color`        | `--md-sys-color-on-surface-variant`
`--md-icon-button-state-layer-shape` | `--md-sys-shape-corner-full`
`--md-icon-button-icon-size`         | `24px`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-icon-button.scss)
    <!-- {.external} -->

### Icon Button example

<!-- no-catalog-start -->

![Image of a standard icon button with a different theme applied](images/iconbutton/theming-standard.webp "Standard icon button theming example.")

<!-- no-catalog-end -->
<!-- catalog-include "figures/iconbutton/theming-standard.html" -->

```html
<style>
:root {
  --md-icon-button-icon-size: 32px;
  --md-sys-color-on-surface-variant: #dc362e;
  background-color: #fff8f6;
}
</style>

<md-icon-button>
  <md-icon>check</md-icon>
</md-icon-button>
```

### Filled Icon Button tokens

Token                                              | Default value
-------------------------------------------------- | -------------
`--md-filled-icon-button-selected-container-color` | `--md-sys-color-primary`
`--md-filled-icon-button-container-shape`          | `--md-sys-shape-corner-full`
`--md-filled-icon-button-container-width`          | `40px`
`--md-filled-icon-button-container-height`         | `40px`
`--md-filled-icon-button-icon-size`                | `24px`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-filled-icon-button.scss)
    <!-- {.external} -->

### Filled Icon Button example

<!-- no-catalog-start -->

![Image of a filled icon button with a different theme applied](images/iconbutton/theming-filled.webp "Filled icon button theming example.")

<!-- no-catalog-end -->
<!-- catalog-include "figures/iconbutton/theming-filled.html" -->

```html
<style>
:root {
  --md-filled-icon-button-container-width: 80px;
  --md-filled-icon-button-container-height: 80px;
  --md-filled-icon-button-icon-size: 40px;
  --md-filled-icon-button-container-shape: 0px;
  --md-sys-color-primary: #dc362e;
  background-color: #fff8f6;
}
</style>
<md-filled-icon-button>
  <md-icon>check</md-icon>
</md-filled-icon-button>
```

### Filled Tonal Icon Button tokens

Token                                                    | Default value
-------------------------------------------------------- | -------------
`--md-filled-tonal-icon-button-selected-container-color` | `--md-sys-color-secondary-container`
`--md-filled-tonal-icon-button-container-shape`          | `--md-sys-shape-corner-full`
`--md-filled-tonal-icon-button-container-width`          | `40px`
`--md-filled-tonal-icon-button-container-height`         | `40px`
`--md-filled-tonal-icon-button-icon-size`                | `24px`

### Filled Tonal Icon Button example

<!-- no-catalog-start -->

![Image of a filled tonal icon button with a different theme applied](images/iconbutton/theming-filled-tonal.webp "Filled tonal icon button theming example.")

<!-- no-catalog-end -->
<!-- catalog-include "figures/iconbutton/theming-filled-tonal.html" -->

```html
<style>
:root {
  --md-filled-tonal-icon-button-container-width: 80px;
  --md-filled-tonal-icon-button-container-height: 80px;
  --md-filled-tonal-icon-button-container-shape: 0px;
  --md-filled-tonal-icon-button-icon-size: 40px;
  --md-sys-color-secondary-container: #006A6A;
}
</style>
<md-filled-tonal-icon-button>
  <md-icon>check</md-icon>
</md-filled-tonal-icon-button>
```

### Outlined Icon Button tokens

Token                                        | Default value
-------------------------------------------- | ----------------------------
`--md-outlined-icon-button-outline-color`    | `--md-sys-color-outline`
`--md-outlined-icon-button-outline-width`    | `1px`
`--md-outlined-icon-button-container-shape`  | `--md-sys-shape-corner-full`
`--md-outlined-icon-button-container-width`  | `40px`
`--md-outlined-icon-button-container-height` | `40px`
`--md-outlined-icon-button-icon-size`        | `24px`

### Outlined Icon Button example

<!-- no-catalog-start -->

![Image of an outlined icon button with a different theme applied](images/iconbutton/theming-outlined.webp "Outlined icon button theming example.")

<!-- no-catalog-end -->
<!-- catalog-include "figures/iconbutton/theming-outlined.html" -->

```html
<style>
:root {
  --md-outlined-icon-button-container-width: 80px;
  --md-outlined-icon-button-container-height: 80px;
  --md-outlined-icon-button-container-shape: 0px;
  --md-outlined-icon-button-icon-size: 40px;
  --md-outlined-icon-button-outline-width: 4px;
  --md-sys-color-outline: #006A6A;
}
</style>
<md-outlined-icon-button>
  <md-icon>check</md-icon>
</md-outlined-icon-button>
```

<!-- auto-generated API docs start -->

## API


### MdIconButton <code>&lt;md-icon-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Disables the icon button and makes it non-interactive. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | "Soft-disables" the icon button (disabled but still focusable).<br>Use this when an icon button needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `flipIconInRtl` | `flip-icon-in-rtl` | `boolean` | `false` | Flips the icon if it is in an RTL context at startup. |
| `href` | `href` | `string` | `''` | Sets the underlying `HTMLAnchorElement`'s `href` resource attribute. |
| `download` | `download` | `string` | `''` | The filename to use when downloading the linked resource. If not specified, the browser will determine a filename. This is only applicable when the icon button is used as a link (`href` is set). |
| `target` | `target` | `string` | `''` | Sets the underlying `HTMLAnchorElement`'s `target` attribute. |
| `ariaLabelSelected` | `aria-label-selected` | `string` | `''` | The `aria-label` of the button when the button is toggleable and selected. |
| `toggle` | `toggle` | `boolean` | `false` | When true, the button will toggle between selected and unselected states |
| `selected` | `selected` | `boolean` | `false` | Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |
| `labels` |  | `NodeList` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `input` | `InputEvent` | Yes | Yes | Dispatched when a toggle button toggles |
| `change` | `Event` | Yes | No | Dispatched when a toggle button toggles |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdFilledIconButton <code>&lt;md-filled-icon-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Disables the icon button and makes it non-interactive. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | "Soft-disables" the icon button (disabled but still focusable).<br>Use this when an icon button needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `flipIconInRtl` | `flip-icon-in-rtl` | `boolean` | `false` | Flips the icon if it is in an RTL context at startup. |
| `href` | `href` | `string` | `''` | Sets the underlying `HTMLAnchorElement`'s `href` resource attribute. |
| `download` | `download` | `string` | `''` | The filename to use when downloading the linked resource. If not specified, the browser will determine a filename. This is only applicable when the icon button is used as a link (`href` is set). |
| `target` | `target` | `string` | `''` | Sets the underlying `HTMLAnchorElement`'s `target` attribute. |
| `ariaLabelSelected` | `aria-label-selected` | `string` | `''` | The `aria-label` of the button when the button is toggleable and selected. |
| `toggle` | `toggle` | `boolean` | `false` | When true, the button will toggle between selected and unselected states |
| `selected` | `selected` | `boolean` | `false` | Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |
| `labels` |  | `NodeList` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `input` | `InputEvent` | Yes | Yes | Dispatched when a toggle button toggles |
| `change` | `Event` | Yes | No | Dispatched when a toggle button toggles |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdFilledTonalIconButton <code>&lt;md-filled-tonal-icon-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Disables the icon button and makes it non-interactive. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | "Soft-disables" the icon button (disabled but still focusable).<br>Use this when an icon button needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `flipIconInRtl` | `flip-icon-in-rtl` | `boolean` | `false` | Flips the icon if it is in an RTL context at startup. |
| `href` | `href` | `string` | `''` | Sets the underlying `HTMLAnchorElement`'s `href` resource attribute. |
| `download` | `download` | `string` | `''` | The filename to use when downloading the linked resource. If not specified, the browser will determine a filename. This is only applicable when the icon button is used as a link (`href` is set). |
| `target` | `target` | `string` | `''` | Sets the underlying `HTMLAnchorElement`'s `target` attribute. |
| `ariaLabelSelected` | `aria-label-selected` | `string` | `''` | The `aria-label` of the button when the button is toggleable and selected. |
| `toggle` | `toggle` | `boolean` | `false` | When true, the button will toggle between selected and unselected states |
| `selected` | `selected` | `boolean` | `false` | Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |
| `labels` |  | `NodeList` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `input` | `InputEvent` | Yes | Yes | Dispatched when a toggle button toggles |
| `change` | `Event` | Yes | No | Dispatched when a toggle button toggles |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdOutlinedIconButton <code>&lt;md-outlined-icon-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Disables the icon button and makes it non-interactive. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | "Soft-disables" the icon button (disabled but still focusable).<br>Use this when an icon button needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed. |
| `flipIconInRtl` | `flip-icon-in-rtl` | `boolean` | `false` | Flips the icon if it is in an RTL context at startup. |
| `href` | `href` | `string` | `''` | Sets the underlying `HTMLAnchorElement`'s `href` resource attribute. |
| `download` | `download` | `string` | `''` | The filename to use when downloading the linked resource. If not specified, the browser will determine a filename. This is only applicable when the icon button is used as a link (`href` is set). |
| `target` | `target` | `string` | `''` | Sets the underlying `HTMLAnchorElement`'s `target` attribute. |
| `ariaLabelSelected` | `aria-label-selected` | `string` | `''` | The `aria-label` of the button when the button is toggleable and selected. |
| `toggle` | `toggle` | `boolean` | `false` | When true, the button will toggle between selected and unselected states |
| `selected` | `selected` | `boolean` | `false` | Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |
| `labels` |  | `NodeList` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `input` | `InputEvent` | Yes | Yes | Dispatched when a toggle button toggles |
| `change` | `Event` | Yes | No | Dispatched when a toggle button toggles |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: icon.md -->

# Icon

# Icon

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'dfreedm' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- go/md-icon -->

<!-- [TOC] -->

[Icons](https://m3.material.io/styles/icons/overview)<!-- {.external} --> can be used to
represent common actions. Material Symbols are a set of variable icon fonts
created at seven weights across three different styles.

![Array of icons with various stylistic attributes](images/icon/hero.gif)

*   [Design article](https://m3.material.io/styles/icons) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/icon)
    <!-- {.external} -->

## Usage

Icons can be specified by name, unicode code point, or have an `<svg>` child
element.

![Settings icon as ligature, check box icon as codepoint, and house icon as SVG](images/icon/usage.webp "Example icons")

```html
<md-icon>settings</md-icon>
<md-icon>&#xe834</md-icon>
<md-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M10 40V24H4L24 6l10 8.85V9h4v9.55L44 24h-6v16H26.5V28h-5v12Zm3-3h5.5V25h11v12H35V19.95l-11-10-11 10Zm5.5-12h11-11Zm1.25-5.5h8.5q0-1.65-1.275-2.725Q25.7 15.7 24 15.7q-1.7 0-2.975 1.075Q19.75 17.85 19.75 19.5Z"/></svg></md-icon>
```

The full range of icons can be found on the
[Material Symbols](https://fonts.google.com/icons)<!-- {.external} --> font page.

Material Symbols icons are available in three styles: **outlined**, **rounded**,
and **sharp**.

In addition, Material Symbols have four adjustable stylistic variable font
attributes called axes. An axis is a typographic term referring to the attribute
of a symbol that can be altered to create visual variations.

Each style symbol contains four axes: **weight**, **fill**, **grade**, and
**optical size**.

The `weight` and `optical size` attributes are handled automatically, but the
`fill` and `grade` attributes are custom to the Material Symbols font, and must
be set with the
[`font-variation-settings`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings)<!-- {.external} -->
property.

### Outlined

Outlined symbols use stroke and fill attributes for a light, clean style that
works well in dense UIs. The stroke weight of outlined icons can be adjusted to
complement or contrast the weight of your typography.

Load the font with

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet">
```

### Rounded

![Settings, checkbox, and house icons in Rounded style](images/icon/usage_rounded.webp "Rounded Icons")

Rounded symbols use a corner radius that pairs well with brands that use heavier
typography, curved logos, or circular elements to express their style.

Load the font with

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Rounded" rel="stylesheet">
```

To use Rounded icons, set `--md-icon-font` to `'Material Symbols Rounded'`.

### Sharp

![Settings, checkbox, and house icons in Sharp style](images/icon/usage_sharp.webp "Sharp Icons")

Sharp symbols display corners with straight edges, for a crisp style that
remains legible even at smaller scales. These rectangular shapes can support
brand styles that aren’t well-reflected by rounded shapes.

Load the font with

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Sharp" rel="stylesheet">
```

To use Sharp icons, set `font-family` to `'Material Symbols Sharp'`.

### Fill

![Filed settings, checkbox, and house icons](images/icon/usage_filled.webp "Filled Icons")

Filled Icons gives you the ability to transition from a more outlined style to a
reversed or more filled style.

A fill attribute can be used to convey a state of transition, such as unfilled
and filled states. Values range from `0` to `1`, with `1` being completely
filled. Along with weight, fill is a primary attribute that impacts the overall
look of a symbol.

All styles of Material Symbols can be filled by setting
`font-variation-settings` to `'FILL' 1`.

## Accessibility

Icons are mostly intended to be used inside of other components that have
accessibility settings.

If used on their own, Icons should be given an accessible name if they are
focusable. If you use icons by name, they will be announced by screen readers
without any extra steps.

If using codepoints, wrap the codepoint in a `<span>` with an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute.

```html
<md-icon tabindex="-1"><span aria-label="home">&#xe88a</span></md-icon>
```

If using SVG icons, add an `aria-label` attribute to the SVG element.

```html
<md-icon tabindex="-1"><svg aria-label="paper airplane" viewBox="0 0 48 48"><path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"/></svg></md-icon>
```

## Theming

### Tokens

Token            | Default value
---------------- | -----------------------------
`--md-icon-font` | `'Material Symbols Outlined'`
`--md-icon-size` | `24px`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-icon.scss)
    <!-- {.external} -->

### Example

![Image of icons with a different theme applied](images/icon/theming.webp "Icon theming example.")

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL@20..48,100..700,0..1"  rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL@20..48,100..700,0..1" rel="stylesheet">

<style>
md-icon {
  color: #006A6A;
  --md-icon-size: 48px;
}
.rounded {
  --md-icon-font: 'Material Symbols Rounded';
}
.sharp {
  --md-icon-font: 'Material Symbols Sharp';
}
md-icon[filled] {
  font-variation-settings: 'FILL' 1;
}
</style>

<h3>Outlined</h3>
<span>
  <md-icon>settings</md-icon>
  <md-icon>check_box</md-icon>
  <md-icon>house</md-icon>
  <md-icon filled>settings</md-icon>
  <md-icon filled>check_box</md-icon>
  <md-icon filled>house</md-icon>
</span>
<h3>Rounded</h3>
<span class="rounded">
  <md-icon>settings</md-icon>
  <md-icon>check_box</md-icon>
  <md-icon>house</md-icon>
  <md-icon filled>settings</md-icon>
  <md-icon filled>check_box</md-icon>
  <md-icon filled>house</md-icon>
</span>
<h3>Sharp</h3>
<span class="sharp">
  <md-icon>settings</md-icon>
  <md-icon>check_box</md-icon>
  <md-icon>house</md-icon>
  <md-icon filled>settings</md-icon>
  <md-icon filled>check_box</md-icon>
  <md-icon filled>house</md-icon>
</span>
```

<!-- auto-generated API docs start -->
<!-- auto-generated API docs end -->


---

<!-- Source: list.md -->

# List

<!-- catalog-only-start --><!-- ---
name: Lists
dirname: list
-----><!-- catalog-only-end -->

<catalog-component-header image-align="start">
<catalog-component-header-title slot="title">

# Lists

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- no-catalog-start -->

<!-- go/md-list -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/list/)**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Lists](https://m3.material.io/components/lists)<!-- {.external} --> are continuous,
vertical indexes of text and images

</catalog-component-header-title>

<img class="hero" src="images/list/hero.webp" alt="CImage of a mobile phone screen with a Recipies page and a list recipies in a material list. The first item is Fresh baked breads with an image of someone holding bread on the left and a horizontal three dot menu on the right. Then Tacos with an image of tacos and the same three dot menu">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/lists) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/list)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname, previewHeight=600, editorHeight=600 %}

-->

<!-- catalog-only-end -->

## Usage

`<md-list>` is a container composed of `<md-list-item>`s of different types.

<!-- no-catalog-start -->

![Three items in a list. The first item says Apple as its headline. The second
one says Banana in its headline as well as Banana is a yellow fruit as its sub
header. The third list item says Cucumber in its headline and Cucumbers are long
green fruits that are just as long as this multi-line description as its sub
header which is on two lines.](images/list/usage.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/list/usage.html" -->

```html
<md-list style="max-width: 300px;">
  <md-list-item>
    Fruits
  </md-list-item>
  <md-divider></md-divider>
  <md-list-item>
    Apple
</md-list-item>
  <md-list-item>
    Banana
  </md-list-item>
  <md-list-item>
    <div slot="headline">Cucumber</div>
    <div slot="supporting-text">Cucumbers are long green fruits that are just as long as this multi-line description</div>
  </md-list-item>
  <md-list-item
      type="link"
      href="https://google.com/search?q=buy+kiwis&tbm=shop"
      target="_blank">
    <div slot="headline">Shop for Kiwis</div>
    <div slot="supporting-text">This will link you out in a new tab</div>
    <md-icon slot="end">open_in_new</md-icon>
  </md-list-item>
</md-list>
```

## Icon Items

Icons can be slotted into list-items' `start` or `end` slot.

<!-- no-catalog-start -->

![A list with three items and dividers separating each item. The first item has
the Lit logo and the text Lit. The second item has the Polymer logo and the text
Polymer. The third item has the Angular logo and the text
Angular.](images/list/usage-icon.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/list/usage-icon.html" -->

```html
<md-list style="max-width: 300px">
  <md-list-item>
    Lit
    <svg  slot="start" style="height: 24px" viewBox="0 0 160 200">
      <path
        fill="currentColor"
        d="m160 80v80l-40-40zm-40 40v80l40-40zm0-80v80l-40-40zm-40 40v80l40-40zm-40-40v80l40-40zm40-40v80l-40-40zm-40 120v80l-40-40zm-40-40v80l40-40z"
      />
    </svg>
  </md-list-item>
  <md-divider></md-divider>
  <md-list-item>
    Polymer
    <md-icon slot="start">polymer</md-icon>
  </md-list-item>
  <md-divider></md-divider>
  <md-list-item>
    Angular
    <svg slot="start" style="height: 24px" viewBox="0 0 250 250">
      <polygon points="108,135.4 125,135.4 125,135.4 125,135.4 142,135.4 125,94.5   " />
      <path
        d="M125,30L125,30L125,30L31.9,63.2l14.2,123.1L125,230l0,0l0,0l78.9-43.7l14.2-123.1L125,30z M183.1,182.6h-21.7h0
          l-11.7-29.2H125h0h0h-24.7l-11.7,29.2h0H66.9h0L125,52.1l0,0l0,0l0,0l0,0L183.1,182.6L183.1,182.6z"
      />
    </svg>
  </md-list-item>
</md-list>
```

## Image Items

Images should be slotted into list-items' `start` slot.

<!-- no-catalog-start -->

![A list with three image items. The first item is a square picture of a cat and
the text Cat. The second is a picture of a kitten with the text Kitty Cat. The
third item is a square image of an older kitten with the text
Cate.](images/list/usage-image.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/list/usage-image.html" -->

```html
<md-list style="max-width: 300px;">
  <md-list-item>
    Cat
    <img slot="start" style="width: 56px" src="https://placekitten.com/112/112">
  </md-list-item>
  <md-divider></md-divider>
  <md-list-item>
    Kitty Cat
    <img slot="start" style="width: 56px" src="https://placekitten.com/114/114">
  </md-list-item>
  <md-divider></md-divider>
  <md-list-item>
    Cate
    <img slot="start" style="width: 56px" src="https://placekitten.com/116/116">
  </md-list-item>
</md-list>
```

## Accessibility

List can have its `role` and `tabindex` set via the `role` and `tabindex`
attributes, and list items can have their `role` and `tabindex` set via the
`type` and `tabindex` attributes respectively.

> NOTE: List item has a limited set of `type`s that can be set on it. This is to
> ensure that your list remains accessible with all other properties and options
> presented to it. See the `ListItemType` TypeScript type exported by list item
> for the current accepted values.

By default these values are set to
[`role="list"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)<!-- {.external} -->
and `tabindex="-1"` for list, and
[`role="listitem"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role)<!-- {.external} -->
and `tabindex="0"` for list items.

## Theming

List and List Item supports
[Material theming](https://github.com/material-components/material-web/blob/main/docs/theming/README.md)<!-- {.external} -->
and can be customized in terms of color, typography, and shape.

### List & List Item

Token                                           | Default value
----------------------------------------------- | -------------
`--md-list-container-color`                     | `--md-sys-color-surface`
`--md-list-item-container-shape`                | `--md-sys-shape-corner-none`
`--md-list-item-label-text-color`               | `--md-sys-color-on-surface`
`--md-list-item-supporting-text-color`          | `--md-sys-color-on-surface-variant`
`--md-list-item-trailing-supporting-text-color` | `--md-sys-color-on-surface-variant`
`--md-list-item-label-text-font`                | `--md-sys-typescale-label-large-font`
`--md-list-item-supporting-text-font`           | `--md-sys-typescale-body-medium-font`
`--md-list-item-trailing-supporting-text-font`  | `--md-sys-typescale-label-small-font`

*   [All List tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-list.scss)
    <!-- {.external} -->
*   [All List Item tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-list-item.scss)
    <!-- {.external} -->

### List & List Item Example

<!-- no-catalog-start -->

![Image of a list and list items of foods with their inventory stock number with
a different theme applied](images/list/theming-list.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/list/theming-list.html" -->

```html
<style>
  :root {
    --md-list-container-color: #f4fbfa;
    --md-list-item-label-text-color: #161d1d;
    --md-list-item-supporting-text-color: #3f4948;
    --md-list-item-trailing-supporting-text-color: #3f4948;
    --md-list-item-label-text-font: system-ui;
    --md-list-item-supporting-text-font: system-ui;
    --md-list-item-trailing-supporting-text-font: system-ui;
  }
  [slot="trailing-supporting-text"] {
    width: 30px;
    text-align: end;
  }
</style>
<md-list>
  <md-list-item type="button">
    <div slot="headline">Apple</div>
    <div slot="supporting-text">In stock</div>
    <div slot="trailing-supporting-text">+100</div>
  </md-list-item>
  <md-list-item type="button">
    <div slot="headline">Banana</div>
    <div slot="supporting-text">In stock</div>
    <div slot="trailing-supporting-text">56</div>
  </md-list-item>
  <md-list-item type="button">
    <div slot="headline">Cucumber</div>
    <div slot="supporting-text">Low stock</div>
    <div slot="trailing-supporting-text">5</div>
  </md-list-item>
</md-list>
```

### Icon List Item

Token                                | Default value
------------------------------------ | -----------------------------------
`--md-list-item-leading-icon-color`  | `--md-sys-color-on-surface-variant`
`--md-list-item-trailing-icon-color` | `--md-sys-color-on-surface-variant`
`--md-list-item-leading-icon-size`   | `18px`
`--md-list-item-trailing-icon-size`  | `24px`

*   [All List Item tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-list-item.scss)
    <!-- {.external} -->

### Icon List Item Example

<!-- no-catalog-start -->

![Image of a list and icon list items of food names with a different theme
applied](images/list/theming-icon.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/list/theming-icon.html" -->

```html
<style>
  :root {
    background-color: #f4fbfa;
    --md-list-container-color: #f4fbfa;
    --md-list-item-label-text-color: #161d1d;
    --md-list-item-leading-icon-color: #006a6a;
    --md-list-item-trailing-icon-color: #006a6a;
    --md-list-item-leading-icon-size: 20px;
    --md-list-item-trailing-icon-size: 20px;
  }
  md-list-item.unhealthy {
    --md-list-item-trailing-icon-color: #ba1a1a;
  }
</style>
<md-list>
  <md-list-item>
    <div slot="headline">Eggs</div>
    <md-icon slot="start">egg</md-icon>
    <md-icon slot="end">recommend</md-icon>
  </md-list-item>
  <md-list-item class="unhealthy">
    <div slot="headline">Ice Cream</div>
    <md-icon slot="start">icecream</md-icon>
    <md-icon slot="end">dangerous</md-icon>
  </md-list-item>
  <md-list-item>
    <div slot="headline">Orange</div>
    <md-icon slot="start">nutrition</md-icon>
    <md-icon slot="end">recommend</md-icon>
  </md-list-item>
</md-list>
```

### Avatar List Item

Token                                       | Default value
------------------------------------------- | -------------
`--md-list-item-leading-avatar-label-color` | `--md-sys-color-on-primary-container`
`--md-list-item-leading-avatar-label-font`  | `--md-sys-typescale-title-medium-font`
`--md-list-item-leading-avatar-color`       | `--md-sys-color-primary-container`
`--md-list-item-leading-avatar-size`        | `40px`
`--md-list-item-leading-avatar-shape`       | `--md-sys-shape-corner-full`

*   [All List Item tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-list-item.scss)
    <!-- {.external} -->

### Image List Item

Token                                 | Default value
------------------------------------- | -------------
`--md-list-item-leading-image-height` | `56px`
`--md-list-item-leading-image-width`  | `56px`
`--md-list-item-leading-image-shape`  | `--md-sys-shape-corner-none`

*   [All List Item tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-list-item.scss)
    <!-- {.external} -->

### Image List Item Example

<!-- no-catalog-start -->

![Image of a list and image list items of cats with a different theme applied](images/list/theming-image.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/list/theming-image.html" -->

```html
<style>
  :root {
    background-color: #f4fbfa;
    --md-list-container-color: #f4fbfa;
    --md-list-item-label-text-color: #161d1d;
    --md-list-item-leading-image-height: 50px;
    --md-list-item-leading-image-width: 100px;
    --md-list-item-leading-image-shape: 25px;
  }
  img {
    width: 40px;
  }
</style>
<md-list>
  <md-list-item headline="Wide Cat">
    <img slot="start" src="https://placekitten.com/200/100">
  </md-list-item>
  <md-list-item headline="Round kitty cat">
    <img slot="start" src="https://placekitten.com/202/101">
  </md-list-item>
  <md-list-item headline="Softe cate">
    <img slot="start" src="https://placekitten.com/212/106">
  </md-list-item>
</md-list>
```

<!-- auto-generated API docs start -->

## API


### MdList <code>&lt;md-list&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `items` |  | `ListItem[]` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `activateNextItem` | _None_ | `ListItem` | Activates the next item in the list. If at the end of the list, the first item will be activated. |
| `activatePreviousItem` | _None_ | `ListItem` | Activates the previous item in the list. If at the start of the list, the last item will be activated. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdListItem <code>&lt;md-list-item&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Disables the item and makes it non-selectable and non-interactive. |
| `type` | `type` | `string` | `'text'` | Sets the behavior of the list item, defaults to "text". Change to "link" or "button" for interactive items. |
| `href` | `href` | `string` | `''` | Sets the underlying `HTMLAnchorElement`'s `href` resource attribute. |
| `target` | `target` | `string` | `''` | Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is set. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `click` | _None_ | `void` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `request-activation` | `Event` | Yes | Yes | Requests the list to set `tabindex=0` on the item and focus it. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: menu.md -->

# Menu

<!-- catalog-only-start --><!-- ---
name: Menus
dirname: menu
-----><!-- catalog-only-end -->

<catalog-component-header>
<catalog-component-header-title slot="title">

# Menus

<!-- no-catalog-start -->

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- go/md-menu -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/menu/).**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Menus](https://m3.material.io/components/menus)<!-- {.external} --> display a list of
choices on a temporary surface.

</catalog-component-header-title>

<img
    class="hero"
    alt="A phone showing a vertical threedot, pressed, icon button and a menu floating below it with the following visible items: Revert, Settings, and Send Feedback"
    src="images/menu/hero.webp">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/menus) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/menu)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname,previewHeight=1000,editorHeight=700 %}

-->

<!-- catalog-only-end -->

## Usage

When opened, menus position themselves to an anchor. Thus, either `anchor` or
`anchorElement` must be supplied to `md-menu` before opening. Additionally, a
shared parent of `position:relative` should be present around the menu and it's
anchor, because the default menu is positioned relative to the anchor element.

Menus also render menu items such as `md-menu-item` and handle keyboard
navigation between `md-menu-item`s as well as typeahead functionality.
Additionally, `md-menu` interacts with `md-menu-item`s to help you determine how
a menu was closed. Listen for and inspect the `close-menu` custom event's
`details` to determine what action and items closed the menu.

<!-- no-catalog-start -->

!["Two filled buttons next to each other. The first one says set with idref and
the other says set with element ref. There is an opened menu anchored to the
bottom of the right button with the items: Apple, Banana,
Cucumber."](images/menu/usage.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/menu/usage.html" -->

```html
<!-- Note the position: relative style -->
<span style="position: relative">
  <md-filled-button id="usage-anchor">Set with idref</md-filled-button>
  <md-menu id="usage-menu" anchor="usage-anchor">
    <md-menu-item>
      <div slot="headline">Apple</div>
    </md-menu-item>
    <md-menu-item>
      <div slot="headline">Banana</div>
    </md-menu-item>
    <md-menu-item>
      <div slot="headline">Cucumber</div>
    </md-menu-item>
  </md-menu>
</span>

<script type="module">
  // This example uses anchor as an ID reference
  const anchorEl = document.body.querySelector('#usage-anchor');
  const menuEl = document.body.querySelector('#usage-menu');

  anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });
</script>

<span style="position: relative">
  <md-filled-button id="usage-anchor-2">Set with element ref</md-filled-button>
  <md-menu id="usage-menu-2">
    <md-menu-item>
      <div slot="headline">Apple</div>
    </md-menu-item>
    <md-menu-item>
      <div slot="headline">Banana</div>
    </md-menu-item>
    <md-menu-item>
      <div slot="headline">Cucumber</div>
    </md-menu-item>
  </md-menu>
</span>

<script type="module">
  // This example uses MdMenu.prototype.anchorElement to set the anchor as an
  // HTMLElement reference.
  const anchorEl = document.body.querySelector('#usage-anchor-2');
  const menuEl = document.body.querySelector('#usage-menu-2');
  menuEl.anchorElement = anchorEl;

  anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });
</script>
```

### Submenus

You can compose `<md-menu>`s inside of an `<md-sub-menu>`'s `menu` slot, but
first the `has-overflow` attribute must be set on the root `<md-menu>` to
disable overflow scrolling and display the nested submenus.

<!-- no-catalog-start -->

!["A filled button that says menu with submenus. There is a menu anchored to the
bottom of it with the first item selected that says fruits with A followed by a
right arrow. To the right is anchored a submenu with 3 items, Apricot, Avocado,
Apples. The Apples item is selected and has a left arrow before the text and
another submenu anchored to it on the left. That menu has three items, Fuji,
Granny Smith, and Red Delicious."](images/menu/usage-submenu.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/menu/usage-submenu.html" -->

```html
<!-- Note the position: relative style -->
<span style="position: relative">
  <md-filled-button id="usage-submenu-anchor">
    Menu with Submenus
  </md-filled-button>
  <!-- Note the has-overflow attribute -->
  <md-menu has-overflow id="usage-submenu" anchor="usage-submenu-anchor">
    <md-sub-menu>
      <md-menu-item slot="item">
      <div slot="headline">Fruits with A</div>
        <!-- Arrow icons are helpful affordances -->
        <md-icon slot="end">arrow_right</md-icon>
      </md-menu-item>
      <!-- Submenu must be slotted into sub-menu's menu slot -->
      <md-menu slot="menu">
        <md-menu-item>
          <div slot="headline">Apricot</div>
        </md-menu-item>
        <md-menu-item>
          <div slot="headline">Avocado</div>
        </md-menu-item>

        <!-- Nest as many as you want and control menu anchoring -->
        <md-sub-menu
            menu-corner="start-end"
            anchor-corner="start-start">
          <md-menu-item slot="item">
            <div slot="headline">Apples</div>
            <!-- Arrow icons are helpful affordances -->
            <md-icon slot="start">
              arrow_left
            </md-icon>
          </md-menu-item>
          <md-menu slot="menu">
            <md-menu-item>
              <div slot="headline">Fuji</div>
            </md-menu-item>
            <md-menu-item>
              <div slot="headline" style="white-space: nowrap;">Granny Smith</div>
            </md-menu-item>
            <md-menu-item>
              <div slot="headline" style="white-space: nowrap;">Red Delicious</div>
            </md-menu-item>
          </md-menu>

        </md-sub-menu>
      </md-menu>
    </md-sub-menu>

    <md-menu-item>
      <div slot="headline">Banana</div>
    </md-menu-item>
    <md-menu-item>
      <div slot="headline">Cucumber</div>
    </md-menu-item>
  </md-menu>
</span>

<script type="module">
  const anchorEl = document.body.querySelector('#usage-submenu-anchor');
  const menuEl = document.body.querySelector('#usage-submenu');

  anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });
</script>
```

### Popover-positioned menus

Internally menu uses `position: absolute` by default. Though there are cases
when the anchor and the node cannot share a common ancestor that is `position:
relative`, or sometimes, menu will render below another item due to limitations
with `position: absolute`.

Popover-positioned menus use the native
[Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)<!-- {.external} -->
to render above all other content. This may fix most issues where the default
menu positioning (`positioning="absolute"`) is not positioning as expected by
rendering into the
[top layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer)<!-- {.external} -->.

> Warning: Popover API support was added in Chrome 114 and Safari 17. At the
> time of writing, Firefox does not support the Popover API
> ([see latest browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API#browser_compatibility)<!-- {.external} -->).
>
> For browsers that do not support the Popover API, `md-menu` will fall back to
> using [fixed-positioned menus](#fixed-positioned-menus).

<!-- no-catalog-start -->

!["A filled button that says open popover menu. There is an open menu anchored
to the bottom of the button with three items, Apple, Banana, and
Cucumber."](images/menu/usage-popover.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/menu/usage-popover.html" -->

```html
<!-- Note the lack of position: relative parent. -->
<div style="margin: 16px;">
  <md-filled-button id="usage-popover-anchor">Open popover menu</md-filled-button>
</div>

<!-- popover menus do not require a common ancestor with the anchor. -->
<md-menu positioning="popover" id="usage-popover" anchor="usage-popover-anchor">
  <md-menu-item>
    <div slot="headline">Apple</div>
  </md-menu-item>
  <md-menu-item>
    <div slot="headline">Banana</div>
  </md-menu-item>
  <md-menu-item>
    <div slot="headline">Cucumber</div>
  </md-menu-item>
</md-menu>

<script type="module">
  const anchorEl = document.body.querySelector('#usage-popover-anchor');
  const menuEl = document.body.querySelector('#usage-popover');

  anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });
</script>
```

### Fixed-positioned menus

This is the fallback implementation of
[popover-positioned menus](#popover-positioned-menus) and uses `position: fixed`
rather than the default `position: absolute` which calculates its position
relative to the window rather than the element.

> Note: Fixed menu positions are positioned relative to the window and not the
> document. This means that the menu will not scroll with the anchor as the page
> is scrolled.

<!-- no-catalog-start -->

!["A filled button that says open fixed menu. There is an open menu anchored to
the bottom of the button with three items, Apple, Banana, and
Cucumber."](images/menu/usage-fixed.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/menu/usage-fixed.html" -->

```html
<!-- Note the lack of position: relative parent. -->
<div style="margin: 16px;">
  <md-filled-button id="usage-fixed-anchor">Open fixed menu</md-filled-button>
</div>

<!-- Fixed menus do not require a common ancestor with the anchor. -->
<md-menu positioning="fixed" id="usage-fixed" anchor="usage-fixed-anchor">
  <md-menu-item>
    <div slot="headline">Apple</div>
  </md-menu-item>
  <md-menu-item>
    <div slot="headline">Banana</div>
  </md-menu-item>
  <md-menu-item>
    <div slot="headline">Cucumber</div>
  </md-menu-item>
</md-menu>

<script type="module">
  const anchorEl = document.body.querySelector('#usage-fixed-anchor');
  const menuEl = document.body.querySelector('#usage-fixed');

  anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });
</script>
```

### Document-positioned menus

When set to `positioning="document"`, `md-menu` will position itself relative to
the document as opposed to the element or the window from `"absolute"` and
`"fixed"` values respectively.

Document level positioning is useful for the following cases:

-   There are no ancestor elements that produce a `relative` positioning
    context.
    -   `position: relative`
    -   `position: absolute`
    -   `position: fixed`
    -   `transform: translate(x, y)`
    -   etc.
-   The menu is hoisted to the top of the DOM
    -   The last child of `<body>`
    -   [Top layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer)
        <!-- {.external} -->
-   The same `md-menu` is being reused and the contents and anchors are being
    dynamically changed

<!-- no-catalog-start -->

!["A filled button that says open document menu. There is an open menu anchored
to the bottom of the button with three items, Apple, Banana, and
Cucumber."](images/menu/usage-document.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/menu/usage-document.html" -->

```html
<!-- Note the lack of position: relative parent. -->
<div style="margin: 16px;">
  <md-filled-button id="usage-document-anchor">Open document menu</md-filled-button>
</div>

<!-- document menus do not require a common ancestor with the anchor. -->
<md-menu positioning="document" id="usage-document" anchor="usage-document-anchor">
  <md-menu-item>
    <div slot="headline">Apple</div>
  </md-menu-item>
  <md-menu-item>
    <div slot="headline">Banana</div>
  </md-menu-item>
  <md-menu-item>
    <div slot="headline">Cucumber</div>
  </md-menu-item>
</md-menu>

<script type="module">
  const anchorEl = document.body.querySelector('#usage-document-anchor');
  const menuEl = document.body.querySelector('#usage-document');

  anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });
</script>
```

## Accessibility

By default Menu is set up to function as a `role="menu"` with children as
`role="menuitem"`. A common use case for this is the menu button example, where
you would need to add keyboard interactions to the button to open the menu
([see W3C example](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions/)<!-- {.external} -->).

Menu can also be adapted for other use cases.

The role of the `md-list` inside the menu can be set with the `type` attribute.
The role of each individual `md-menu-item` can also be set with the `type`
attribute. Anything else slotted into the menu that is not a list item in most
cases should be set to `role="none"`, and `md-divider` should have
`role="separator"` and `tabindex="-1"`.

```html
<!--
  A simplified example of an autocomplete component – missing javascript logic for interaction.
-->
<md-filled-text-field
    id="textfield"
    type="combobox"
    aria-controls="menu"
    aria-autocomplete="list"
    aria-expanded="true"
    aria-activedescendant="1"
    value="Ala">
</md-filled-text-field>
<md-menu
    id="menu"
    anchor="textfield"
    role="listbox"
    aria-label="states"
    open>
  <md-menu-item type="option" id="0">
    <div slot="headline">Alabama</div>
  </md-menu-item>
  <md-divider role="separator" tabindex="-1"></md-divider>
  <md-menu-item type="option" id="1" selected aria-selected="true">
    <div slot="headline">Alabama</div>
  </md-menu-item>
</md-menu>
```

## Theming

Menus support [Material theming](../theming/README.md) and can be customized in
terms of color. Additionally, `md-menu` composes `md-list`, and each menu item
extends `md-list-item` ([see theming documentation](./list#theming)), so most
the tokens for those components can also be used for Menu.

### Menu Tokens

Token                                     | Default value
----------------------------------------- | ------------------------------------
`--md-menu-container-color`               | `--md-sys-color-surface-container`
`--md-menu-container-shape`               | `--md-sys-shape-corner-extra-small`
`--md-menu-item-container-color`          | `--md-sys-color-surface-container`
`--md-menu-item-selected-container-color` | `--md-sys-color-secondary-container`

*   [Menu tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-menu.scss)
    <!-- {.external} -->
*   [Menu item tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-menu-item.scss)
    <!-- {.external} -->
*   [List tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-list.scss)
    <!-- {.external} -->
*   [List item tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-list-item.scss)
    <!-- {.external} -->

### Example

<!-- no-catalog-start -->

![A filled button with the text Themed menu. Attached is a 3 item menu with the
items Apple, Banana, and Cucumber. They are both in a green hue and the menu has
a sharp 0px border radius.](images/menu/theming.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/menu/theming.html" -->

```html
<style>
  :root {
    background-color: #f4fbfa;
    --md-menu-container-color: #f4fbfa;
    --md-menu-container-shape: 0px;
    --md-sys-color-on-surface: #161d1d;
    --md-sys-typescale-body-large-font: system-ui;
  }
  md-menu-item {
    border-radius: 28px;
  }
  md-menu-item::part(focus-ring) {
    border-radius: 28px;
  }
  /* Styles for button and not relevant to menu */
  md-filled-button {
    --md-sys-color-primary: #006a6a;
    --md-sys-color-on-primary: #ffffff;
  }
</style>

<span style="position: relative">
  <md-filled-button id="theming-anchor">Themed menu</md-filled-button>
  <md-menu id="theming-menu" anchor="theming-anchor">
    <md-menu-item>
      <div slot="headline">Apple</div>
    </md-menu-item>
    <md-menu-item>
      <div slot="headline">Banana</div>
    </md-menu-item>
    <md-menu-item>
      <div slot="headline">Cucumber</div>
    </md-menu-item>
  </md-menu>
</span>

<script type="module">
  const anchorEl = document.body.querySelector("#theming-anchor");
  const menuEl = document.body.querySelector("#theming-menu");

  anchorEl.addEventListener("click", () => {
    menuEl.show();
  });
</script>
```

<!-- auto-generated API docs start -->

## API


### MdMenu <code>&lt;md-menu&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `anchor` | `anchor` | `string` | `''` | The ID of the element in the same root node in which the menu should align to. Overrides setting `anchorElement = elementReference`.<br>__NOTE__: anchor or anchorElement must either be an HTMLElement or resolve to an HTMLElement in order for menu to open. |
| `positioning` | `positioning` | `string` | `'absolute'` | Whether the positioning algorithm should calculate relative to the parent of the anchor element (`absolute`), relative to the window (`fixed`), or relative to the document (`document`). `popover` will use the popover API to render the menu in the top-layer. If your browser does not support the popover API, it will fall back to `fixed`.<br>__Examples for `position = 'fixed'`:__<br>- If there is no `position:relative` in the given parent tree and the surface is `position:absolute` - If the surface is `position:fixed` - If the surface is in the "top layer" - The anchor and the surface do not share a common `position:relative` ancestor<br>When using `positioning=fixed`, in most cases, the menu should position itself above most other `position:absolute` or `position:fixed` elements when placed inside of them. e.g. using a menu inside of an `md-dialog`.<br>__NOTE__: Fixed menus will not scroll with the page and will be fixed to the window instead.<br>__Examples for `position = 'document'`:__<br>- There is no parent that creates a relative positioning context e.g. `position: relative`, `position: absolute`, `transform: translate(x, y)`, etc. - You put the effort into hoisting the menu to the top of the DOM like the end of the `<body>` to render over everything or in a top-layer. - You are reusing a single `md-menu` element that dynamically renders content.<br>__Examples for `position = 'popover'`:__<br>- Your browser supports `popover`. - Most cases. Once popover is in browsers, this will become the default. |
| `quick` | `quick` | `boolean` | `false` | Skips the opening and closing animations. |
| `hasOverflow` | `has-overflow` | `boolean` | `false` | Displays overflow content like a submenu. Not required in most cases when using `positioning="popover"`.<br>__NOTE__: This may cause adverse effects if you set `md-menu {max-height:...}` and have items overflowing items in the "y" direction. |
| `open` | `open` | `boolean` | `false` | Opens the menu and makes it visible. Alternative to the `.show()` and `.close()` methods |
| `xOffset` | `x-offset` | `number` | `0` | Offsets the menu's inline alignment from the anchor by the given number in pixels. This value is direction aware and will follow the LTR / RTL direction.<br>e.g. LTR: positive -> right, negative -> left RTL: positive -> left, negative -> right |
| `yOffset` | `y-offset` | `number` | `0` | Offsets the menu's block alignment from the anchor by the given number in pixels.<br>e.g. positive -> down, negative -> up |
| `noHorizontalFlip` | `no-horizontal-flip` | `boolean` | `false` | Disable the `flip` behavior that usually happens on the horizontal axis when the surface would render outside the viewport. |
| `noVerticalFlip` | `no-vertical-flip` | `boolean` | `false` | Disable the `flip` behavior that usually happens on the vertical axis when the surface would render outside the viewport. |
| `typeaheadDelay` | `typeahead-delay` | `number` | `200` | The max time between the keystrokes of the typeahead menu behavior before it clears the typeahead buffer. |
| `anchorCorner` | `anchor-corner` | `string` | `Corner.END_START` | The corner of the anchor which to align the menu in the standard logical property style of <block>-<inline> e.g. `'end-start'`.<br>NOTE: This value may not be respected by the menu positioning algorithm if the menu would render outisde the viewport. Use `no-horizontal-flip` or `no-vertical-flip` to force the usage of the value |
| `menuCorner` | `menu-corner` | `string` | `Corner.START_START` | The corner of the menu which to align the anchor in the standard logical property style of <block>-<inline> e.g. `'start-start'`.<br>NOTE: This value may not be respected by the menu positioning algorithm if the menu would render outisde the viewport. Use `no-horizontal-flip` or `no-vertical-flip` to force the usage of the value |
| `stayOpenOnOutsideClick` | `stay-open-on-outside-click` | `boolean` | `false` | Keeps the user clicks outside the menu.<br>NOTE: clicking outside may still cause focusout to close the menu so see `stayOpenOnFocusout`. |
| `stayOpenOnFocusout` | `stay-open-on-focusout` | `boolean` | `false` | Keeps the menu open when focus leaves the menu's composed subtree.<br>NOTE: Focusout behavior will stop propagation of the focusout event. Set this property to true to opt-out of menu's focusout handling altogether. |
| `skipRestoreFocus` | `skip-restore-focus` | `boolean` | `false` | After closing, does not restore focus to the last focused element before the menu was opened. |
| `defaultFocus` | `default-focus` | `string` | `FocusState.FIRST_ITEM` | The element that should be focused by default once opened.<br>NOTE: When setting default focus to 'LIST_ROOT', remember to change `tabindex` to `0` and change md-menu's display to something other than `display: contents` when necessary. |
| `noNavigationWrap` | `no-navigation-wrap` | `boolean` | `false` | Turns off navigation wrapping. By default, navigating past the end of the menu items will wrap focus back to the beginning and vice versa. Use this for ARIA patterns that do not wrap focus, like combobox. |
| `isSubmenu` |  | `boolean` | `false` | Whether or not the current menu is a submenu and should not handle specific navigation keys. |
| `typeaheadController` |  | `TypeaheadController` | `function { ... }` | Handles typeahead navigation through the menu. |
| `anchorElement` |  | `HTMLElement & Partial<SurfacePositionTarget>` | `undefined` |  |
| `items` |  | `MenuItem[]` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getBoundingClientRect` | _None_ | `DOMRect` |  |
| `getClientRects` | _None_ | `DOMRectList` |  |
| `close` | _None_ | `void` |  |
| `show` | _None_ | `void` |  |
| `activateNextItem` | _None_ | `MenuItem` | Activates the next item in the menu. If at the end of the menu, the first item will be activated. |
| `activatePreviousItem` | _None_ | `MenuItem` | Activates the previous item in the menu. If at the start of the menu, the last item will be activated. |
| `reposition` | _None_ | `void` | Repositions the menu if it is open.<br>Useful for the case where document or window-positioned menus have their anchors moved while open. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `opening` | `Event` | No | No | Fired before the opening animation begins |
| `opened` | `Event` | No | No | Fired once the menu is open, after any animations |
| `closing` | `Event` | No | No | Fired before the closing animation begins |
| `closed` | `Event` | No | No | Fired once the menu is closed, after any animations |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdMenuItem <code>&lt;md-menu-item&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Disables the item and makes it non-selectable and non-interactive. |
| `type` | `type` | `string` | `'menuitem'` | Sets the behavior and role of the menu item, defaults to "menuitem". |
| `href` | `href` | `string` | `''` | Sets the underlying `HTMLAnchorElement`'s `href` resource attribute. |
| `target` | `target` | `string` | `''` | Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is set. |
| `keepOpen` | `keep-open` | `boolean` | `false` | Keeps the menu open if clicked or keyboard selected. |
| `selected` | `selected` | `boolean` | `false` | Sets the item in the selected visual state when a submenu is opened. |
| `typeaheadText` |  | `string` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `close-menu` | `CustomEvent<{initiator: SelectOption, reason: Reason, itemPath: SelectOption[]}>` | Yes | Yes | Closes the encapsulating menu on closable interaction. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdSubMenu <code>&lt;md-sub-menu&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `anchorCorner` | `anchor-corner` | `string` | `Corner.START_END` | The anchorCorner to set on the submenu. |
| `menuCorner` | `menu-corner` | `string` | `Corner.START_START` | The menuCorner to set on the submenu. |
| `hoverOpenDelay` | `hover-open-delay` | `number` | `400` | The delay between mouseenter and submenu opening. |
| `hoverCloseDelay` | `hover-close-delay` | `number` | `400` | The delay between ponterleave and the submenu closing. |
| `isSubMenu` | `md-sub-menu` | `boolean` | `true` | READONLY: self-identifies as a menu item and sets its identifying attribute |
| `item` |  | `MenuItem` | `undefined` |  |
| `menu` |  | `Menu` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `show` | _None_ | `Promise<void>` | Shows the submenu. |
| `close` | _None_ | `Promise<void>` | Closes the submenu. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `deactivate-items` | `Event` | Yes | Yes | Requests the parent menu to deselect other items when a submenu opens. |
| `request-activation` | `Event` | Yes | Yes | Requests the parent to make the slotted item focusable and focus the item. |
| `deactivate-typeahead` | `Event` | Yes | Yes | Requests the parent menu to deactivate the typeahead functionality when a submenu opens. |
| `activate-typeahead` | `Event` | Yes | Yes | Requests the parent menu to activate the typeahead functionality when a submenu closes. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: progress.md -->

# Progress

<!-- catalog-only-start --><!-- ---
name: Progress indicators
dirname: progress
ssrOnly: true
-----><!-- catalog-only-end -->

<catalog-component-header image-align="end">
<catalog-component-header-title slot="title">

# Progress indicators

<!-- no-catalog-start -->

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- go/md-progress -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/progress/).**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Progress indicators](https://m3.material.io/components/progress-indicators)<!-- {.external} -->
inform users about the status of ongoing processes, such as loading an app or
submitting a form.

There are two types of progress indicators: linear and circular.

</catalog-component-header-title>

<img
    src="images/progress/hero.webp"
    alt="Circular and linear progress indicators showing indetermine and determinate examples"
    title="Progress indicators can be used to show indeterminate or determinate progress.">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/progress-indicators)
    <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/progress)
    <!-- {.external} -->

## Types

1.  [Circular progress](#circular-progress)
1.  [Linear progress](#linear-progress)

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Usage

Progress indicators may be determinate to show progress, or indeterminate for an
unspecified amount of progress.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center; gap: 16px"
      title="Determinate and indeterminate progress indicators."
      aria-label="Two circular and linear progress indicator examples, one with three quarters of the track full
and the other
indeterminate.">
    <md-circular-progress value="0.75"></md-circular-progress>
    <md-circular-progress indeterminate></md-circular-progress>
    <div style="display: flex; flex-direction: column; align-self: stretch; justify-content: space-evenly;">
      <md-linear-progress value="0.75"></md-linear-progress>
      <md-linear-progress indeterminate></md-linear-progress>
    </div>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-circular-progress value="0.75"></md-circular-progress>
<md-circular-progress indeterminate></md-circular-progress>

<md-linear-progress indeterminate></md-linear-progress>
<md-linear-progress value="0.5"></md-linear-progress>
```

### Four colors

Indeterminate progress indicators may cycle between four colors (primary,
primary container, tertiary, and tertiary container by default).

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center; gap: 16px;"
      title="A four-color indeterminate circular and linear progress indicator"
      aria-label="Indeterminate progress indicators that cycles between four colors.">
    <md-circular-progress four-color indeterminate></md-circular-progress>
    <md-linear-progress four-color indeterminate></md-linear-progress>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-circular-progress four-color indeterminate></md-circular-progress>
<md-linear-progress four-color indeterminate></md-linear-progress>
```

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute to progress indicators to give them a descriptive name.

```html
<md-circular-progress value="0.5" aria-label="Page refresh progress"></md-circular-progress>

<md-linear-progress value="0.5" aria-label="Download progress"></md-linear-progress>
```

## Circular progress

<!-- go/md-circular-progress -->

Circular progress indicators display progress by animating along an invisible
circular track in a clockwise direction.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center; gap: 16px;"
      title="Circular progress indicators"
      aria-label="An indeterminate and determinate circular progress indicator.">
    <md-circular-progress indeterminate></md-circular-progress>
    <md-circular-progress value="0.6"></md-circular-progress>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-circular-progress indeterminate></md-circular-progress>
<md-circular-progress value="0.6"></md-circular-progress>
```

## Linear progress

<!-- go/md-linear-progress -->

Linear progress indicators display progress by animating along the length of a
fixed, visible track.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center; gap: 16px;"
      title="Linear progress indicators"
      aria-label="An indeterminate and determinate linear progress indicator.">
    <md-linear-progress indeterminate></md-linear-progress>
    <md-linear-progress value="0.6"></md-linear-progress>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-linear-progress indeterminate></md-linear-progress>
<md-linear-progress value="0.6"></md-linear-progress>
```

### Buffer

Linear progress indicators may show a buffer to communicate both determinate and
indeterminate progress. The progress bar and track represent known progress
while the buffer dots represent unknown progress.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;"
      title="Progress and buffer"
      aria-label="A linear progress indicator with partial progress and an indeterminate buffer.">
    <md-linear-progress value="0.5" buffer="0.8"></md-linear-progress>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-linear-progress value="0.5" buffer="0.8"></md-linear-progress>
```

## Theming

Progress indicators supports [Material theming](../theming/README.md) and can be
customized in terms of color.

### Circular progress tokens

Token                                           | Default value
----------------------------------------------- | ------------------------
`--md-circular-progress-active-indicator-color` | `--md-sys-color-primary`
`--md-circular-progress-size`                   | `48px`
`--md-circular-progress-active-indicator-width` | `8.3333` (%)

> Note: the active indicator width must be specified as a unit-less percentage
> of the size.

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-circular-progress.scss)
    <!-- {.external} -->

### Circular progress example

<!-- no-catalog-start -->

![Image of a circular progress indicator with a different theme applied](images/progress/theming-circular.webp "Circular progress indicator theming example.")

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      class="styled-example"
      title="Circular progress indicator theming example."
      aria-label="Image of a circular progress indicator with a different theme applied">
    <style>
      .styled-example {
        background-color: white;
        --md-circular-progress-size: 32px;
        --md-circular-progress-active-indicator-width: 20;
        --md-sys-color-primary: #006A6A;
      }
    </style>

    <md-circular-progress value="0.5"></md-circular-progress>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
:root {
  --md-circular-progress-size: 32px;
  --md-circular-progress-active-indicator-width: 20;
  --md-sys-color-primary: #006A6A;
}
</style>

<md-circular-progress value="0.5"></md-circular-progress>
```

### Linear progress tokens

Token                                          | Default value
---------------------------------------------- | -------------
`--md-linear-progress-track-color`             | `--md-sys-color-surface-container-highest`
`--md-linear-progress-track-height`            | `4px`
`--md-linear-progress-track-shape`             | `--md-sys-shape-corner-none`
`--md-linear-progress-active-indicator-color`  | `--md-sys-color-primary`
`--md-linear-progress-active-indicator-height` | `4px`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-linear-progress.scss)
    <!-- {.external} -->

### Linear progress example

<!-- no-catalog-start -->

![Image of a linear progress indicator with a different theme applied](images/progress/theming-linear.webp "Linear progress theming example.")

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="min-width:300px;"
      class="styled-example"
      aria-label="Image of a linear progress indicator with a different theme applied"
      title="Linear progress theming example.">
  <style>
    .styled-example {
      background-color: white;
      --md-linear-progress-track-height: 8px;
      --md-linear-progress-track-shape: 8px;
      --md-linear-progress-active-indicator-height: 8px;
      --md-sys-color-primary: #006A6A;
      --md-sys-color-surface-container-highest: #DDE4E3;
    }
    .styled-example md-linear-progress {
      flex-grow: 1;
    }
  </style>
  <md-linear-progress value="0.5"></md-linear-progress>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
:root {
  --md-linear-progress-track-height: 8px;
  --md-linear-progress-track-shape: 8px;
  --md-linear-progress-active-indicator-height: 8px;
  --md-sys-color-primary: #006A6A;
  --md-sys-color-surface-container-highest: #DDE4E3;
}
</style>

<md-linear-progress value="0.5"></md-linear-progress>
```

<!-- auto-generated API docs start -->

## API


### MdLinearProgress <code>&lt;md-linear-progress&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `buffer` | `buffer` | `number` | `0` | Buffer amount to display, a fraction between 0 and `max`. If the value is 0 or negative, the buffer is not displayed. |
| `value` | `value` | `number` | `0` | Progress to display, a fraction between 0 and `max`. |
| `max` | `max` | `number` | `1` | Maximum progress to display, defaults to 1. |
| `indeterminate` | `indeterminate` | `boolean` | `false` | Whether or not to display indeterminate progress, which gives no indication to how long an activity will take. |
| `fourColor` | `four-color` | `boolean` | `false` | Whether or not to render indeterminate mode using 4 colors instead of one. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdCircularProgress <code>&lt;md-circular-progress&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `value` | `number` | `0` | Progress to display, a fraction between 0 and `max`. |
| `max` | `max` | `number` | `1` | Maximum progress to display, defaults to 1. |
| `indeterminate` | `indeterminate` | `boolean` | `false` | Whether or not to display indeterminate progress, which gives no indication to how long an activity will take. |
| `fourColor` | `four-color` | `boolean` | `false` | Whether or not to render indeterminate mode using 4 colors instead of one. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: radio.md -->

# Radio

<!-- catalog-only-start --><!-- ---
name: Radio
dirname: radio
ssrOnly: true
-----><!-- catalog-only-end -->

<catalog-component-header image-align="start">
<catalog-component-header-title slot="title">

# Radio button

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- github-only-start -->

<!-- go/md-radio -->

<!-- [TOC] -->

<!-- github-only-end -->

[Radio buttons](https://m3.material.io/components/radio-button)<!-- {.external} --> let
people select one option from a set of options.

</catalog-component-header-title>

<img
    class="hero"
    src="images/radio/hero.webp"
    alt="A list of items with radio buttons and one selected."
    title="Radio buttons">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/radio-button) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/radio)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Usage

Radios behave like
[`<input type="radio">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)<!-- {.external} -->
elements and form a group with the same `name` attribute. Only one radio can be
selected in a group.

Radios can be pre-selected by adding a `checked` attribute.

Add a `value` to identify which radio is selected in a form.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<form>
  <md-radio name="animals" value="cats"></md-radio>
  <md-radio name="animals" value="dogs"></md-radio>
  <md-radio name="animals" value="birds" checked></md-radio>
</form>
```

### Label

Associate a label with a radio using the `<label>` element.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<md-radio id="cats-radio" name="animals" value="cats"></md-radio>
<label for="cats-radio">Cats</label>

<md-radio id="dogs-radio" name="animals" value="dogs"></md-radio>
<label for="dogs-radio">Dogs</label>
```

> Note: do not wrap radios inside of a `<label>`, which stops screen readers
> from correctly announcing the number of radios in a group.

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute to radios without labels or radios whose labels need to be more
descriptive.

Place radios inside a
[`role="radiogroup"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)<!-- {.external} -->.
Radio groups must display a label, either with `aria-label` or
`aria-labelledby`.

```html
<div role="radiogroup" aria-labelledby="group-title">
  <h3 id="group-title">Starting position</h3>
  <div>
    <md-radio id="first-radio" name="group" value="1"
        aria-label="First"></md-radio>
    <label for="first-radio">1st</label>
  </div>
  <div>
    <md-radio id="second-radio" name="group" value="2"
        aria-label="Second"></md-radio>
    <label for="second-radio">2nd</label>
  </div>
</div>
```

> Note: radios are not automatically labelled by `<label>` elements and always
> need an `aria-label`. See b/294081528.

## Theming

Radios support [Material theming](../theming/README.md) and can be customized in
terms of color.

### Tokens

Token                            | Default value
-------------------------------- | -----------------------------------
`--md-radio-icon-color`          | `--md-sys-color-on-surface-variant`
`--md-radio-selected-icon-color` | `--md-sys-color-primary`
`--md-radio-icon-size`           | `20px`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-radio.scss)
    <!-- {.external} -->

### Example

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<style>
:root {
  --md-sys-color-primary: #006A6A;
  --md-radio-icon-size: 16px;
}
</style>

<md-radio name="group"></md-radio>
<md-radio name="group" checked></md-radio>
<md-radio name="group"></md-radio>
```

<!-- auto-generated API docs start -->

## API


### MdRadio <code>&lt;md-radio&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `required` | `required` | `boolean` | `false` | Whether or not the radio is required. If any radio is required in a group, all radios are implicitly required. |
| `value` | `value` | `string` | `'on'` | The element value to use in form submission when checked. |
| `checked` | `checked` | `boolean` | `undefined` |  |
| `disabled` |  | `boolean` | `undefined` |  |
| `name` |  | `string` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `formResetCallback` | _None_ | `void` |  |
| `formStateRestoreCallback` | `state` | `void` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `input` | `InputEvent` | Yes | No | Dispatched when the value changes from user interaction. |
| `change` | `Event` | Yes | Yes | Dispatched when the value changes from user interaction. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: ripple.md -->

# Ripple

<!-- catalog-only-start --><!-- ---
name: Ripple
dirname: ripple
ssrOnly: true
-----><!-- catalog-only-end -->

<catalog-component-header image-align="start">
<catalog-component-header-title slot="title">

# Ripple

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- no-catalog-start -->

<!-- go/md-ripple -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/ripple/)<!-- {.external} -->**
<!-- external-only-end -->

<!-- no-catalog-end -->

Ripples are
[state layers](https://m3.material.io/foundations/interaction/states/state-layers)<!-- {.external} -->
used to communicate the status of a component or interactive element.

A state layer is a semi-transparent covering on an element that indicates its
state. A layer can be applied to an entire element or in a circular shape.

</catalog-component-header-title>

<img src="images/ripple/hero.gif" alt="Two containers that display a bounded and unbounded ripple on interaction."
title="A bounded and unbounded ripple.">

</catalog-component-header>

*   [Design article](https://m3.material.io/foundations/interaction/states/state-layers)
    <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/ripple)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Usage

Ripples display on hover and press pointer interactions. They may be attached to
a control in one of three ways.

<!-- no-catalog-start -->

![A container that displays a bounded ripple on interaction.](images/ripple/usage.gif "A bounded ripple.")

<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

1.  Attached to the parent element

    ```html
    <style>
      .container {
        position: relative;
      }
    </style>
    <button class="container">
      <md-ripple></md-ripple>
    </button>
    ```

1.  Attached to a referenced element

    ```html
    <style>
      .container {
        position: relative;
      }
    </style>
    <div class="container">
      <md-ripple for="control"></md-ripple>
      <input id="control">
    </div>
    ```

1.  Attached imperatively

    ```html
    <style>
      .container {
        position: relative;
      }
    </style>
    <div class="container">
      <md-ripple id="ripple"></md-ripple>
      <button id="ripple-control"></button>
    </div>
    <script>
      const ripple = document.querySelector('#ripple');
      const control = document.querySelector('#ripple-control');
      ripple.attach(control);
    </script>
    ```

> Note: ripples must be placed within a `position: relative` container.

### Unbounded

To create an unbounded circular ripple centered on an element, use the following styles.

```css
.container {
  display: flex;
  place-content: center;
  place-items: center;
  position: relative;
}

md-ripple.unbounded {
  border-radius: 50%;
  inset: unset;
  height: var(--state-layer-size);
  width: var(--state-layer-size);
}
```

<!-- no-catalog-start -->

![A circular container with an inner circle that displays an unbounded ripple around it on interaction.](images/ripple/usage-unbounded.gif "An unbounded ripple.")

<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<style>
  .container {
    border-radius: 50%;
    height: 32px;
    width: 32px;

    /* Needed for unbounded ripple */
    display: flex;
    place-content: center;
    place-items: center;
    position: relative;
  }

  md-ripple.unbounded {
    /* Needed for unbounded ripple */
    border-radius: 50%;
    inset: unset;
    height: 64px;
    width: 64px;
  }
</style>
<button class="container">
  <md-ripple class="unbounded"></md-ripple>
</button>
```

## Accessibility

Ripples are visual components and do not have assistive technology requirements.

## Theming

Ripples support [Material theming](../theming/README.md) and can be customized
in terms of color.

### Tokens

Token                    | Default value
------------------------ | ------------------------
`--md-ripple-hover-color` | `--md-sys-color-on-surface`
`--md-ripple-pressed-color` | `--md-sys-color-on-surface`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-ripple.scss)
    <!-- {.external} -->

### Example

<!-- no-catalog-start -->

![Image of a ripple with a different theme applied](images/ripple/theming.gif "Ripple theming example.")

<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<style>
:root {
  --md-sys-color-primary: #006A6A;
  --md-ripple-hover-color: var(--md-sys-color-primary);
  --md-ripple-pressed-color: var(--md-sys-color-primary);
}

.container {
  position: relative;
}
</style>
<button class="container">
  <md-ripple></md-ripple>
</button>
```

<!-- auto-generated API docs start -->

## API


### MdRipple <code>&lt;md-ripple&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Disables the ripple. |
| `htmlFor` |  | `string` | `undefined` |  |
| `control` |  | `HTMLElement` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `attach` | `control` | `void` |  |
| `detach` | _None_ | `void` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: select.md -->

# Select

<!-- catalog-only-start --><!-- ---
name: Select
dirname: select
-----><!-- catalog-only-end -->

<catalog-component-header image-align="start">
<catalog-component-header-title slot="title">

# Select

<!-- no-catalog-start -->

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'material-web-team' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- go/md-select -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/select/)**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Select menus](https://m3.material.io/components/menus/overview#b1704de4-94b7-4177-9e96-b677ae767cb4)<!-- {.external} -->
display a list of choices on temporary surfaces and display the currently
selected menu item above the menu.

</catalog-component-header-title>

<img class="hero" src="images/select/hero.webp" alt="A textfield containing the text Item 2, with a dropdown menu containing Item 1, Item 2, and Item 3.">

</catalog-component-header>

*   Design article (*coming soon*)
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/select)
    <!-- {.external} -->

## Usage

Select (also referred to as a dropdown menu) allows choosing a value from a
fixed list of available options. It is analogous to the native HTML
[`<select>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)<!-- {.external} -->.

<!-- no-catalog-start -->

![Example usage of an outlined dropdown menu and a filled dropdown menu.](images/select/usage.webp "An outlined dropdown menu filled with Apple, and a filled dropdown menu.")

<!-- no-catalog-end -->
<!-- catalog-include "figures/select/usage.html" -->

```html
<md-outlined-select>
  <md-select-option aria-label="blank"></md-select-option>
  <md-select-option selected value="apple">
    <div slot="headline">Apple</div>
  </md-select-option>
  <md-select-option value="apricot">
    <div slot="headline">Apricot</div>
  </md-select-option>
</md-outlined-select>

<md-filled-select>
  <md-select-option aria-label="blank"></md-select-option>
  <md-select-option value="apple">
    <div slot="headline">Apple</div>
  </md-select-option>
  <md-select-option value="apricot">
    <div slot="headline">Apricot</div>
  </md-select-option>
</md-filled-select>
```

### Required select

Indicate that a selection is mandatory by adding the `required` attribute.

```html
<md-filled-select required>
  <md-select-option value="one">
    <div slot="headline">One</div>
  </md-select-option>
  <md-select-option value="two">
    <div slot="headline">Two</div>
  </md-select-option>
</md-filled-select>
```

<!--
## Accessibility

*Insert a 1-2 sentence description of a common accessibility scenario, followed
by a code snippet. Do not include a rendered image for accessibility examples.*

```html
<component-name aria-label="Example">
```

*Repeat with additional examples as needed to explain how to make the component
accessible.* -->

## Theming

Select supports
[Material theming](https://github.com/material-components/material-web/blob/main/docs/theming/README.md)<!-- {.external} -->
and can be customized in terms of color, typography, and shape.

### Filled Select tokens

Token                                            | Default value
------------------------------------------------ | -------------
`--md-filled-select-text-field-container-color`  | `--md-sys-color-surface-container-highest`
`--md-filled-select-text-field-container-shape`  | `--md-sys-shape-corner-extra-small`
`--md-filled-select-text-field-input-text-color` | `--md-sys-color-on-surface`
`--md-filled-select-text-field-input-text-font`  | `--md-sys-typescale-body-large-font`

*   [Filled Select tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-filled-select.scss)
    <!-- {.external} -->

To theme the select's dropdown menu, use the `md-menu` component tokens on the
`::part(menu)` selector.

### Filled Select example

<!-- no-catalog-start -->

![Image of a filled select with a different theme applied](images/select/theming-filled.webp "Filled select theming example.")

<!-- no-catalog-end -->
<!-- catalog-include "figures/select/theming-filled.html" -->

```html
<style>
:root {
  --md-filled-select-text-field-container-shape: 0px;
  --md-filled-select-text-field-container-color: #f7faf9;
  --md-filled-select-text-field-input-text-color: #005353;
  --md-filled-select-text-field-input-text-font: system-ui;
}

md-filled-select::part(menu) {
  --md-menu-container-color: #f4fbfa;
  --md-menu-container-shape: 0px;
}
</style>

<md-filled-select>
  <md-select-option selected value="apple">
    <div slot="headline">Apple</div>
  </md-select-option>
  <md-select-option value="tomato">
    <div slot="headline">Tomato</div>
  </md-select-option>
</md-filled-select>
```

### Outlined Select tokens

Token                                              | Default value
-------------------------------------------------- | -------------
`--md-outlined-select-text-field-outline-color`    | `--md-sys-color-outline`
`--md-outlined-select-text-field-container-shape`  | `--md-sys-shape-corner-extra-small`
`--md-outlined-select-text-field-input-text-color` | `--md-sys-color-on-surface`
`--md-outlined-select-text-field-input-text-font`  | `--md-sys-typescale-body-large-font`

*   [Outlined Select tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-outlined-select.scss)
    <!-- {.external} -->

### Outlined Select example

<!-- no-catalog-start -->

![Image of a outlined select with a different theme applied](images/select/theming-outlined.webp "Outlined select theming example.")

<!-- no-catalog-end -->
<!-- catalog-include "figures/select/theming-outlined.html" -->

```html
<style>
:root {
  --md-outlined-select-text-field-outline-color: #6e7979;
  --md-outlined-select-text-field-container-shape: 0px;
  --md-outlined-select-text-field-input-text-color: #005353;
  --md-outlined-select-text-field-input-text-font: system-ui;
}

md-outlined-select::part(menu) {
  --md-menu-container-color: #f4fbfa;
  --md-menu-container-shape: 0px;
}
</style>

<md-outlined-select>
  <md-select-option selected value="apple">
    <div slot="headline">Apple</div>
  </md-select-option>
  <md-select-option value="tomato">
    <div slot="headline">Tomato</div>
  </md-select-option>
</md-outlined-select>
```

<!-- auto-generated API docs start -->

## API


### MdFilledSelect <code>&lt;md-filled-select&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `quick` | `quick` | `boolean` | `false` | Opens the menu synchronously with no animation. |
| `required` | `required` | `boolean` | `false` | Whether or not the select is required. |
| `errorText` | `error-text` | `string` | `''` | The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.<br>This error message overrides the error message displayed by `reportValidity()`. |
| `label` | `label` | `string` | `''` | The floating label for the field. |
| `noAsterisk` | `no-asterisk` | `boolean` | `false` | Disables the asterisk on the floating label, when the select is required. |
| `supportingText` | `supporting-text` | `string` | `''` | Conveys additional information below the select, such as how it should be used. |
| `error` | `error` | `boolean` | `false` | Gets or sets whether or not the select is in a visually invalid state.<br>This error state overrides the error state controlled by `reportValidity()`. |
| `menuPositioning` | `menu-positioning` | `string` | `'popover'` | Whether or not the underlying md-menu should be position: fixed to display in a top-level manner, or position: absolute.<br>position:fixed is useful for cases where select is inside of another element with stacking context and hidden overflows such as `md-dialog`. |
| `clampMenuWidth` | `clamp-menu-width` | `boolean` | `false` | Clamps the menu-width to the width of the select. |
| `typeaheadDelay` | `typeahead-delay` | `number` | `DEFAULT_TYPEAHEAD_BUFFER_TIME` | The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer. |
| `hasLeadingIcon` | `has-leading-icon` | `boolean` | `false` | Whether or not the text field has a leading icon. Used for SSR. |
| `displayText` | `display-text` | `string` | `''` | Text to display in the field. Only set for SSR. |
| `menuAlign` | `menu-align` | `string` | `'start'` | Whether the menu should be aligned to the start or the end of the select's textbox. |
| `value` | `value` | `string` | `undefined` |  |
| `selectedIndex` | `selected-index` | `number` | `undefined` |  |
| `disabled` |  | `boolean` | `undefined` |  |
| `name` |  | `string` | `undefined` |  |
| `options` |  | `SelectOption[]` | `undefined` |  |
| `selectedOptions` |  | `SelectOption[]` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `select` | `value` | `void` | Selects an option given the value of the option, and updates MdSelect's value. |
| `selectIndex` | `index` | `void` | Selects an option given the index of the option, and updates MdSelect's value. |
| `reset` | _None_ | `void` | Reset the select to its default value. |
| `showPicker` | _None_ | `void` | Shows the picker. If it's already open, this is a no-op. |
| `getUpdateComplete` | _None_ | `Promise<boolean>` |  |
| `formResetCallback` | _None_ | `void` |  |
| `formStateRestoreCallback` | `state` | `void` |  |
| `click` | _None_ | `void` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `change` | `Event` | Yes | No | The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) |
| `input` | `InputEvent` | Yes | Yes | The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) |
| `opening` | `Event` | No | No | Fired when the select's menu is about to open. |
| `opened` | `Event` | No | No | Fired when the select's menu has finished animations and opened. |
| `closing` | `Event` | No | No | Fired when the select's menu is about to close. |
| `closed` | `Event` | No | No | Fired when the select's menu has finished animations and closed. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdOutlinedSelect <code>&lt;md-outlined-select&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `quick` | `quick` | `boolean` | `false` | Opens the menu synchronously with no animation. |
| `required` | `required` | `boolean` | `false` | Whether or not the select is required. |
| `errorText` | `error-text` | `string` | `''` | The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.<br>This error message overrides the error message displayed by `reportValidity()`. |
| `label` | `label` | `string` | `''` | The floating label for the field. |
| `noAsterisk` | `no-asterisk` | `boolean` | `false` | Disables the asterisk on the floating label, when the select is required. |
| `supportingText` | `supporting-text` | `string` | `''` | Conveys additional information below the select, such as how it should be used. |
| `error` | `error` | `boolean` | `false` | Gets or sets whether or not the select is in a visually invalid state.<br>This error state overrides the error state controlled by `reportValidity()`. |
| `menuPositioning` | `menu-positioning` | `string` | `'popover'` | Whether or not the underlying md-menu should be position: fixed to display in a top-level manner, or position: absolute.<br>position:fixed is useful for cases where select is inside of another element with stacking context and hidden overflows such as `md-dialog`. |
| `clampMenuWidth` | `clamp-menu-width` | `boolean` | `false` | Clamps the menu-width to the width of the select. |
| `typeaheadDelay` | `typeahead-delay` | `number` | `DEFAULT_TYPEAHEAD_BUFFER_TIME` | The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer. |
| `hasLeadingIcon` | `has-leading-icon` | `boolean` | `false` | Whether or not the text field has a leading icon. Used for SSR. |
| `displayText` | `display-text` | `string` | `''` | Text to display in the field. Only set for SSR. |
| `menuAlign` | `menu-align` | `string` | `'start'` | Whether the menu should be aligned to the start or the end of the select's textbox. |
| `value` | `value` | `string` | `undefined` |  |
| `selectedIndex` | `selected-index` | `number` | `undefined` |  |
| `disabled` |  | `boolean` | `undefined` |  |
| `name` |  | `string` | `undefined` |  |
| `options` |  | `SelectOption[]` | `undefined` |  |
| `selectedOptions` |  | `SelectOption[]` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `select` | `value` | `void` | Selects an option given the value of the option, and updates MdSelect's value. |
| `selectIndex` | `index` | `void` | Selects an option given the index of the option, and updates MdSelect's value. |
| `reset` | _None_ | `void` | Reset the select to its default value. |
| `showPicker` | _None_ | `void` | Shows the picker. If it's already open, this is a no-op. |
| `getUpdateComplete` | _None_ | `Promise<boolean>` |  |
| `formResetCallback` | _None_ | `void` |  |
| `formStateRestoreCallback` | `state` | `void` |  |
| `click` | _None_ | `void` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `change` | `Event` | Yes | No | The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) |
| `input` | `InputEvent` | Yes | Yes | The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) |
| `opening` | `Event` | No | No | Fired when the select's menu is about to open. |
| `opened` | `Event` | No | No | Fired when the select's menu has finished animations and opened. |
| `closing` | `Event` | No | No | Fired when the select's menu is about to close. |
| `closed` | `Event` | No | No | Fired when the select's menu has finished animations and closed. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdSelectOption <code>&lt;md-select-option&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Disables the item and makes it non-selectable and non-interactive. |
| `selected` | `selected` | `boolean` | `false` | Sets the item in the selected visual state when a submenu is opened. |
| `value` | `value` | `string` | `''` | Form value of the option. |
| `type` |  | `string` | `'option' as const` |  |
| `typeaheadText` |  | `string` | `undefined` |  |
| `displayText` |  | `string` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `close-menu` | `CustomEvent<{initiator: SelectOption, reason: Reason, itemPath: SelectOption[]}>` | Yes | Yes | Closes the encapsulating menu on closable interaction. |
| `request-selection` | `Event` | Yes | Yes | Requests the parent md-select to select this element (and deselect others if single-selection) when `selected` changed to `true`. |
| `request-deselection` | `Event` | Yes | Yes | Requests the parent md-select to deselect this element when `selected` changed to `false`. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: slider.md -->

# Slider

<!-- catalog-only-start --><!-- ---
name: Sliders
dirname: slider
-----><!-- catalog-only-end -->

<catalog-component-header image-align="start">
<catalog-component-header-title slot="title">

# Sliders

<!-- no-catalog-start -->

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'material-web-team' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- go/md-slider -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/slider/)**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Sliders](https://m3.material.io/components/sliders)<!-- {.external} --> allow users to
view and select a value (or range) along a track. They're ideal for adjusting
settings such as volume and brightness, or for applying image filters.

Sliders can use icons or labels to represent a numeric or relative scale.

</catalog-component-header-title>

<img
    class="hero"
    alt="Sound settings screen with sliders labeled 'Media volume', and 'Call volume'."
    src="images/slider/hero.webp">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/sliders) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/slider)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname, previewHeight=650 %}

-->

<!-- catalog-only-end -->

## Usage

Sliders may be continuous or discrete, and may also represent a range.

```html
<md-slider></md-slider>
<md-slider ticks value="50"></md-slider>
<md-slider range value-start="25" value-end="75"></md-slider>
```

### Continuous

Allows users to select a value along a subjective range.

```html
<md-slider min="0" max="100" value="50"></md-slider>
```

### Discrete

Allows users to select a specific value from a predetermined range. Tick marks
may be used to indicate available values.

```html
<md-slider step="5" ticks min="0" max="20"></md-slider>
```

### Range

A range slider has two handles, and indicates a minimum and maximum value in a
range.

```html
<md-slider range value-start="25" value-end="50"></md-slider>
```

### Value label

A value label displays the specific value that corresponds with the handle's
placement.

The label appears when the handle is selected. For range sliders, labels appear
when either handle is selected.

```html
<md-slider labeled></md-slider>
```

<!-- TODO(b/318567101): ## Accessibility -->

## Theming

Slider supports [Material theming](../theming/README.md) and can be customized
in terms of color and shape.

### Tokens

Token                              | Default value
---------------------------------- | ------------------------------------------
`--md-slider-active-track-color`   | `--md-sys-color-primary`
`--md-slider-active-track-shape`   | `--md-sys-shape-corner-full`
`--md-slider-inactive-track-color` | `--md-sys-color-surface-container-highest`
`--md-slider-inactive-track-shape` | `--md-sys-shape-corner-full`
`--md-slider-handle-color`         | `--md-sys-color-primary`
`--md-slider-handle-shape`         | `--md-sys-shape-corner-full`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-slider.scss)
    <!-- {.external} -->

### Example

<!-- no-catalog-start -->

![Image of a slider with a different theme applied](images/slider/theming.webp "Slider theming example.")

<!-- no-catalog-end -->

```html
<style>
:root {
  /* System tokens */
  --md-sys-color-primary: #006A6A;

  /* Component tokens */
  --md-slider-handle-shape: 0px;
}
</style>

<md-slider
  range
  value-start="25"
  value-end="75"
  ticks
  step="5"
></md-slider>
```

<!-- auto-generated API docs start -->

## API


### MdSlider <code>&lt;md-slider&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `min` | `min` | `number` | `0` | The slider minimum value |
| `max` | `max` | `number` | `100` | The slider maximum value |
| `value` | `value` | `number` | `undefined` | The slider value displayed when range is false. |
| `valueStart` | `value-start` | `number` | `undefined` | The slider start value displayed when range is true. |
| `valueEnd` | `value-end` | `number` | `undefined` | The slider end value displayed when range is true. |
| `valueLabel` | `value-label` | `string` | `''` | An optional label for the slider's value displayed when range is false; if not set, the label is the value itself. |
| `valueLabelStart` | `value-label-start` | `string` | `''` | An optional label for the slider's start value displayed when range is true; if not set, the label is the valueStart itself. |
| `valueLabelEnd` | `value-label-end` | `string` | `''` | An optional label for the slider's end value displayed when range is true; if not set, the label is the valueEnd itself. |
| `ariaLabelStart` | `aria-label-start` | `string` | `''` | Aria label for the slider's start handle displayed when range is true. |
| `ariaValueTextStart` | `aria-valuetext-start` | `string` | `''` | Aria value text for the slider's start value displayed when range is true. |
| `ariaLabelEnd` | `aria-label-end` | `string` | `''` | Aria label for the slider's end handle displayed when range is true. |
| `ariaValueTextEnd` | `aria-valuetext-end` | `string` | `''` | Aria value text for the slider's end value displayed when range is true. |
| `step` | `step` | `number` | `1` | The step between values. |
| `ticks` | `ticks` | `boolean` | `false` | Whether or not to show tick marks. |
| `labeled` | `labeled` | `boolean` | `false` | Whether or not to show a value label when activated. |
| `range` | `range` | `boolean` | `false` | Whether or not to show a value range. When false, the slider displays a slideable handle for the value property; when true, it displays slideable handles for the valueStart and valueEnd properties. |
| `disabled` |  | `boolean` | `undefined` |  |
| `name` |  | `string` | `undefined` |  |
| `nameStart` |  | `string` | `undefined` |  |
| `nameEnd` |  | `string` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `formResetCallback` | _None_ | `void` |  |
| `formStateRestoreCallback` | `state` | `void` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `change` | `Event` | Yes | No | The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) |
| `input` | `InputEvent` | Yes | Yes | The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: switch.md -->

# Switch

<!-- catalog-only-start --><!-- ---
name: Switch
dirname: switch
-----><!-- catalog-only-end -->

<catalog-component-header>
<catalog-component-header-title slot="title">

# Switch

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- no-catalog-start -->

<!-- go/md-switch -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/switch/).**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Switches](https://m3.material.io/components/switch)<!-- {.external} --> toggle the state
of an item on or off.

</catalog-component-header-title>

<img
    class="hero"
    src="images/switch/hero.webp"
    alt="Two switches on a settings page for Wi-Fi and Bluetooth. The first is on and the second is off."
    title="Switches on a settings page.">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/switch) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/switch)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Usage

Switches are similar to checkboxes, and can be unselected or selected.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<md-switch></md-switch>
<md-switch selected></md-switch>
```

### Icons

Icons can be used to visually emphasize the switch's selected state. Switches
can choose to display both icons or only selected icons.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<md-switch icons></md-switch>
<md-switch icons selected></md-switch>

<md-switch icons show-only-selected-icon></md-switch>
<md-switch icons show-only-selected-icon selected></md-switch>
```

### Label

Associate a label with a switch using the `<label>` element.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<label>
  Wi-Fi
  <md-switch selected></md-switch>
</label>

<label for="switch">Bluetooth</label>
<md-switch id="switch"></md-switch>
```

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute to switches without labels or switches whose labels need to be more
descriptive.

```html
<md-switch aria-label="Lights"></md-switch>

<label>
  All
  <md-switch aria-label="All notifications"></md-switch>
</label>
```

> Note: switches are not automatically labelled by `<label>` elements and always
> need an `aria-label`. See b/294081528.

## Theming

Switches supports [Material theming](../theming/README.md) and can be customized
in terms of color and shape.

### Tokens

Token                               | Default value
----------------------------------- | ------------------------------------------
`--md-switch-handle-color`          | `--md-sys-color-outline`
`--md-switch-handle-shape`          | `--md-sys-shape-corner-full`
`--md-switch-track-color`           | `--md-sys-color-surface-container-highest`
`--md-switch-track-shape`           | `--md-sys-shape-corner-full`
`--md-switch-selected-handle-color` | `--md-sys-color-on-primary`
`--md-switch-selected-track-color`  | `--md-sys-color-primary`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-switch.scss)
    <!-- {.external} -->

### Example

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<style>
  :root {
    /* System tokens */
    --md-sys-color-primary: #006a6a;
    --md-sys-color-on-primary: #ffffff;
    --md-sys-color-outline: #6f7979;
    --md-sys-color-surface-container-highest: #dde4e3;

    /* Component tokens */
    --md-switch-handle-shape: 0px;
    --md-switch-track-shape: 0px;
  }
</style>

<md-switch></md-switch>
<md-switch selected></md-switch>
```

<!-- auto-generated API docs start -->

## API


### MdSwitch <code>&lt;md-switch&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `selected` | `selected` | `boolean` | `false` | Puts the switch in the selected state and sets the form submission value to the `value` property. |
| `icons` | `icons` | `boolean` | `false` | Shows both the selected and deselected icons. |
| `showOnlySelectedIcon` | `show-only-selected-icon` | `boolean` | `false` | Shows only the selected icon, and not the deselected icon. If `true`, overrides the behavior of the `icons` property. |
| `required` | `required` | `boolean` | `false` | When true, require the switch to be selected when participating in form submission.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation |
| `value` | `value` | `string` | `'on'` | The value associated with this switch on form submission. `null` is submitted when `selected` is `false`. |
| `disabled` |  | `boolean` | `undefined` |  |
| `name` |  | `string` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `formResetCallback` | _None_ | `void` |  |
| `formStateRestoreCallback` | `state` | `void` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `input` | `InputEvent` | No | No | Fired whenever `selected` changes due to user interaction (bubbles and composed). |
| `change` | `Event` | No | No | Fired whenever `selected` changes due to user interaction (bubbles). |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: tabs.md -->

# Tabs

<!-- catalog-only-start --><!-- ---
name: Tabs
dirname: tabs
-----><!-- catalog-only-end -->

<catalog-component-header image-align="start">
<catalog-component-header-title slot="title">

# Tabs

<!-- no-catalog-start -->

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- go/md-tabs -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/tabs/)**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Tabs](https://m3.material.io/components/tabs)<!-- {.external} --> organize groups of
related content that are at the same level of hierarchy.

</catalog-component-header-title>

<img
  class="hero"
  src="images/tabs/hero.webp"
  alt="Media gallery screen with tabs labeled 'Video', 'Photos', and 'Audio'.">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/tabs) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/tabs)
    <!-- {.external} -->

## Types

1.  [Primary tabs](#primary-tabs)
1.  [Secondary tabs](#secondary-tabs)

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Usage

Tabs contain multiple primary or secondary tab children. Use the same type of
tab in a tab bar.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<md-tabs>
  <md-primary-tab>Video</md-primary-tab>
  <md-primary-tab>Photos</md-primary-tab>
  <md-primary-tab>Audio</md-primary-tab>
</md-tabs>

<md-tabs>
  <md-secondary-tab>Birds</md-secondary-tab>
  <md-secondary-tab>Cats</md-secondary-tab>
  <md-secondary-tab>Dogs</md-secondary-tab>
</md-tabs>
```

### Selection

Add an `active` attribute to change which tab is selected.

```html
<md-tabs>
  <md-primary-tab>Video</md-primary-tab>
  <md-primary-tab active>Photos</md-primary-tab>
  <md-primary-tab>Audio</md-primary-tab>
</md-tabs>
```

To observe changes to tab selections, add an event listener to `<md-tabs>`,
listening for the `change` event.

```ts
tabs.addEventListener('change', (event: Event) => {
  if (event.target.activeTabIndex === 2) {
    // ... perform logic only if index of selected item is 2.
  }
});
```

### Icons

Tabs may optionally show an icon.

Icons communicate the type of content within a tab. Icons should be simple and
recognizable.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<md-tabs>
  <md-primary-tab>
    <md-icon slot="icon">piano</md-icon>
    Keyboard
  </md-primary-tab>
  <md-primary-tab>
    <md-icon slot="icon">tune</md-icon>
    Guitar
  </md-primary-tab>
</md-tabs>
```

Tabs may optionally show icons without a label.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<md-tabs>
  <md-primary-tab>
    <md-icon slot="icon">piano</md-icon>
  </md-primary-tab>
  <md-primary-tab>
    <md-icon slot="icon">tune</md-icon>
  </md-primary-tab>
</md-tabs>
```

## Primary tabs

<!-- go/md-primary-tab -->

Primary tabs are placed at the top of the content pane under a top app bar. They
display the main content destinations.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<md-tabs>
  <md-primary-tab>
    <md-icon slot="icon">piano</md-icon>
    Keyboard
  </md-primary-tab>
  <md-primary-tab>
    <md-icon slot="icon">tune</md-icon>
    Guitar
  </md-primary-tab>
</md-tabs>
```

### Inline icons

Primary tabs can show their icons inline, like secondary tabs.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<md-tabs>
  <md-primary-tab inline-icon>
    <md-icon slot="icon">piano</md-icon>
    Keyboard
  </md-primary-tab>
  <md-primary-tab inline-icon>
    <md-icon slot="icon">tune</md-icon>
    Guitar
  </md-primary-tab>
</md-tabs>
```

## Secondary tabs

<!-- go/md-secondary-tab -->

Secondary tabs are used within a content area to further separate related
content and establish hierarchy.

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->
<!-- Need to add catalog-include "figures/<component>/usage.html" -->

```html
<md-tabs>
  <md-secondary-tab>
    <md-icon slot="icon">flight</md-icon>
    Travel
  </md-secondary-tab>
  <md-secondary-tab>
    <md-icon slot="icon">hotel</md-icon>
    Hotel
  </md-secondary-tab>
  <md-secondary-tab>
    <md-icon slot="icon">hiking</md-icon>
    Activities
  </md-secondary-tab>
</md-tabs>
```

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute to `<md-tabs>` and any individual tab whose label needs to be more
descriptive, such as icon-only tabs.

```html
<md-tabs aria-label="Content to view">
  <md-primary-tab aria-label="Photos">
    <md-icon slot="icon">photo</md-icon>
  </md-primary-tab>
  <md-primary-tab aria-label="Videos">
    <md-icon slot="icon">videocam</md-icon>
  </md-primary-tab>
  <md-primary-tab aria-label="Music">
    <md-icon slot="icon">audiotrack</md-icon>
  </md-primary-tab>
</md-tabs>
```

### Tab panels

Every tab must reference a
[`role="tabpanel"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)<!-- {.external} -->
element with `aria-controls`. Tab panels must be labelled with `aria-label` or
`aria-labelledby`.

It's common to reference the panel's tab with `aria-labelledby`.

```html
<md-tabs aria-label="Content to view">
  <md-primary-tab id="photos-tab" aria-controls="photos-panel">
    Photos
  </md-primary-tab>
  <md-primary-tab id="videos-tab" aria-controls="videos-panel">
    Videos
  </md-primary-tab>
  <md-primary-tab id="music-tab" aria-controls="music-panel">
    Music
  </md-primary-tab>
</md-tabs>

<div id="photos-panel" role="tabpanel" aria-labelledby="photos-tab">
  ...
</div>
<div id="videos-panel" role="tabpanel" aria-labelledby="videos-tab" hidden>
  ...
</div>
<div id="music-panel" role="tabpanel" aria-labelledby="music-tab" hidden>
  ...
</div>
```

## Theming

Tabs supports [Material theming](../theming/README.md) and can be customized in
terms of color, typography, and shape.

### Primary tab tokens

Token                                     | Default value
----------------------------------------- | -------------
`--md-primary-tab-container-color`        | `--md-sys-color-surface`
`--md-primary-tab-label-text-font`        | `--md-sys-typescale-title-small-font`
`--md-primary-tab-active-indicator-color` | `--md-sys-color-primary`
`--md-primary-tab-icon-color`             | `--md-sys-color-on-surface-variant`
`--md-primary-tab-container-shape`        | `--md-sys-shape-corner-none`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-primary-tab.scss)
    <!-- {.external} -->

### Primary tab example

<!-- no-catalog-start -->

![Image of tabs with a different theme applied](images/tabs/theming.webp "Tab theming example.")

<!-- no-catalog-end -->

```html
<style>
:root {
  /* System tokens */
  --md-sys-color-surface: #f7faf9;
  --md-sys-color-primary: #005353;

  /* Component tokens */
  --md-primary-tab-label-text-font: cursive, system-ui;
  --md-primary-tab-label-text-size: 0.8em;
}
</style>

<md-tabs>
  <md-primary-tab>Tab 1</md-primary-tab>
  <md-primary-tab>Tab 2</md-primary-tab>
  <md-primary-tab>Tab 3</md-primary-tab>
</md-tabs>
```

### Secondary tab tokens

Token                                       | Default value
------------------------------------------- | -------------
`--md-secondary-tab-container-color`        | `--md-sys-color-surface`
`--md-secondary-tab-label-text-font`        | `--md-sys-typescale-title-small-font`
`--md-secondary-tab-active-indicator-color` | `--md-sys-color-primary`
`--md-secondary-tab-icon-color`             | `--md-sys-color-on-surface-variant`
`--md-secondary-tab-container-shape`        | `--md-sys-shape-corner-none`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-secondary-tab.scss)
    <!-- {.external} -->

### Secondary tab example

<!-- no-catalog-start -->
<!-- Need to add image -->
<!-- no-catalog-end -->

```html
<style>
:root {
  /* System tokens */
  --md-sys-color-surface: #f7faf9;
  --md-sys-color-primary: #005353;

  /* Component tokens */
  --md-secondary-tab-label-text-font: cursive, system-ui;
  --md-secondary-tab-label-text-size: 0.8em;
}
</style>

<md-tabs>
  <md-secondary-tab>Tab 1</md-secondary-tab>
  <md-secondary-tab>Tab 2</md-secondary-tab>
  <md-secondary-tab>Tab 3</md-secondary-tab>
</md-tabs>
```

<!-- auto-generated API docs start -->

## API


### MdTabs <code>&lt;md-tabs&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `autoActivate` | `auto-activate` | `boolean` | `false` | Whether or not to automatically select a tab when it is focused. |
| `activeTabIndex` | `active-tab-index` | `number` | `undefined` |  |
| `tabs` |  | `Tab[]` | `undefined` | The tabs of this tab bar. |
| `activeTab` |  | `Tab` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `scrollToTab` | `tabToScrollTo` | `Promise<void>` | Scrolls the toolbar, if overflowing, to the active tab, or the provided tab. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `change` | `Event` | Yes | No | Fired when the selected tab changes. The target's `activeTabIndex` or `activeTab` provide information about the selection change. The change event is fired when a user interaction like a space/enter key or click cause a selection change. The tab selection based on these actions can be cancelled by calling preventDefault on the triggering `keydown` or `click` event. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdPrimaryTab <code>&lt;md-primary-tab&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `inlineIcon` | `inline-icon` | `boolean` | `false` | Whether or not the icon renders inline with label or stacked vertically. |
| `isTab` | `md-tab` | `boolean` | `true` | The attribute `md-tab` indicates that the element is a tab for the parent element, `<md-tabs>`. Make sure if you're implementing your own `md-tab` component that you have an `md-tab` attribute set. |
| `active` | `active` | `boolean` | `false` | Whether or not the tab is selected. |
| `hasIcon` | `has-icon` | `boolean` | `false` | In SSR, set this to true when an icon is present. |
| `iconOnly` | `icon-only` | `boolean` | `false` | In SSR, set this to true when there is no label and only an icon. |
| `selected` | `selected` | `boolean` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdSecondaryTab <code>&lt;md-secondary-tab&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `isTab` | `md-tab` | `boolean` | `true` | The attribute `md-tab` indicates that the element is a tab for the parent element, `<md-tabs>`. Make sure if you're implementing your own `md-tab` component that you have an `md-tab` attribute set. |
| `active` | `active` | `boolean` | `false` | Whether or not the tab is selected. |
| `hasIcon` | `has-icon` | `boolean` | `false` | In SSR, set this to true when an icon is present. |
| `iconOnly` | `icon-only` | `boolean` | `false` | In SSR, set this to true when there is no label and only an icon. |
| `selected` | `selected` | `boolean` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---

<!-- Source: text-field.md -->

# Text Field

<!-- catalog-only-start --><!-- ---
name: Text field
dirname: textfield
-----><!-- catalog-only-end -->

<catalog-component-header image-align="start">
<catalog-component-header-title slot="title">

# Text field

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2025-11-23' }
tag: 'docType:reference'
*-->

<!-- no-catalog-start -->

<!-- go/md-text-field -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/text-field/)**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Text fields](https://m3.material.io/components/text-fields)<!-- {.external} --> let
users enter text into a UI.

</catalog-component-header-title>

<img class="hero" src="images/textfield/hero.webp" alt="Several text fields in a form"
title="Text fields">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/text-fields) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/textfield)
    <!-- {.external} -->

## Types

1.  [Filled text field](#filled-text-field)
1.  [Outlined text field](#outlined-text-field)

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Usage

Text fields behave like
[`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)<!-- {.external} -->
elements. They provide a container with labels for user input.

<!-- no-catalog-start -->

![A filled textfield next to an outlined textfield. Both have a value of Value
prefilled](images/textfield/usage.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/textfield/usage.html" -->

```html
<md-filled-text-field label="Label" value="Value">
</md-filled-text-field>

<md-outlined-text-field label="Label" value="Value">
</md-outlined-text-field>
```

### Input type

A text field's `type` attribute changes how the text field works, such as
displaying a different keyboard or providing default validation.

-   [`type="text"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)<!-- {.external} -->
    (default)
-   [`type="email"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
    <!-- {.external} -->
-   [`type="number"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)
    <!-- {.external} -->
-   [`type="password"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password)
    <!-- {.external} -->
-   [`type="search"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search)
    <!-- {.external} -->
-   [`type="tel"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel)
    <!-- {.external} -->
-   [`type="url"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url)
    <!-- {.external} -->
-   [`type="textarea"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
    <!-- {.external} -->

<!-- no-catalog-start -->

![Two filled textfields next to each other. The first has a label of Username
and the outlined one has a label of Password](images/textfield/usage-type.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/textfield/usage-type.html" -->

```html
<md-filled-text-field label="Username" type="email">
</md-filled-text-field>

<md-filled-text-field label="Password" type="password">
</md-filled-text-field>
```

> Tip: use the
> [`inputmode`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)<!-- {.external} -->
> attribute for more control over the displayed keyboard.

### Labels

Text fields should label their value with a floating `label`, a `placeholder`,
or an external label. Labels help the user understand what value to input.

<!-- no-catalog-start -->

![Three outlined textfields next to each other. the first has a label of
Favorite food, the second one a placeholder of email@domain.com and there is a
label that says First name and an empty outlined textfield next to
it](images/textfield/usage-label.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/textfield/usage-label.html" -->

```html
<md-outlined-text-field label="Favorite food">
</md-outlined-text-field>

<md-outlined-text-field placeholder="email@domain.com">
</md-outlined-text-field>

<div>First name</div>
<md-outlined-text-field aria-label="First name">
</md-outlined-text-field>
```

> Note: text fields do not currently support `aria-labelledby`. External labels
> must provide an `aria-label`. See b/276484803.

### Textarea

Multi-line text fields behave like
[`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)<!-- {.external} -->
elements.

Textareas can specify the initial number of `rows`. Use CSS `width`, `height`,
and `resize` to control the resize behavior of a textarea.

<!-- no-catalog-start -->

![A filled textarea that is vertically larger and has a label that says Vertical
resize](images/textfield/usage-textarea.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/textfield/usage-textarea.html" -->

```html
<style>
  md-filled-text-field {
    resize: vertical;
  }
</style>
<md-filled-text-field
    type="textarea"
    label="Vertical resize"
    rows="3">
</md-filled-text-field>
```

### Icons

Text fields may display optional icons. Use icons to describe the input method
(such as a search icon), provide additional functionality (such as a clear
icon), or to express errors.

<!-- no-catalog-start -->

![Three outlined textfields next to each other the first has a search icon at
the start the label Search Messages, the second a label that says Password and
an eye icon toggle button at the end, and a red, visually errored outlined
textfield with the label Username with an exclamation icon at the end and helper
error text under the field that says Username not
available](images/textfield/usage-icons.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/textfield/usage-icons.html" -->

```html
<md-outlined-text-field placeholder="Search for messages">
  <md-icon slot="leading-icon">search</md-icon>
</md-outlined-text-field>

<md-outlined-text-field label="Password" type="password">
  <md-icon-button toggle slot="trailing-icon">
    <md-icon>visibility</md-icon>
    <md-icon slot="selected">visibility_off</md-icon>
  </md-icon-button>
</md-outlined-text-field>

<md-outlined-text-field
    label="Username"
    error
    error-text="Username not available">
  <md-icon slot="trailing-icon">error</md-icon>
</md-outlined-text-field>
```

### Prefix and suffix

Add `prefix-text` and `suffix-text` attributes to text fields to display
additional context for the value.

<!-- no-catalog-start -->

![An outlined textfield with a floating label that says Dollar amount, a prefix
dollar sign, the number zero as a value and a suffix of decimal zero zero at the
end of the field](images/textfield/usage-prefix.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/textfield/usage-prefix.html" -->

```html
<md-outlined-text-field
    label="Dollar amount"
    type="number"
    value="0"
    prefix-text="$"
    suffix-text=".00">
</md-outlined-text-field>
```

### Supporting text

Supporting text conveys additional information about the input field, such as
how it will be used. Supporting text can be replaced with error text when
[validating](#validation).

<!-- no-catalog-start -->

![Two filled fields next to each other. The first has a label that says comments
and supporting text under the field that says Provide comments for the issue.
The second field has a label of Name with an asterisk and supporting text under
the field that has an asterisk followed by the word
required](images/textfield/usage-supporting-text.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/textfield/usage-supporting-text.html" -->

```html
<md-filled-text-field
    label="Comments"
    supporting-text="Provide comments for the issue">
</md-filled-text-field>

<md-filled-text-field
    label="Name"
    required
    supporting-text="*required"
    error-text="Please fill out this field">
</md-filled-text-field>
```

### Character counter

Text fields with a `maxlength` attribute will display a character counter.

<!-- no-catalog-start -->

![An outlined textfield with a floating label that says Title and a filled value
that says Short and the text 5 / 10 under the field at the
end](images/textfield/usage-char-counter.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/textfield/usage-char-counter.html" -->

```html
<md-outlined-text-field label="Title" value="Short" maxlength="10">
</md-outlined-text-field>
```

### Validation

Text fields that validate can use
[constraint validation](#constraint-validation) or
[manual validation](#manual-validation).

#### Constraint validation

Text fields may validate using the browser's
[constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation)<!-- {.external} -->
API. Each [input type](#input-type) above links to an article that describes how
to validate it.

Text fields in a `<form>` will validate on submission, or by calling
`textField.reportValidity()`.

```html
<form>
  <md-filled-text-field
      name="name"
      label="Name"
      required>
  </md-filled-text-field>
  <md-filled-text-field
      name="email"
      label="Email"
      pattern="[\w\d-]+"
      suffix-text="@gmail.com">
  </md-filled-text-field>
</form>
```

Use the following properties and methods to check and report validation errors.

-   `validity` is the text field's current
    [`ValidityState`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)<!-- {.external} -->.
-   [`setCustomValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity)<!-- {.external} -->
    sets a custom error message.
-   [`checkValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity)<!-- {.external} -->
    dispatches an
    [`invalid` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event)<!-- {.external} -->.
-   [`reportValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity)<!-- {.external} -->
    dispatches an
    [`invalid` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event)<!-- {.external} -->
    and displays the error in the text field's supporting text.

#### Manual validation

Alternatively, text fields can manually control their error state and error
message. Use manual validation if the text fields are driven by application
state logic.

```html
<md-outlined-text-field
    label="Username"
    value="jdoe"
    error
    error-text="Username is not available">
</md-outlined-text-field>
```

> Tip: Prefer [constraint validation](#constraint-validation) when possible for
> more platform features, such as `<form>` validation and listening to `invalid`
> events.

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute to text fields with external labels or text fields whose labels need
to be more descriptive.

```html
<div>Username</div>
<md-filled-text-field aria-label="Username"></md-filled-text-field>

<md-filled-text-field label="First" aria-label="First name"></md-filled-text-field>
```

## Filled text field

<!-- go/md-filled-text-field -->

Filled and outlined text fields are functionally identical. See
[choosing a text field](https://m3.material.io/components/text-fields/guidelines#83956188-4d8f-4c11-9389-aaba30b10214)<!-- {.external} -->
for guidance on which one to use.

```html
<md-filled-text-field label="Filled" value="Value"></md-filled-text-field>
```

## Outlined text field

<!-- go/md-outlined-text-field -->

Filled and outlined text fields are functionally identical. See
[choosing a text field](https://m3.material.io/components/text-fields/guidelines#83956188-4d8f-4c11-9389-aaba30b10214)<!-- {.external} -->
for guidance on which one to use.

```html
<md-outlined-text-field label="Outlined" value="Value"></md-outlined-text-field>
```

## Theming

Text fields support [Material theming](../theming/README.md) and can be
customized in terms of color, typography, and shape.

### Filled text field tokens

Token                                                 | Default value
----------------------------------------------------- | -------------
`--md-filled-text-field-container-shape`              | `--md-sys-shape-corner-extra-small`
`--md-filled-text-field-container-color`              | `--md-sys-color-surface-container-highest`
`--md-filled-text-field-focus-active-indicator-color` | `--md-sys-color-primary`
`--md-filled-text-field-input-text-font`              | `--md-sys-typescale-body-large-font`
`--md-filled-text-field-label-text-font`              | `--md-sys-typescale-body-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-filled-text-field.scss)
    <!-- {.external} -->

### Filled text field example

<!-- no-catalog-start -->

![A filled text field with the label filled themed to a greenish color](images/textfield/theming-filled.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/textfield/theming-filled.html" -->

```html
<style>
:root {
  --md-filled-text-field-container-shape: 0px;
  --md-sys-typescale-body-large: 400 1rem system-ui;
  --md-sys-color-primary: #006a6a;
  --md-sys-color-surface-container-highest: #e0e3e2;
  --md-filled-text-field-label-text-color: #3f4948;
  --md-filled-text-field-input-text-color: #161d1d;
}
</style>

<md-filled-text-field label="Filled" value="Value">
</md-filled-text-field>
```

### Outlined text field tokens

Token                                          | Default value
---------------------------------------------- | -------------
`--md-outlined-text-field-container-shape`     | `--md-sys-shape-corner-extra-small`
`--md-outlined-text-field-focus-outline-color` | `--md-sys-color-primary`
`--md-outlined-text-field-input-text-font`     | `--md-sys-typescale-body-large-font`
`--md-outlined-text-field-label-text-font`     | `--md-sys-typescale-body-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-outlined-text-field.scss)
    <!-- {.external} -->

### Outlined text field example

<!-- no-catalog-start -->

![An outlined text field with the label outlined themed to a greenish color](images/textfield/theming-outlined.webp)

<!-- no-catalog-end -->
<!-- catalog-include "figures/textfield/theming-outlined.html" -->

```html
<style>
:root {
  --md-outlined-text-field-container-shape: 0px;
  --md-sys-typescale-body-large: 400 1rem system-ui;
  --md-sys-color-primary: #006a6a;
  --md-outlined-text-field-label-text-color: #3f4948;
  --md-outlined-text-field-input-text-color: #161d1d;
}
</style>

<md-outlined-text-field label="Outlined" value="Value"></md-outlined-text-field>
```

<!-- auto-generated API docs start -->

## API


### MdFilledTextField <code>&lt;md-filled-text-field&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `error` | `error` | `boolean` | `false` | Gets or sets whether or not the text field is in a visually invalid state.<br>This error state overrides the error state controlled by `reportValidity()`. |
| `errorText` | `error-text` | `string` | `''` | The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.<br>This error message overrides the error message displayed by `reportValidity()`. |
| `label` | `label` | `string` | `''` | The floating Material label of the textfield component. It informs the user about what information is requested for a text field. It is aligned with the input text, is always visible, and it floats when focused or when text is entered into the textfield. This label also sets accessibilty labels, but the accessible label is overriden by `aria-label`.<br>Learn more about floating labels from the Material Design guidelines: https://m3.material.io/components/text-fields/guidelines |
| `noAsterisk` | `no-asterisk` | `boolean` | `false` | Disables the asterisk on the floating label, when the text field is required. |
| `required` | `required` | `boolean` | `false` | Indicates that the user must specify a value for the input before the owning form can be submitted and will render an error state when `reportValidity()` is invoked when value is empty. Additionally the floating label will render an asterisk `"*"` when true.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required |
| `value` | `value` | `string` | `''` | The current value of the text field. It is always a string. |
| `prefixText` | `prefix-text` | `string` | `''` | An optional prefix to display before the input value. |
| `suffixText` | `suffix-text` | `string` | `''` | An optional suffix to display after the input value. |
| `hasLeadingIcon` | `has-leading-icon` | `boolean` | `false` | Whether or not the text field has a leading icon. Used for SSR. |
| `hasTrailingIcon` | `has-trailing-icon` | `boolean` | `false` | Whether or not the text field has a trailing icon. Used for SSR. |
| `supportingText` | `supporting-text` | `string` | `''` | Conveys additional information below the text field, such as how it should be used. |
| `textDirection` | `text-direction` | `string` | `''` | Override the input text CSS `direction`. Useful for RTL languages that use LTR notation for fractions. |
| `rows` | `rows` | `number` | `2` | The number of rows to display for a `type="textarea"` text field. Defaults to 2. |
| `cols` | `cols` | `number` | `20` | The number of cols to display for a `type="textarea"` text field. Defaults to 20. |
| `inputMode` | `inputmode` | `string` | `''` |  |
| `max` | `max` | `string` | `''` | Defines the greatest value in the range of permitted values.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max |
| `maxLength` | `maxlength` | `number` | `-1` | The maximum number of characters a user can enter into the text field. Set to -1 for none.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength |
| `min` | `min` | `string` | `''` | Defines the most negative value in the range of permitted values.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min |
| `minLength` | `minlength` | `number` | `-1` | The minimum number of characters a user can enter into the text field. Set to -1 for none.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength |
| `noSpinner` | `no-spinner` | `boolean` | `false` | When true, hide the spinner for `type="number"` text fields. |
| `pattern` | `pattern` | `string` | `''` | A regular expression that the text field's value must match to pass constraint validation.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern |
| `placeholder` | `placeholder` | `string` | `''` | Defines the text displayed in the textfield when it has no value. Provides a brief hint to the user as to the expected type of data that should be entered into the control. Unlike `label`, the placeholder is not visible and does not float when the textfield has a value.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder |
| `readOnly` | `readonly` | `boolean` | `false` | Indicates whether or not a user should be able to edit the text field's value.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly |
| `multiple` | `multiple` | `boolean` | `false` | Indicates that input accepts multiple email addresses.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple |
| `step` | `step` | `string` | `''` | Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step |
| `type` | `type` | `string` | `'text'` | The `<input>` type to use, defaults to "text". The type greatly changes how the text field behaves.<br>Text fields support a limited number of `<input>` types:<br>- text - textarea - email - number - password - search - tel - url<br>See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types for more details on each input type. |
| `autocomplete` | `autocomplete` | `string` | `''` | Describes what, if any, type of autocomplete functionality the input should provide.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete |
| `disabled` |  | `boolean` | `undefined` |  |
| `name` |  | `string` | `undefined` |  |
| `selectionDirection` |  | `string` | `undefined` |  |
| `selectionEnd` |  | `number` | `undefined` |  |
| `selectionStart` |  | `number` | `undefined` |  |
| `valueAsNumber` |  | `number` | `undefined` |  |
| `valueAsDate` |  | `Date` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `select` | _None_ | `void` | Selects all the text in the text field.<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select |
| `setRangeText` | `args` | `void` |  |
| `setSelectionRange` | `start`, `end`, `direction` | `void` | Sets the start and end positions of a selection in the text field.<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange |
| `showPicker` | _None_ | `void` | Shows the browser picker for an input element of type "date", "time", etc.<br>For a full list of supported types, see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker#browser_compatibility<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker |
| `stepDown` | `stepDecrement` | `void` | Decrements the value of a numeric type text field by `step` or `n` `step` number of times.<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown |
| `stepUp` | `stepIncrement` | `void` | Increments the value of a numeric type text field by `step` or `n` `step` number of times.<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp |
| `reset` | _None_ | `void` | Reset the text field to its default value. |
| `formResetCallback` | _None_ | `void` |  |
| `formStateRestoreCallback` | `state` | `void` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `select` | `Event` | Yes | No | The native `select` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event) |
| `change` | `Event` | Yes | No | The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) |
| `input` | `InputEvent` | Yes | Yes | The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdOutlinedTextField <code>&lt;md-outlined-text-field&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `error` | `error` | `boolean` | `false` | Gets or sets whether or not the text field is in a visually invalid state.<br>This error state overrides the error state controlled by `reportValidity()`. |
| `errorText` | `error-text` | `string` | `''` | The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.<br>This error message overrides the error message displayed by `reportValidity()`. |
| `label` | `label` | `string` | `''` | The floating Material label of the textfield component. It informs the user about what information is requested for a text field. It is aligned with the input text, is always visible, and it floats when focused or when text is entered into the textfield. This label also sets accessibilty labels, but the accessible label is overriden by `aria-label`.<br>Learn more about floating labels from the Material Design guidelines: https://m3.material.io/components/text-fields/guidelines |
| `noAsterisk` | `no-asterisk` | `boolean` | `false` | Disables the asterisk on the floating label, when the text field is required. |
| `required` | `required` | `boolean` | `false` | Indicates that the user must specify a value for the input before the owning form can be submitted and will render an error state when `reportValidity()` is invoked when value is empty. Additionally the floating label will render an asterisk `"*"` when true.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required |
| `value` | `value` | `string` | `''` | The current value of the text field. It is always a string. |
| `prefixText` | `prefix-text` | `string` | `''` | An optional prefix to display before the input value. |
| `suffixText` | `suffix-text` | `string` | `''` | An optional suffix to display after the input value. |
| `hasLeadingIcon` | `has-leading-icon` | `boolean` | `false` | Whether or not the text field has a leading icon. Used for SSR. |
| `hasTrailingIcon` | `has-trailing-icon` | `boolean` | `false` | Whether or not the text field has a trailing icon. Used for SSR. |
| `supportingText` | `supporting-text` | `string` | `''` | Conveys additional information below the text field, such as how it should be used. |
| `textDirection` | `text-direction` | `string` | `''` | Override the input text CSS `direction`. Useful for RTL languages that use LTR notation for fractions. |
| `rows` | `rows` | `number` | `2` | The number of rows to display for a `type="textarea"` text field. Defaults to 2. |
| `cols` | `cols` | `number` | `20` | The number of cols to display for a `type="textarea"` text field. Defaults to 20. |
| `inputMode` | `inputmode` | `string` | `''` |  |
| `max` | `max` | `string` | `''` | Defines the greatest value in the range of permitted values.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max |
| `maxLength` | `maxlength` | `number` | `-1` | The maximum number of characters a user can enter into the text field. Set to -1 for none.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength |
| `min` | `min` | `string` | `''` | Defines the most negative value in the range of permitted values.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min |
| `minLength` | `minlength` | `number` | `-1` | The minimum number of characters a user can enter into the text field. Set to -1 for none.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength |
| `noSpinner` | `no-spinner` | `boolean` | `false` | When true, hide the spinner for `type="number"` text fields. |
| `pattern` | `pattern` | `string` | `''` | A regular expression that the text field's value must match to pass constraint validation.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern |
| `placeholder` | `placeholder` | `string` | `''` | Defines the text displayed in the textfield when it has no value. Provides a brief hint to the user as to the expected type of data that should be entered into the control. Unlike `label`, the placeholder is not visible and does not float when the textfield has a value.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder |
| `readOnly` | `readonly` | `boolean` | `false` | Indicates whether or not a user should be able to edit the text field's value.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly |
| `multiple` | `multiple` | `boolean` | `false` | Indicates that input accepts multiple email addresses.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple |
| `step` | `step` | `string` | `''` | Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step |
| `type` | `type` | `string` | `'text'` | The `<input>` type to use, defaults to "text". The type greatly changes how the text field behaves.<br>Text fields support a limited number of `<input>` types:<br>- text - textarea - email - number - password - search - tel - url<br>See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types for more details on each input type. |
| `autocomplete` | `autocomplete` | `string` | `''` | Describes what, if any, type of autocomplete functionality the input should provide.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete |
| `disabled` |  | `boolean` | `undefined` |  |
| `name` |  | `string` | `undefined` |  |
| `selectionDirection` |  | `string` | `undefined` |  |
| `selectionEnd` |  | `number` | `undefined` |  |
| `selectionStart` |  | `number` | `undefined` |  |
| `valueAsNumber` |  | `number` | `undefined` |  |
| `valueAsDate` |  | `Date` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `select` | _None_ | `void` | Selects all the text in the text field.<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select |
| `setRangeText` | `args` | `void` |  |
| `setSelectionRange` | `start`, `end`, `direction` | `void` | Sets the start and end positions of a selection in the text field.<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange |
| `showPicker` | _None_ | `void` | Shows the browser picker for an input element of type "date", "time", etc.<br>For a full list of supported types, see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker#browser_compatibility<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker |
| `stepDown` | `stepDecrement` | `void` | Decrements the value of a numeric type text field by `step` or `n` `step` number of times.<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown |
| `stepUp` | `stepIncrement` | `void` | Increments the value of a numeric type text field by `step` or `n` `step` number of times.<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp |
| `reset` | _None_ | `void` | Reset the text field to its default value. |
| `formResetCallback` | _None_ | `void` |  |
| `formStateRestoreCallback` | `state` | `void` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `select` | `Event` | Yes | No | The native `select` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event) |
| `change` | `Event` | Yes | No | The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) |
| `input` | `InputEvent` | Yes | Yes | The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->


---
