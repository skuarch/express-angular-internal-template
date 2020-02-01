#!/bin/bash

./bash-scripts/build.sh
if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** building failed **************"
    printf "\n\n\n"
	  exit 1
fi
node web-server/src/bin/www
exit 0