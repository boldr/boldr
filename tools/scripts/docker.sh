#!/bin/bash
echo "Compiling..."
npm run build:api
echo "Copying the necessary files..."
cp ${PWD}/knexfile.js ${PWD}/api/compiled
echo "Copying env file"
cp ${PWD}/.env ${PWD}/api/compiled
echo "Building docker image"
cd api && docker build -t strues/boldr-api .
