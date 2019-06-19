serve:
	@echo "$(shell tput bold)Launching dockerized site at http://localhost:4000$(shell tput sgr0)"
	docker run --rm -v $(shell pwd):/srv/jekyll -it -p 4000:4000 jekyll/jekyll:pages jekyll serve --incremental
