window.MessagesCol = Backbone.Collection.extend({

    // Specify the backend with which to sync
    backend: 'messages',

    model: window.MessageMdl,

    initialize: function() {
        // Setup default backend bindings
        // (see lib/browser.js for details).
        this.bindBackend();
    }

});