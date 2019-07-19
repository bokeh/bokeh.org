# Bokeh Official Website

This repository contains the source code for [bokeh.org](https://bokeh.org), the official [bokeh](https://github.com/bokeh/bokeh) website.

<img src="img/website.png">

# Table of Contents

* [Developing with Docker](#developing-with-docker)
* [Developing](#developing)

## Developing with Docker

#### Requirements:
 - [Docker](https://docs.docker.com/v17.12/install/)

Verify the above requirements by running `docker version` from the command line.

1. Clone the project repository
2. Remove any Gemfile[.lock] from the project root directory
3. Run `make serve` to build and serve the website from within a [`jekyll`](https://hub.docker.com/r/jekyll/jekyll/) container.
4. Natigate to `http://localhost:4000`

```
git clone https://github.com/bokeh/bokeh.org.git
cd bokeh.org
rm -f Gemfile Gemfile.lock
make serve
```

While running Jekyll will automatically rebuild the site and refresh the browser when changes are made to the source code.

## Developing

Based on instructions for [setting up GitHub Pages locally with Jekyll](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll).

#### Requirements:
 - [Ruby](https://www.ruby-lang.org/en/documentation/installation/) >=2.1
 - [Bundler](https://bundler.io/)

Verify the above requirements by running `ruby --version && bundle --version` from the command line.

1. Clone the project repository
2. Add a [`github-pages`](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll#step-2-install-jekyll-using-bundler) Gemfile to the project root directory
3. Install the bundle dependencies from the project root direcotry
4. Serve the website using Jekyll
5. Natigate to `http://localhost:4000`

```
git clone https://github.com/bokeh/bokeh.org.git
cd bokeh.org
echo -e "source 'https://rubygems.org'\ngem 'github-pages', group: :jekyll_plugins" > Gemfile
bundle install
bundle exec jekyll serve
```

While running Jekyll will automatically rebuild the site and refresh the browser when changes are made to the source code.
