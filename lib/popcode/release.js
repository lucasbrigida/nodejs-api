var bitcore = require('bitcore')

var reversebytes = function(string) {
  var list, string_rev, x, _i;
  list = (function() {
    var _i, _ref, _results;
    _results = [];
    for (x = _i = 0, _ref = string.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; x = 0 <= _ref ? ++_i : --_i) {
      _results.push(x);
    }
    return _results;
  })();
  string_rev = '';
  for (_i = list.length - 1; _i >= 0; _i += -2) {
    x = list[_i];
    string_rev = string_rev + string[x - 1] + string[x];
  }
  return string_rev;
}

module.exports = {
  prepareTx: function (data) {
    var initTx = new bitcore.Transaction(data.txHex.toString());
    var script = initTx.outputs[0].script.toHex();
    var xtxid = reversebytes(bitcore.crypto.Hash.sha256sha256(new Buffer(data.txHex, 'hex')).toString('hex'));
    var tx = new bitcore.Transaction().fee(0);
    tx.from({
        txid: data.txId,
        amount: data.value,
        scriptPubKey: script,
        vout:0 // !!! This is an assumption
    });

    if (data.metadata==null) {
        data.metadata={}
    }
    data.metadata.appKey = _thingchain.appKey;

    tx.to(data.popcode, data.value*10e7);
    tx.addData(JSON.stringify(data.metadata));
    tx.sign(data.idPrivate);
    var minthex =  tx.serialize(true);
    return minthex;
  }
}
