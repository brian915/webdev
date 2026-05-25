# Codex Task: Improve `styleguide.html` Visual Formatting To Match Branding Guide Quality

## Goal

Update `styleguide.html` so it reads more like a polished editorial branding guide and less like a boxed notes page.

Focus on visual formatting and presentation quality:
- outer page layout
- section headers
- color swatches
- color usage table
- typography specimen layout
- contrast blocks
- interaction/component examples
- icon-use presentation

Do not rethink the brand decisions. Do not rewrite content unless explicitly stated below. Do not remove temporary editing notes unless instructed separately.

---

## 1. Add Phosphor Icons Script

In the `<head>` of `styleguide.html`, after the Google Fonts link, add:

```html
<script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
```

---

## 2. Replace Outer Layout CSS

Find this block:

```css
.container {
    margin: 0 auto;
    max-width: 1180px;
    padding: 60px 40px;
}
```

Replace with:

```css
.container {
    margin: 0 auto;
    max-width: 1360px;
    padding: 96px 48px 120px;
}

.content-standard {
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
}

.content-wide {
    margin-left: auto;
    margin-right: auto;
    max-width: 1240px;
}
```

---

## 3. Replace Header CSS

Find this block:

```css
.header {
    border-bottom: 3px solid var(--accent);
    margin-bottom: 60px;
    padding-bottom: 38px;
}
```

Replace with:

```css
.header {
    border-bottom: 1px solid var(--border);
    margin: 0 auto 84px;
    max-width: 1080px;
    padding-bottom: 42px;
}
```

---

## 4. Replace Section Layout CSS

Find this block:

```css
.section {
    margin-bottom: 76px;
}
```

Replace with:

```css
.section {
    margin: 0 auto 96px;
    max-width: 1080px;
}

.section-wide {
    max-width: 1240px;
}
```

---

## 5. Replace Section Header CSS

Find this block:

```css
.section-title {
    border-bottom: 2px solid var(--border);
    color: var(--text);
    font-family: "Playfair Display", Georgia, serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 30px;
    padding-bottom: 10px;
}
```

Replace with:

```css
.section-title {
    border-left: 4px solid var(--accent);
    color: var(--text);
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(36px, 4vw, 48px);
    font-weight: 700;
    line-height: 1.12;
    margin-bottom: 34px;
    padding-left: 18px;
}
```

---

## 6. Update Wide Sections

Change the opening `<section>` tag for these sections only:

```html
<h2 class="section-title">1. Color Roles &amp; Palette</h2>
```

```html
<h2 class="section-title">2.2 Contrast Combinations &amp; Legibility</h2>
```

```html
<h2 class="section-title">3. Interaction &amp; Components</h2>
```

From:

```html
<section class="section">
```

To:

```html
<section class="section section-wide">
```

Leave text-heavy sections as:

```html
<section class="section">
```

---

## 7. Replace Color Swatch CSS

Find this block:

```css
.color-swatch {
    border-radius: 12px;
    box-shadow: 0 8px 22px rgba(62, 63, 58, 0.12);
}
```

Replace with:

```css
.color-swatch {
    border-radius: 14px;
    box-shadow: 0 12px 30px rgba(62, 63, 58, 0.14);
}
```

Find this block:

```css
.color-block {
    align-items: center;
    display: flex;
    height: 170px;
    justify-content: center;
    width: 100%;
}
```

Replace with:

```css
.color-block {
    align-items: center;
    display: flex;
    height: 128px;
    justify-content: center;
    width: 100%;
}
```

Find this block:

```css
.color-block-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.025em;
    text-transform: uppercase;
}
```

Replace with:

```css
.color-block-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}
```

---

## 8. Improve Color Usage Table CSS

Replace the existing `.role-table th` block with:

```css
.role-table th {
    background: var(--base-subtle-2);
    color: var(--text);
    font-size: 13px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
}
```

Replace the existing `.role-swatch` block with:

```css
.role-swatch {
    border: 1px solid var(--border);
    border-radius: 6px;
    display: inline-block;
    height: 34px;
    margin-right: 12px;
    vertical-align: middle;
    width: 56px;
}
```

---

## 9. Add Dedicated Contrast Block CSS

Add this CSS after the `.component-card` / `.guideline-box` styles:

```css
.contrast-stack {
    display: grid;
    gap: 24px;
    margin-top: 32px;
}

.contrast-block {
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 34px;
}

.contrast-block .label-text {
    display: block;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    margin-bottom: 12px;
    text-transform: uppercase;
}

.contrast-block strong {
    display: block;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 700;
    line-height: 1.12;
    margin-bottom: 10px;
}

.contrast-block p {
    max-width: 720px;
}
```

---

## 10. Replace Contrast Section Markup

Replace the current full `2.2 Contrast Combinations & Legibility` section with:

```html
<section class="section section-wide">
    <h2 class="section-title">2.2 Contrast Combinations &amp; Legibility</h2>
    <p class="note">Approved color pairings to review for readability, hierarchy, and visual balance across website, document, survey, and promotional uses.</p>

    <div class="contrast-stack">
        <article class="contrast-block" style="background:#ffffff; color:#3e3f3a;">
            <span class="label-text">Background / Text Primary</span>
            <strong>Main content on white</strong>
            <p>Used for primary page content, body copy, headings, and clean document surfaces.</p>
        </article>

        <article class="contrast-block" style="background:#f8f5f0; color:#3e3f3a;">
            <span class="label-text">Subtle Base 1 / Text Primary</span>
            <strong>Warm surface with dark text</strong>
            <p>Used for soft content bands, call boxes, quiet panels, and page variation.</p>
        </article>

        <article class="contrast-block" style="background:#E0DDEC; color:#3e3f3a;">
            <span class="label-text">Subtle Base 2 / Text Primary</span>
            <strong>Soft secondary surface with dark text</strong>
            <p>Used to break up blue-heavy layouts, secondary cards, table headers, and promotional assets.</p>
        </article>

        <article class="contrast-block" style="background:#325d88; color:#ffffff;">
            <span class="label-text">Accent Main / Background</span>
            <strong>Primary accent surface</strong>
            <p>Used for primary buttons, emphasized panels, header accents, and strong brand moments.</p>
        </article>

        <article class="contrast-block" style="background:#284a6d; color:#ffffff;">
            <span class="label-text">Accent Dark / Background</span>
            <strong>Darker accent surface</strong>
            <p>Used for stronger contrast, sub-footer treatments, and hover states for primary interactive elements.</p>
        </article>

        <article class="contrast-block" style="background:#4E008E; color:#ffffff;">
            <span class="label-text">Secondary Accent / Background</span>
            <strong>Bold secondary emphasis</strong>
            <p>Used for non-blue emphasis in promotional assets, document highlights, callouts, and visual review elements.</p>
        </article>

        <article class="contrast-block" style="background:#93c54b; color:#3e3f3a;">
            <span class="label-text">Light Accent / Text Primary</span>
            <strong>Light supporting accent</strong>
            <p>Used for small highlights, icon accents, checklist marks, and restrained non-blue emphasis.</p>
        </article>

        <article class="contrast-block" style="background:#dfd7ca; color:#3e3f3a;">
            <span class="label-text">Divider / Text Primary</span>
            <strong>Low-emphasis separation</strong>
            <p>Used for rules, borders, table lines, quiet separators, and secondary structure.</p>
        </article>
    </div>
</section>
```

---

## 11. Improve Typography Specimen CSS

Find this block:

```css
.typeface-specimen .alphabet-sample {
    font-size: clamp(42px, 6vw, 64px);
    font-weight: 700;
    line-height: 0.92;
    margin-bottom: 16px;
}
```

Replace with:

```css
.typeface-specimen .alphabet-sample {
    font-size: clamp(52px, 7vw, 76px);
    font-weight: 700;
    line-height: 0.88;
    margin-bottom: 18px;
}
```

Find this block:

```css
.typeface-specimen .numeral-sample {
    color: var(--text);
    font-size: clamp(28px, 4vw, 46px);
    font-weight: 400;
    line-height: 1;
    opacity: 0.28;
}
```

Replace with:

```css
.typeface-specimen .numeral-sample {
    color: var(--text);
    font-size: clamp(34px, 4.5vw, 54px);
    font-weight: 700;
    line-height: 1;
    opacity: 0.26;
}
```

Find this block:

```css
.typeface-row {
    align-items: flex-start;
    border-bottom: 1px solid var(--border);
    display: grid;
    gap: 42px;
    grid-template-columns: minmax(180px, 1fr) minmax(0, 2fr);
    margin-bottom: 56px;
    padding-bottom: 44px;
}
```

Replace with:

```css
.typeface-row {
    align-items: flex-start;
    border-bottom: 1px solid var(--border);
    display: grid;
    gap: 56px;
    grid-template-columns: minmax(220px, 1fr) minmax(0, 2.4fr);
    margin-bottom: 72px;
    padding-bottom: 56px;
}
```

---

## 12. Add Component Context CSS

Add this CSS near the component styles:

```css
.component-context {
    border: 1px solid var(--border);
    border-radius: 14px;
    margin-bottom: 30px;
    padding: 30px;
}

.component-context-label {
    display: block;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    margin-bottom: 18px;
    text-transform: uppercase;
}

.component-context.dark {
    background: var(--accent-dark);
    color: var(--background);
}

.component-context.dark .component-context-label,
.component-context.dark p {
    color: var(--background);
}

.component-context.secondary {
    background: var(--base-subtle-2);
}
```

---

## 13. Replace Interaction & Components Section Markup

Replace the current full `3. Interaction & Components` section with:

```html
<section class="section section-wide">
    <h2 class="section-title">3. Interaction &amp; Components</h2>
    <p class="note">Core reusable interface and content blocks used by BrianRunk.me and related brand assets.</p>

    <h3 class="subsection-title">Button Contexts</h3>

    <div class="component-context">
        <span class="component-context-label">Light Surface</span>
        <div class="button-row">
            <a class="button" href="#">Request A Quote</a>
            <a class="button button-hover-demo" href="#">Hover State</a>
        </div>
    </div>

    <div class="component-context dark">
        <span class="component-context-label">Dark Accent Surface</span>
        <div class="button-row">
            <a class="button" href="#">Request A Quote</a>
        </div>
    </div>

    <div class="component-context secondary">
        <span class="component-context-label">Secondary Subtle Surface</span>
        <div class="button-row">
            <a class="button" href="#">Request A Quote</a>
        </div>
    </div>

    <h3 class="subsection-title">Core Components</h3>

    <div class="sample-grid">
        <article class="component-card">
            <h3>Primary Button</h3>
            <p>Small uppercase action button using Accent Main, white text, and a 4px radius.</p>
            <div class="button-row">
                <a class="button" href="#">Request A Quote</a>
            </div>
        </article>

        <article class="component-card">
            <h3>Button With Icon</h3>
            <p>Use Phosphor icons when a small icon helps clarify the action.</p>
            <div class="button-row">
                <a class="button" href="#">
                    <i class="ph ph-arrow-right" aria-hidden="true"></i>
                    Request A Quote
                </a>
            </div>
        </article>

        <article class="component-card">
            <h3>Call Box</h3>
            <div class="call-box">
                <p><strong>Request A Quote</strong></p>
                <p>Email: brian@brianrunk.net</p>
            </div>
        </article>

        <article class="component-card">
            <h3>Feature Card</h3>
            <div class="feature-card">
                <img src="{{ '/assets/images/features/time_flies.svg' | relative_url }}" alt="">
                <p><strong>Fast Service</strong></p>
            </div>
        </article>

        <article class="component-card surface-accent">
            <h3>Accent Surface</h3>
            <p>Used for footer, full-screen mobile menu treatments, and strong accent sections.</p>
        </article>

        <article class="component-card surface-alt">
            <h3>Subtle Surface</h3>
            <p>Used for warm contrast bands, call boxes, and promotion strips.</p>
        </article>

        <article class="component-card" style="background:#E0DDEC;">
            <h3>Secondary Subtle Surface</h3>
            <p>Used for secondary cards, table headers, and visual variation in documents or promotional assets.</p>
        </article>

        <article class="component-card" style="border-top:4px solid #4E008E;">
            <h3>Secondary Accent Callout</h3>
            <p>Used when a section needs stronger non-blue emphasis without changing the primary brand direction.</p>
        </article>
    </div>

    <h3 class="subsection-title">Icon Use In Components</h3>

    <div class="guideline-box">
        <p>Use Phosphor icons for interface icons, navigation icons, button icons, and small supporting icons. Icons should clarify meaning, support labels, or reinforce navigation.</p>

        <ul>
            <li>Use icons with visible text labels by default.</li>
            <li>Let icons inherit the surrounding text color unless a deliberate accent or status treatment is needed.</li>
            <li>Use <code>aria-hidden="true"</code> when the visible label already provides the meaning.</li>
            <li>Use an accessible label when an icon appears without visible text.</li>
        </ul>
    </div>

    <h3 class="subsection-title">Share / Social Preview Image</h3>

    <div class="guideline-box">
        <p>Use <code>assets/images/social/social_preview.png</code> as the primary share and social preview image for Brian Runk Web Development.</p>

        <p>The social preview image should be 1200 x 630 px and exported as a PNG. It should use the professional headshot, the BrianRunk.me wordmark/logo, and the tagline in a clean layout with generous safe margins. The image should feel calm, practical, trustworthy, and consistent with the website.</p>

        <ul>
            <li>Canvas size: 1200 x 630 px.</li>
            <li>Format: PNG.</li>
            <li>Content: professional headshot, BrianRunk.me wordmark/logo, and tagline.</li>
            <li>Safe margin: keep important content at least 60 px from the canvas edges.</li>
            <li>Background: white or warm off-white.</li>
            <li>Tagline font: Helvetica or Arial, regular weight.</li>
            <li>Tagline color: brand blue or charcoal.</li>
        </ul>
    </div>
</section>
```

---

## 14. Add Icon Library Subsection

In `4. Icon Use`, insert this immediately after the `Icon System Note` block and before `Feature Icon Direction`:

```html
<h3 class="subsection-title">Icon Library</h3>

<div class="guideline-box">
    <p>Use <strong>Phosphor Icons</strong> as the standard icon library for BrianRunk.me interface icons, navigation icons, button icons, and small supporting icons.</p>

    <p>The current large feature icons on the site were selected from The Noun Project and manually modified in Adobe Illustrator. They function more like simple spot illustrations than traditional UI icons. Phosphor should be used for future traditional icon needs because it aligns well enough with that simple, friendly, practical visual direction while giving the site a consistent reusable icon system.</p>

    <div class="button-row" aria-label="Phosphor icon examples">
        <span><i class="ph ph-arrow-right" aria-hidden="true"></i> Action</span>
        <span><i class="ph ph-envelope-simple" aria-hidden="true"></i> Contact</span>
        <span><i class="ph ph-device-mobile" aria-hidden="true"></i> Mobile</span>
        <span><i class="ph ph-clock" aria-hidden="true"></i> Fast</span>
    </div>

    <p>Use icons to clarify meaning, support labels, or reinforce navigation. Keep them simple, readable, and restrained. Icons should usually inherit the surrounding text color. Use accent colors only when the icon is part of an interactive state, status message, or deliberate visual emphasis.</p>
</div>
```

---

## 15. Fix Known Current Markup Errors

Make these small cleanup edits:

### Remove extra empty table row

Find:

```html
<tr>
<tr>
    <td>Light Accent</td>
```

Replace with:

```html
<tr>
    <td>Light Accent</td>
```

### Fix broken apostrophe entity

Find:

```html
site&39;practical
```

Replace with:

```html
site&#39;s practical
```

### Update Divider / Secondary Text color

Find every current `Divider / Secondary Text` swatch or table value using:

```html
#6f716b
```

Replace with:

```html
#dfd7ca
```

Only do this for Divider / Secondary Text. Do not globally replace unrelated uses unless confirmed.

---

## 16. Leave These Alone For Now

Do not change:
- actual brand content decisions
- temporary editing comments unless they break rendering
- section class naming
- Jekyll front matter
- conversion to shared SCSS architecture
- one-pager or survey files

This pass is only for visual formatting parity and immediate markup cleanup in `styleguide.html`.
