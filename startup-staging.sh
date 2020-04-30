#!/bin/bash
echo "$(whoami)"
export NVM_DIR="/home/master/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
nvm use 10.0.0
npm install --prefix applications/staging_frontend/public_html --loglevel=error
npm build --prefix applications/staging_frontend/public_html --loglevel=error
