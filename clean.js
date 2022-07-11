const cp = require('child_process');
const path = require('path');
const os = require('os');

const NUMBER_OF_RUNS = 10;

function message(m) {
  console.log('------------------------');
  console.log(m);
  console.log('------------------------');
}

function cleanFolders() {
 
  cp.execSync(
    'rm -rf apps/sample-app/.next && rm -rf packages/acme-core/dist t && rm -rf packages/acme-utils/dist && rm -rf packages/create-turbo/dist && rm -rf packages/logger/dist && rm -rf packages/turbo-codemod/dist && rm -rf packages/turbo-ignore/dist && rm -rf packages/ui/dist && rm -rf packages/react/build '
  );
}

cleanFolders();