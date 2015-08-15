var bitcore = require('bitcore')

module.exports = {
  prepareTx: function (data) {
    var initTx = new bitcore.Transaction(data.txHex.toString());
    var script = initTx.outputs[0].script.toHex();
    var tx = new bitcore.Transaction().fee(0);
    tx.from({
        txid: data.txId,
        amount: data.value,
        scriptPubKey: script,
        vout:0 // !!! This is an assumption
    });
    data.metadata.appKey = _thingchain.appKey;

    //tx.to(data.popcode, data.value*10e7);

    tx.addData(JSON.stringify(data.metadata));
    tx.sign(data.idPrivate);
    var minthex =  tx.serialize(true);
    return minthex;
  }
}
