#!/bin/bash
echo "Starting bundling process"
npm run build
echo "Copying env file"
cp ${PWD}/.env ${PWD}/static
echo "Building docker image"
docker build -t strues/boldr .
