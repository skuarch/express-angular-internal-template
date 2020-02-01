#!/bin/bash

./bash-scripts/delete.sh
./bash-scripts/setup.sh

cd web-client/

echo "********* npm install web-client ********"
rm -rf dist/
npm install
if [ $? != 0 ]; then
    printf "\n\n\n"
	echo "*********** web-client npm install failed ***********"
    printf "\n\n\n"
	exit 1
fi

#------------------------------------------------------------------

cd ../
cd web-server/
echo "********* npm install web-server *********"

npm install

if [ $? != 0 ]; then
        printf "\n\n\n"
	    echo "********* web-server npm install failed *********"
        printf "\n\n\n"
	    exit 1
fi

cd ../
exit 0