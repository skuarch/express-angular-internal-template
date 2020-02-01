#!/bin/bash

cd ../web-server/
npm run jshint 

if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** jshint failed (web-server) **************"
    printf "\n\n\n"
	  exit 1
fi

npm run eslint 

if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** eslint failed (web-server) **************"
    printf "\n\n\n"
	  exit 1
fi

nodemon ./src/bin/www
exit 0