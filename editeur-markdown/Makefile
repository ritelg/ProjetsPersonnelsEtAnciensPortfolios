.PHONY: build help

build: ## Build l'application et envoie les fichiers
	npm run build
	sed -i "s/\/static/.\/static/g" ./build/index.html
	find ./build/static/js -name "main*.js" -type f -exec sed -i "s/t.p+\"static/\".\/static/g" {} \;
	find ./build/static/css -name "main*.css" -type f -exec sed -i "s/\/static\/media/..\/media/g" {} \;

	## rsync -av --delete ./build/* gaetan-ritel@149.91.82.111:/home/gaetan-ritel/gaetan-ritel.fr/www/ -e 'ssh -p 6572'
	rsync -av --delete --exclude=.git ./build/ ../editeur-markdown-build/
	rsync -av ./README_BUILD.md ../editeur-markdown-build/README.md
help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
