# webdev

[https://brianrunk.me](https://brianrunk.me)

## Introduction

This repository contains the source for a small-business web development site. It is a Jekyll-based static site that uses the `github-pages` gem for compatibility with GitHub Pages, a locally checked-in Bootstrap stylesheet for the base layout system, and a custom Sass layer for the site's branding and components.

The site is intentionally small and content-driven. The main pages are:

- `index.md` for the homepage hero and primary sales message
- `about.md` for background, services, pricing, and FAQ content
- `404.md` for the custom not-found page

Most presentation logic lives in shared layouts and includes, with reusable content such as navigation, highlights, and social links stored in `_data`.

## Build And Serve Locally

### Prerequisites

- Ruby `3.2.3`
- Bundler `2.4.19`
- A working `bundle install` in this directory

### Install dependencies

```bash
bundle install
```

### Build the site

```bash
bundle exec jekyll build
```

This writes the generated site into `_site/`.

### Serve the site locally

The project config defines a local Jekyll port and LiveReload port in `_config.yml`.

```bash
bundle exec jekyll serve --livereload --port 4010 --livereload-port 35739
```

Then open:

- `http://127.0.0.1:4010/`

If you do not want LiveReload, this is sufficient:

```bash
bundle exec jekyll serve --port 4010
```

## Implementation Caveats

### GitHub Pages pinning

This project depends on:

```ruby
gem "github-pages", group: :jekyll_plugins
```

The Jekyll version is pinned by the `github-pages` gem, not by a standalone `jekyll` declaration.
In the current lockfile, GitHub Pages resolves Jekyll `3.10.0`.
This is important because GitHub Pages-compatible projects often lag behind newer standalone Jekyll releases.

### Ruby and Bundler versions

Use Ruby `3.2.3` and Bundler `2.4.19` for local development.

The repo includes a `.ruby-version` file pinned to Ruby `3.2.3`.

### `_sass/` partials are not standalone files

The Sass partials under `_sass/` are compiled only because they are imported by `assets/css/main.scss`.
If a new partial is added and not imported, it will not be included in the generated CSS.

Current Sass flow:

- `assets/css/main.scss` is the compilation entry point
- `_sass/_variables.scss` defines palette, fonts, and breakpoints
- `_sass/components/` contains reusable component styles
- `_sass/pages/` contains page-specific styles

### Bootstrap is checked in as prebuilt CSS

Bootstrap is loaded from `assets/css/bootstrap.min.css`.
It is not managed through npm.
Tthe custom Sass i snot recompiling Bootstrap from source.

- Bootstrap variables are not being overridden at build time
- Site-specific styling is layered on top through `main.scss`

### `_site/` is generated output

`_site/` contains the built static site. It is generated content rather than source content.
In this repository, `_site/` is tracked in git and is part of the `gh-pages` deployment workflow.

### Shared layout behavior

The main page template is `_layouts/content.html`. It contains shared behavior such as:

- the hero split layout
- the CTA include
- the promo ticker
- optional highlight cards sourced from `_data/highlights.yml`

Changes there affect both the homepage and content pages using `layout: content`.

The current promo copy is sourced from `_data/promo.yml`.
That keeps routine offer updates out of the layout, while the layout still controls where and how the ticker renders.

## Content Editing

- Page copy: `index.md` and `about.md`
- Navigation, highlights, socials, and promo data: `_data/`
- Layout behavior: `_layouts/content.html`
- Styling: `_sass/` and `assets/css/main.scss`

## Directory Structure

```text
webdev/
├── 404.md
├── Gemfile
├── Gemfile.lock
├── README.md
├── STATUS.md
├── _config.yml
├── _data/
│   ├── highlights.yml
│   ├── nav.yml
│   ├── promo.yml
│   └── socials.yml
├── _includes/
│   ├── cta.html
│   ├── footer.html
│   ├── hamburger.html
│   ├── head.html
│   ├── header.html
│   ├── nav.html
│   ├── scripts.html
│   └── social_link_list.html
├── _layouts/
│   ├── 404.html
│   ├── content.html
│   ├── home.html
│   ├── page.html
│   └── wrapper.html
├── _sass/
│   ├── _functions.scss
│   ├── _mixins.scss
│   ├── _variables.scss
│   ├── components/
│   └── pages/
├── _site/
├── about.md
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── main.scss
│   ├── images/
│   └── js/
│       └── scripts.js
└── index.md
```

## Resources

- [Jekyll homepage](https://jekyllrb.com/)
- [Bootstrap homepage](https://getbootstrap.com/)

### Updating `github-pages`

Because this project uses `github-pages`, updates should be done through Bundler rather than by adding a separate `jekyll` gem.

1. Update the dependency:

```bash
bundle update github-pages
```

2. Review the resulting `Gemfile.lock` changes, especially the resolved `jekyll` version and related gems.
3. Rebuild locally:

```bash
bundle exec jekyll build
bundle exec jekyll serve --livereload --port 4010 --livereload-port 35739
```

4. Check for breakage in:

- layouts and includes
- Liquid syntax compatibility
- Sass compilation
- generated HTML in `_site/`

If GitHub Pages compatibility is critical, avoid assuming that examples for the latest standalone Jekyll release will work unchanged here.

### Deployment notes

This site is deployed manually to the `gh-pages` branch.

The current deployment workflow is:

```bash
git switch gh-pages
git pull origin main
git push
```

Notes:
- this repo does not use a checked-in CI deployment workflow
- `README.md` is intentionally not excluded from Jekyll so GitHub can use it on the repo homepage
- `README.md` will also be processed by Jekyll unless excluded, because the GitHub Pages bundle includes `jekyll-readme-index`
- `STATUS.md` is excluded from Jekyll in `_config.yml`

## Potential Enhancements
- promo data could support date ranges, links, or per-page overrides

