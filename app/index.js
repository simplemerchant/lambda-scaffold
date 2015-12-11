console.log('Loading function');

require('dotenv').load();

exports.run = function(event, contextCallback) {

  // Use .env vars with process.env.SOME_VAR.

  // Replace me with your function code.
  contextCallback(null, 'done');
};
