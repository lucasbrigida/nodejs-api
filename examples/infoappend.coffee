###
# Please modify API_KEY, user, popcode, info accordingly before running
#
###
#
thingchain = require("../index")

API_KEY = ''
popcode = '' #public or private key
user =
{
  "userId": "your user id here",
  "userInfo": {
    "profileUrl": "http://your.profile.here"
  }
}

if not API_KEY
    console.log("Please request an API KEY from info@thingchain.com")
    process.exit(0)

thingchain.init(API_KEY)

idkey = thingchain.user.idkeys.generate()
console.log("Generated an identity key...", "\n", "Address:", idkey.address, "\n", "Private Key:", idkey.privateKey)
console.log("==========")

user =
{
  "userId": "your user id here"
  "userInfo": {
    "profileUrl": "http://your.profile.here"
  }
}

popcode = "" #popcode address

info = {} #can be object or string

wData =
    userId: user.userId
    userInfo: user.userInfo
    idAddress: idkey.address
    popcode: popcode
    value: 1 #integer
    uom: "info"

thingchain.faucet.withdraw(wData, (e, tx) ->
    wtx = tx.data
    console.log e,tx
    console.log("Received", "token from the faucet...")
    console.log("Transaction ID:", wtx.txId)
    console.log("==========")

    data =
      txId: wtx.txId
      txHex: wtx.txHex
      idPrivate: idkey.privateKey
      value: 1
      popcode:wData.popcode
      metadata:
          popcode: wData.popcode
          info: info

    txhex = thingchain.popcode.infoappend.prepareTx(data)

    thingchain.tx.broadcast(txhex, (e, r) ->
        console.log e, r
        if !e
            console.log "Successfully Minted Popcode!"
            console.log "Transaction Hex:", r.txHex
            console.log "Transaction ID:", r.data
            console.log("==========")
    )
)
    




