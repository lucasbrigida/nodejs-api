###
# Please modify API_KEY, userId & popcodeData accordingly before running
#
###
#
thingchain = require('../index')
API_KEY = ""

user =
{
  "userId": "Please enter your unique uid",
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


popcodeData =
    userId: user.userId
    userInfo: user.userInfo
    idAddress: idkey.address
    value:#integer
    uom: #string
    name:#string
    batch:#string 
    serial: #integer 

thingchain.faucet.withdraw(popcodeData, (e, tx) ->
    wtx = tx.data
    console.log("Received", popcodeData.value, "tokens from the faucet...")
    console.log("Transaction ID:", wtx.txId)
    console.log("==========")
    thingchain.popcode.derive(1, popcodeData.batch, popcodeData.serial, popcodeData.userId, (e, r) ->
        pclist = r.popcodes
        console.log("Derived Popcode...")
        console.log("Address:", pclist[0].address, "\n", "Private Key:", pclist[0].privatekey)
        console.log("==========")
        mintData =
          txId: wtx.txId
          txHex: wtx.txHex
          idPrivate: idkey.privateKey
          value: popcodeData.value
          popcode: pclist[0].address
          metadata:
            name: popcodeData.name
            uom: popcodeData.uom

        txhex = thingchain.popcode.mint.prepareTx(mintData)

        thingchain.tx.broadcast(txhex, (e, r) ->
            if !e
                console.log "Successfully Minted Popcode!"
                console.log "Transaction Hex:", r.txHex
                console.log "Transaction ID:", r.data
                console.log("==========")
                thingchain.popcode.print({popcodes: pclist}, (err, html) ->
                    if err
                        console.log(err)
                        return

                    
                    fs = require('fs')
                    fs.writeFile("popcodes.html", html, (err) ->
                        console.log("successfully created popcodes.html")
                    )
                )

        )
    )
)
    




