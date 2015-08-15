var thingchain = module.exports;
global._thingchain = {};

thingchain.user = require("./lib/user/index");
thingchain.popcode = require("./lib/popcode/index");
thingchain.faucet = require("./lib/faucet/index");
thingchain.axs = require("./lib/axs/index");
thingchain.search = require("./lib/search/index");
thingchain.tx = require("./lib/tx/index");

thingchain.init = function(apiKey) {
  _thingchain.apiKey = apiKey;
  _thingchain.appKey = thingchain.user.appKey(apiKey);
  _thingchain.apiStub = "https://api.thingchain.com";
}

