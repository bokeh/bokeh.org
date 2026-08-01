# Bokeh official website

This repository contains the source for [bokeh.org](https://bokeh.org). The Bokeh library itself lives in [bokeh/bokeh](https://github.com/bokeh/bokeh).

The site is built with Jekyll, using plain HTML, CSS, and JavaScript. The redesigned home and branding pages use the `modern` layout; the remaining project pages continue to use the existing layouts.

## Build and view the site locally

### Requirements

- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/get-docker/), with the Docker daemon running

Clone the repository and start the local Jekyll server:

```console
git clone https://github.com/bokeh/bokeh.org.git
cd bokeh.org
make serve
```

Open [http://localhost:4000](http://localhost:4000). Jekyll watches the source files and rebuilds the site as they change. Stop the server with `Ctrl-C`.

To perform a production-style build without starting a server, run:

```console
make build
```

The generated site is written to `_site/`, which is ignored by Git.

Both commands use the `jekyll/jekyll:pages` Docker image so the local toolchain stays close to GitHub Pages. Set `JEKYLL_IMAGE` if a specific compatible image tag is needed:

```console
make build JEKYLL_IMAGE=jekyll/jekyll:pages
```

## Site structure

- `index.html` — front page content
- `branding/index.html` — brand resources page
- `_layouts/modern.html` — shared document structure for redesigned pages
- `_includes/modern-*.html` — shared head, header, and footer
- `css/modern.css` — redesigned pages' styles
- `js/modern.js` — installer tabs and copy-button behavior
- `img/modern/` — screenshots, animations, and Bokeh brand assets

## Deployment after merge

The repository's GitHub Pages configuration currently publishes from the root of the `main` branch using the legacy Jekyll build. Merging a pull request into `main` triggers the Pages rebuild automatically, so this redesign does **not** require a workflow or repository-setting change.

Keep these deployment details intact:

- Leave `CNAME` in the repository root so the custom `bokeh.org` domain is retained.
- Keep pages and assets compatible with the GitHub Pages Jekyll environment. This implementation does not require Node or a separate asset build.
- Check the repository's **Settings → Pages** build result after merge and verify the home page and `/branding/` on the custom domain.

The redesigned footer points its **Citation** link to `https://github.com/bokeh/bokeh/wiki/Citing-Bokeh`. Create that wiki page (or update the link to its final location) before the production release; until then, GitHub redirects the URL to the wiki home. This is a content follow-up, not a Pages deployment change.

If the project later moves from the legacy branch build to GitHub Actions, add a Pages workflow that runs `jekyll build`, uploads `_site/`, and deploys it, then change **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. That migration is optional and is not needed for this branch.
