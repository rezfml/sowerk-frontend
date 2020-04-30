#!/bin/bash
echo "$(whoami)"
export NVM_DIR="/home/master/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
nvm use 10.0.0
node -v
npm -v
nvm which node
npm install --prefix applications/staging_frontend/public_html
npm build --prefix applications/staging_frontend/public_html
npm start --prefix applications/staging_frontend/public_html
