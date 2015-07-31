var assert = require("assert");
var isIPv6 = require("../lib/is-ipv6");

describe("is-ipv6", function() {
    describe("init", function() {
        it("should return true if String is an IPv6 address", function() {
            assert.equal(isIPv6("2a02:2770::21a:4aff:feb3:2ee"), true, "String should be an IPv6 address");
        });

        it("should return false if String is not an IPv6 address", function() {
            assert.equal(isIPv6("Hello World!"), false, "String should not be an IPv6 address");
        });
    });
});