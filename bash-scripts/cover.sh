#!/bin/bash

cd web-client/ 
rm -rf coverage/*
npm run cover

if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** web-client cover failed **************"
    printf "\n\n\n"
	  exit 1
fi

cd ../web-server/ 
rm -rf coverage/*
npm run cover

if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** web-server cover failed **************"
    printf "\n\n\n"
	  exit 1
fi

cd ../
exit 0
