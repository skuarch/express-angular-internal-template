#!/bin/bash

rm -rf ./node_modules/ ./web-client/node_modules/ ./web-server/node_modules/

if [ "$1" = "all" ]; then
    rm -rf ./package-lock.json ./web-server/package-lock.json ./web-client/package-lock.json 
    npm cache clean --force
    rm -rf /Users/$USER/.npm    
fi

exit 0
