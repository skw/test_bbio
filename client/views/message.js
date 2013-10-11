window.MessageView = Backbone.View.extend({

    tagName: 'li',

    events: {
        'click .delete': 'delete'
    },

    initialize: function() {
      this.template = _.template($('#message-template').html());
      //this.template = this["Templates"]["CLIENT/TEMPLATES/MESSAGE.HTML"];
    },

    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    'delete': function(e) {
        e.preventDefault();
        this.model.destroy();
    }

});