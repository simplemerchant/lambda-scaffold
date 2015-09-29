console.log('Loading function');

require('dotenv').load();

exports.run = function(event, context, contextCallback) {

  // This has come from the .env configuration
  console.log(process.env.SOME_VAR);

  // Replace me with your function code.
  contextCallback(null, 'done');
};
