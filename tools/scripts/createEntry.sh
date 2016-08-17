#!/bin/bash
echo "Building the entrypoint"
cp ${PWD}/tools/scripts/prodServerHook.js ${PWD}/build/index.js
echo "Copying config"
cp ${PWD}/tools/webpack/isomorphic.config.js ${PWD}/build/isomorphic.config.js
