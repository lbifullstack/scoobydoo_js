var assert = require('assert')
    , routes = require("../../../app/routes/index.js")
    ;

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
