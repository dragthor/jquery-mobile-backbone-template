MyNameSpace.Views.Page1 = Backbone.View.extend({

    render: function (eventName) {
        var params = { message: "page one sub heading" };

        var template = _.template($("#firstPage").html(), params);

        $(this.el).html(template);

        return this;
    },

    events: {
        "change #drpOne": "handleChange",
        "click #button1": "handleClick"
    },

    handleClick: function (e) {
        e.preventDefault();

        alert("clicked");
    },

    handleChange: function (e) {
        e.preventDefault();

        var $this = $(e.target);

        alert($this.val());
    },

    initialize: function (options) {
        _.bindAll(this, "render");

        this.render();
    }
});

MyNameSpace.Views.Page2 = Backbone.View.extend({

    render: function (eventName) {
        var params = { message: "page two sub heading" };

        var template = _.template($("#secondPage").html(), params);

        $(this.el).html(template);

        return this;
    },

    events: {
        "change #drpTwo": "handleChange",
        "click #button2": "handleClick"
    },

    handleClick: function (e) {
        e.preventDefault();

        alert("clicked");
    },

    handleChange: function (e) {
        e.preventDefault();

        var $this = $(e.target);

        alert($this.val());
    },

    initialize: function (options) {
        _.bindAll(this, "render");

        this.render();
    }
});