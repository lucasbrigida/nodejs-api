module.exports = function (q, cb) {
  request({
    method: "GET",
    url: _thingchain.apiStub + "/search",
    json: true,
    body: {
      "q": q,
      "apiKey": _thingchain.apikey
    }
    }, function (e, r, body) {
      cb(e,body);
    }
  )
}

module.exports.unspent = require('./unspent')
module.exports.provenance = require('./provenance')
