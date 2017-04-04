SHELL  := /bin/bash
PATH   := node_modules/.bin:$(PATH)
DIST_CMS   := boldr
KNEX_FILE ?= ./knexfile.js
TEST_DB ?= POSTGRES_CONN_URI=postgres://postgres:password@localhost:5432/boldr_test
NODE_CFG ?= ./internal/jest/jest.node.json
BROWSER_CFG ?= ./internal/jest/jest.browser.json
COVERAGE ?= ./coverage/coverage-final.json
C_NODE ?=./coverage/coverage-node-final.json
C_BROWSER ?= ./coverage/coverage-browser-final.json

.PHONY: clean

flow:
	./node_modules/.bin/flow check

migrate-test:
	NODE_ENV=test $(TEST_DB) node --harmony internal/scripts/db.js migrate

seed-test:
	NODE_ENV=test $(TEST_DB) ./node_modules/.bin/knex --knexfile $(KNEX_FILE) seed:run

compile:
	NODE_ENV=production yarn run build

directories:
	rm -rf release && cp -a ./bin ./release/ && cp package.json ./release/ && cp -a .env ./release/ && cp -a ./db ./release && cp -a ./public ./release/ && cp -a ./boldrCMS ./release/

files:
	cp knexfile.js internal/docker/Dockerfile release/ && cp internal/docker/docker-compose.prod.yml release/docker-compose.yml

container:
	cd release; docker build -t strues/boldrcms .

release: compile directories files

setup-db:
	make migrate-test
	make seed-test

test-node:
	NODE_ENV=test jest -w2 --config=${NODE_CFG} && cp ${COVERAGE} ${C_NODE}

test-browser:
	NODE_ENV=test jest -w2 --config=${BROWSER_CFG} && cp ${COVERAGE} ${C_BROWSER}

combine-coverage:
	node ./internal/scripts/mapCoverage.js

test-ci:
	NODE_ENV=test jest -w2 --config=${NODE_CFG} && cp ${COVERAGE} ${C_NODE} && jest -w2 --config=${BROWSER_CFG} && cp ${COVERAGE} ${C_BROWSER} && node ./internal/scripts/mapCoverage.js

nuke:
	rm -rf .happypack boldrCMS node_modules/.cache
