'use strict';

// Modularized Code
var action = require('./index.js');

// Lambda Handler
module.exports.handler = function(event, context) {
  action.run(event, context, function(error, result) {
    return context.done(error, result);
  });
};
