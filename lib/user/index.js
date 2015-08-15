module.exports.idkeys = require("./idkeys")
bitcore = require('bitcore')
module.exports.bitcore = bitcore
module.exports.appKey = function (apiKey) {
  value = new Buffer(apiKey);
  hash = bitcore.crypto.Hash.sha256(value);
  truncated_hash = hash.slice(0,8);
  group_code=bitcore.encoding.Base58.encode(truncated_hash);
  return group_code
}
    
