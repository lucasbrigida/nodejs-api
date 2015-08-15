request = require('request')

module.exports = function (popcodeAddress, granteeAddress, cb) {
  request({
    method: "GET",
    url: _thingchain.apiStub + "/axs/lookup",
    json: true,
    body: {
      "apiKey": _thingchain.apiKey,
      "popcodeAddress": popcodeAddress,
      "granteeAddress": granteeAddress
    }
    }, function (e, r, body) {
      cb(e,body);
    }
  )
}
