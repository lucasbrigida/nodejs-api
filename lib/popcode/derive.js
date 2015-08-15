request = require('request')

module.exports = function (numPopcodes, batchId, seqat, userId, cb) {
  request({
    method: "POST",
    url: _thingchain.apiStub + "/popcode/derive",
    json: true,
    body: {
      "numPopcodes": numPopcodes,
      "batchId": batchId,
      "seqat": seqat,
      "userId": userId,
      "apiKey": _thingchain.apiKey
    }
    }, function (e, r, body) {
      cb(null, body)
    }
  )
}
