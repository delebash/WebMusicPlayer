var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
  files: './app/**/**', // use the glob format
  platforms: ['win64'],
  version:"0.19.4"
});

//Log stuff you want 

nw.on('log',  console.log);

// Build returns a promise 
nw.build().then(function () {
  console.log('all done!');
}).catch(function (error) {
  console.error(error);
});
