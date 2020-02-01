#!/bin/bash

cd web-client/

npm run lint

if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** lint failed (web-client) **************"
    printf "\n\n\n"
	  exit 1
fi

npm run build-local

if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** build-local failed (web-client) **************"
    printf "\n\n\n"
	  exit 1
fi

cd ..
exit 0