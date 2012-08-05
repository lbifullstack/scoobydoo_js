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


