var server = require( './server/server.js' ),
  backboneio = require( 'backbone.io' ),
  backend = backboneio.createBackend(),
  messages = backboneio.createBackend();

messages.use( backboneio.middleware.memoryStore() );

backboneio.listen( server, { messages: messages });