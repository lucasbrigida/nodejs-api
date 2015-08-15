var bitcore = require('bitcore')

module.exports = function (data, cb) {
      request = require('request');

      data['apiKey'] = _thingchain.apiKey;

      request({
        method: "POST",
        url: _thingchain.apiStub + "/popcode/possess",
        json: true,
        body: data
        }, function (e, r, body) {
          cb(null, body)
        }
      )
}
