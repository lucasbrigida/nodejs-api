module.exports = function (address, cb) {
  request({
    method: "GET",
    url: _thingchain.apiStub + "/search/provenance",
    json: true,
    body:
    {
      "address": address.address,
      "apiKey": _thingchain.apiKey
    }
    }, function (e, r, body) {
      cb(e,body);
    }
  )
}
