Backbone.io.connect();

$(function() {
    window.messages = new MessagesCol();
    window.messages.fetch();
    new MessagesView({ 
        el: $('#messages'),
        collection: messages
    }).render();
});