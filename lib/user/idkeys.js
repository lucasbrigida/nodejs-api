var bitcore = require('bitcore')

module.exports = {
    generate: function () {
        var privateKey = new bitcore.PrivateKey();
        var publicKey = privateKey.publicKey;
        var outdata = {
          privateKey: privateKey.toWIF(),
          address: publicKey.toAddress().toString()
        };
        return outdata
    }
}
