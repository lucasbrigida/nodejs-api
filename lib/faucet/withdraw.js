request = require('request')
module.exports = function (data, cb) {
  data['apiKey'] = _thingchain.apiKey
  request({
    method: "POST",
    url: _thingchain.apiStub + "/faucet/withdraw",
    json: true,
    body: data
    }, function (e, r, body) {
      cb(null, body)
    }
  )
}
