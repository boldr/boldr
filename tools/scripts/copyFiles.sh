#!/bin/bash

echo "Copying run.js"
cp ${PWD}/tools/.onbuild/run.js ${PWD}/static
echo "Copying isomorphic.config"
cp ${PWD}/tools/.onbuild/isomorphic.config.js ${PWD}/static/isomorphic.config.js
