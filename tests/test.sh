#!/bin/bash

REL_PATH=$(dirname "$0")
cd "$REL_PATH"
CURRENT_DIR=$(pwd)

echo ${CURRENT_DIR}

echo '##################'
echo "# Running tests! #"
echo '##################'

echo '# API'
cd "$REL_PATH/../shop-api"

echo '# Running fixtures'
NODE_ENV=test npm run seed

echo '# Running API server in test mode'
NODE_ENV=test npx pm2 start npm --name="shop-api-test" -- run start

echo '# Running frontend in test mode'
cd "$REL_PATH/../frontend"
npx pm2 start npm --name="shop-frontend-test" -- run start-test

echo '# Waiting for services...'
while ! nc -z localhost 8010; do sleep 0.1; done
while ! nc -z localhost 3010; do sleep 0.1; done

echo "# Running tests"
cd "$REL_PATH/../tests"
npx codeceptjs run --steps "$@"
EXIT_CODE=$?

echo '# Killing test processes'
pm2 kill

exit ${EXIT_CODE}