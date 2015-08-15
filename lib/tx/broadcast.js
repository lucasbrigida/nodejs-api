request = require('request')

module.exports = function (txhex, cb) {
  request({
    method: "POST",
    url: _thingchain.apiStub + "/tx/broadcast",
    json: true,
    body: {
      "apiKey": _thingchain.apiKey,
      "txHex": txhex
    }
    }, function (e, r, body) {
      cb(e,body);
    }
  )
}


