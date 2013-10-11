var express = require( 'express' ),
  browserify = require( 'browserify-middleware' ),
  app = express();

// browserified npm modules
app.get( '/js/lib.js', browserify([
  'jquery-browserify',
  'backbone',
  'lodash'
]));

// browserified app
/*
app.use( '/js/app.js', browserify([
  './client/'
]));
*/

// satic assets
app.use( express.static( process.cwd() + '/client') );
app.use( express.static( process.cwd() + '/public') );

var server = app.listen( 3000 );

module.exports = server;