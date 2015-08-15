request = require('request')

module.exports = function (popcodeAddress, granteeAddress, cb) {
  request({
    method: "POST",
    url: _thingchain.apiStub + "/axs/grant",
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
