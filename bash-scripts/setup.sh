#!/bin/bash

echo "********* running preinstall *********"
echo "********* setting registry *********"
REGISTRY=https://artifactory.astrazeneca.net:443/api/npm/npm_v_az-npm
VIRTUAL=https://artifactory.astrazeneca.net/npm_v_az-npm/node-sass/-
PHANTOMJS=https://artifactory.astrazeneca.net/npm_v_az-npm/phantomjs

echo "********* setting vars *********"
export NPM_CONFIG_REGISTRY=$REGISTRY
export NODE_TLS_REJECT_UNAUTHORIZED=0
export SASS_BINARY_SITE=$VIRTUAL
export PHANTOMJS_CDNURL=$PHANTOMJS

echo "********* config npm *********"
npm config set registry $REGISTRY
npm set registry $REGISTRY
npm config set strict-ssl false -g
npm set strict-ssl false

exit 0