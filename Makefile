.DEFAULT_GOAL := help
.PHONY: help install-api install-cms

install-api:
	@echo "Installing Node dependencies for Boldr API module"
	cd api; npm install

install-cms:
	@echo "Installing Node dependencies for Boldr CMS module"
	cd cms; npm install

install: install-api install-cms

clean-cms:
	@rm -rf ./cms/boldr-cms

clean-api:
	@rm -rf ./api/boldr-api

clean:
	@rm -rf ./cms/boldr-cms
	@rm -rf ./api/boldr-api

cms-docker:
	@echo "Building a Docker container for Boldr CMS module"
	cd cms; docker build -t strues/boldr-cms .
	@echo "Cleaning up"
	@rm -rf cms/server.js
	@rm -rf cms/server.js.map
	@rm -rf cms/webpack-assets.json

api-docker:
	@echo "Building a Docker container for Boldr API module"
	cd api; docker build -t strues/boldr-api .


build-api: clean-api
	@echo "Removing old compiled files"
	@echo "Running API through Babel.."
	cd api; npm run build
	mkdir api/boldr-api
	@mv api/server api/boldr-api/server
	@cp -n api/package.json api/boldr-api | true
	@cp -n api/.env api/boldr-api | true
	@echo "Copying config json files..."
	@cp -n api/src/core/config/production.json api/boldr-api/server/core/config/production.json | true
	@cp -n api/src/core/config/test.json api/boldr-api/server/core/config/test.json | true
	@cp -n api/src/core/config/development.json api/boldr-api/server/core/config/development.json | true
	@cp -n api/src/core/config/ci.json api/boldr-api/server/core/config/ci.json | true
	@echo "Finished."

build-cms: clean-cms
	@echo "Removing compiled CMS files..."
	@echo "Now running Webpack on Boldr CMS"
	cd cms; npm run build
	mkdir ./cms/boldr-cms
	@mv ./cms/public ./cms/boldr-cms/public
	@cp -n ./cms/package.json ./cms/boldr-cms/package.json | true
	@cp -n ./cms/run.js ./cms/boldr-cms/run.js | true
	@cp -n ./cms/server.js ./cms/boldr-cms/server.js | true
	@cp -n ./cms/server.js.map ./cms/boldr-cms/server.js.map | true
	@cp -n ./cms/webpack-assets.json ./cms/boldr-cms/webpack-assets.json | true
	@echo "Done."

build: clean
	@echo "Building CMS and API modules"
	make build-cms
	make build-api

migrate-dev:
	@echo "Migrating the database for dev environment"
	cd cms; @NODE_ENV=development npm run sequelize db:migrate

migrate-prod:
	@echo "Migrating the database for prod environment"
	cd cms; @NODE_ENV=production npm run sequelize db:migrate

migrate-staging:
	@echo "Migrating the database for staging environment"
	cd cms; @NODE_ENV=staging npm run sequelize db:migrate

test-api:
	@echo "Migrating the database"
	cd api; npm run test:db-migrate
	@echo "Starting the tests for the API"
	cd api; npm run test

test-cms:
	@echo "Starting the tests for the CMS"
	cd cms; npm run test


test-all:
	@echo "Running all tests"
	make test-api
	make test-cms

help: ## (default), display the list of make commands
  @grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
