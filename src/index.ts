import Application from './application';

try {
   new Application().start();
}
catch(ex) {
   console.error(ex);
   process.exit(1);
}
