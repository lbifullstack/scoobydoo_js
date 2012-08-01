var assert = require('assert')
    , app = require("../../../app/app.js").App
    , routes = require("../../../app/routes/index.js")
    , _ = require('underscore');

var get = function (path , routes) {
    return  _.find(routes['get'], function (route) {
        return route['path'] == path;
    });

};

describe("App", function () {

    it("should have a stock index", function () {
        assert.ok(get('/stock', app.routes));
    });

});

describe("stock", function () {
    it("should have a view", function () {
        var response = {
            viewName : "", data : {}, render : function (view, viewData) {
                this.viewName = view;
                this.data = viewData;
            }
        };
        routes.stock({}, response);
        assert.equal(response.viewName, "stock");
    });
});
