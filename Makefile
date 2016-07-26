.DEFAULT_GOAL := help
.PHONY: help

CHDIR_SHELL := $(SHELL)
define chdir
   $(eval _D=$(firstword $(1) $(@D)))
   $(info $(MAKE): cd $(_D)) $(eval SHELL = cd $(_D); $(CHDIR_SHELL))
endef

install-api:
	$(call chdir,api)
	@echo "Installing Node dependencies for Boldr API module"
	@npm install

install-cms:
	$(call chdir,cms)
	@echo "Installing Node dependencies for Boldr CMS module"
	@npm install

install: install-api install-cms

clean-cms:
	@rm -rf ./cms/boldr-cms

build-cms: clean-cms
	@echo "Removing compiled CMS files"
	$(call chdir,cms)
	@echo "Running Webpack on Boldr CMS"
	@npm run build
	mkdir boldr-cms
	@mv public ./boldr-cms/public
	@cp -n package.json ./boldr-cms
	@cp -n run.js ./boldr-cms
	@cp -n server.js ./boldr-cms
	@cp -n server.js.map ./boldr-cms
	@cp -n webpack-assets.json ./boldr-cms
	@echo "Building a Docker container for Boldr CMS module"
	docker build -t strues/boldr-cms .
	@echo "Cleaning up"
	@rm -rf server.js
	@rm -rf server.js.map
	@rm -rf webpack-assets.json

clean-api:
	@rm -rf ./api/boldr-api

build-api: clean-api
	@echo "Removing old compiled files"
	$(call chdir,api)
	@echo "Running API through Babel"
	@npm run build
	mkdir boldr-api
	@mv server ./boldr-api/server
	@cp -n package.json ./boldr-api
	@cp -n .env ./boldr-api
	@echo "Building a Docker container for Boldr API module"
	docker build -t strues/boldr-api .

migrate:
	$(call chdir,api)
	@echo "Migrating the database"
	@npm run sequelize db:migrate

test-api:
	$(call chdir,api)
	@echo "Migrating the database"
	@npm run test:db-migrate
	@echo "Starting the tests"
	@npm run test

test-cms:
	$(call chdir,cms)
	@echo "Starting the tests"
	@npm run test


help: ## (default), display the list of make commands
  @grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
