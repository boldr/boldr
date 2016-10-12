#!/bin/bash
echo "Cleaning..."
rm -r ${PWD}/api/boldr-api
echo "Compiling..."
npm run build:api
echo "Copying the necessary files..."
echo "=> Copying env file"
cp ${PWD}/.env ${PWD}/api/boldr-api
echo "Building docker image"
cd api && docker build -t strues/boldr-api .
