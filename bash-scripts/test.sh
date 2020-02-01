#!/bin/bash
echo "************** testing web-server **************"
cd ./web-server
npm test

if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** web-server test failed **************"
    printf "\n\n\n"
	  exit 1
fi

cd ../
cd ./web-client
echo "************** testing web-client **************"
npm test

if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** web-client test failed **************"
    printf "\n\n\n"
	  exit 1
fi
cd ..
exit 0