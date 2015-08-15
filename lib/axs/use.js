var bitcore = require('bitcore')

module.exports = {
  prepareTx: function (data) {
    var tx = new bitcore.Transaction().fee(0);
    tx.from(data.unspent);
    data.metadata.appKey = _thingchain.appKey;

    tx.addData(JSON.stringify(data.metadata));
    tx.sign(data.idPrivate);
    var minthex =  tx.serialize(true);
    return minthex;
  }
}
