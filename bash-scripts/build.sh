#!/bin/bash

if [ -z $ENVIRONMENT ]; then
      printf "\n\n\n"
      echo "********** ERROR: ENVIRONMENT var not set *********"
      printf "\n\n\n"
      exit 1
fi

#------------------------------------------------------------------

cd web-client/
echo "************* building web-client "$ENVIRONMENT
rm -rf dist/
npm run build-$ENVIRONMENT
if [ $? != 0 ]; then
    printf "\n\n\n"
	  echo "************** web-client building failed **************"
    printf "\n\n\n"
	  exit 1
fi
echo "******************* finish build website *******************"

#------------------------------------------------------------------

cd ..
exit 0