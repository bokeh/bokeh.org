JEKYLL_IMAGE ?= jekyll/jekyll:pages

.PHONY: build serve

build:
	docker run --rm -v "$(CURDIR):/srv/jekyll" $(JEKYLL_IMAGE) jekyll build

serve:
	@echo "Launching dockerized site at http://localhost:4000"
	docker run --rm -v "$(CURDIR):/srv/jekyll" -p 4000:4000 $(JEKYLL_IMAGE) jekyll serve --host 0.0.0.0 --livereload
