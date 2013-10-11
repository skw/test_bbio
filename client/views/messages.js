window.MessagesView = Backbone.View.extend({

    events: {
        'click .send': 'send',
        'keypress .message': 'keypress'
    },

    initialize: function(options) {
        this.collection.on('add change remove reset', this.render, this);
        this.template = _.template($('#messages-template').html());
    },

    render: function() {
        $(this.el).html(this.template());

        this.collection.each(function(message) {
            var view = new MessageView({ model: message });
            this.$('ul').append(view.render().el);
        });

        return this;
    },

    send: function() {
        this.collection.create({ text: this.$('.message').val() }, { wait: true });
        this.$('.message').val('');
    },

    keypress: function(e) {
        if (e.which === 13) this.send();
    }

});