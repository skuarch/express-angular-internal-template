#!/bin/bash


cd web-client/ 
npm run lint 

if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** web-client lint failed **************"
    printf "\n\n\n"
	  exit 1
fi

cd ../web-server/ 
npm run jshint 

if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** web-server jshint failed **************"
    printf "\n\n\n"
	  exit 1
fi

npm run eslint

if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** web-server eslint failed **************"
    printf "\n\n\n"
	  exit 1
fi

cd ../
exit 0