window.MessageMdl = Backbone.Model.extend({

    initialize: function() {
        this.on('error', function(model, res) {
            alert(res.error.message);
        });
    }

});
