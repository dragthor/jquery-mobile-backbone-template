var AppRouter = Backbone.Router.extend({

    routes:{
        "":"page1",
        "page1": "page1",
        "page2": "page2"
    },

    initialize: function () {
        this.firstPage = true;
    },

    page1: function () {
        $.mobile.showPageLoadingMsg();

        var webView = this;

        webView.changePage(new MyNameSpace.Views.Page1( {} ));

        $.mobile.hidePageLoadingMsg(); 
    },

    page2: function () {
        $.mobile.showPageLoadingMsg();

        var webView = this;

        webView.changePage(new MyNameSpace.Views.Page2( {} ));

        $.mobile.hidePageLoadingMsg();
    },

    changePage:function (page) {
        $(page.el).attr('data-role', 'page');

        page.render();
        
        $('body').append($(page.el));

        var transition = $.mobile.defaultPageTransition;
        
        // We don't want to fade the first page. Slide, and risk the annoying "jump to top".
        if (this.firstPage) {
            transition = "none";
            this.firstPage = false;
        }

        $.mobile.changePage($(page.el), { changeHash:false, transition: transition });
    }
});

$(document).ready(function () {
    MyNameSpace.Router = new AppRouter();

    Backbone.history.start();
});