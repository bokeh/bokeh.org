# Bokeh official website

This repository contains the source for [bokeh.org](https://bokeh.org). The Bokeh library itself lives in [bokeh/bokeh](https://github.com/bokeh/bokeh).

The site is built with Jekyll, using plain HTML, CSS, and JavaScript. The home and branding pages share the `modern` layout.

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
- `_layouts/modern.html` — shared document structure for the home and branding pages
- `_includes/modern-*.html` — shared head, header, and footer
- `css/modern.css` — home and branding page styles
- `js/modern.js` — installer tabs and copy-button behavior
- `img/` — screenshots, animations, and Bokeh brand assets

## Deployment

GitHub Pages publishes from the repository root on the `main` branch using its built-in Jekyll build. Merging a pull request into `main` triggers a Pages rebuild automatically. No workflow or repository-setting change is required.

Keep these deployment details intact:

- Leave `CNAME` in the repository root so the custom `bokeh.org` domain is retained.
- Keep pages and assets compatible with the GitHub Pages Jekyll environment. The site does not require Node or a separate asset build.
- Check the repository's **Settings → Pages** build result after merge and verify the home page and `/branding/` on the custom domain.

The footer's **Citation** link points to `https://github.com/bokeh/bokeh/wiki/Citing-Bokeh`. Ensure that wiki page exists before publishing; otherwise, GitHub redirects the URL to the wiki home.

To publish with GitHub Actions instead, add a Pages workflow that runs `jekyll build`, uploads `_site/`, and deploys it, then change **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
