'use strict';

// Modularized Code
var action = require('./app/index.js');

// Lambda Handler
module.exports.handler = function(event, context) {
  action.run(event, function(error, result) {
    return context.done(error, result);
  });
};
