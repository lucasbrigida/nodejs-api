###
# Please modify API_KEY, user & data object accordingly before running
#
###
#
thingchain = require("../index")
request = require('request')

API_KEY = ''
popcode = '' #public address
user =
{
  "userId": "Please enter your userId",
  "userInfo": {
    "profileUrl": "http://your.profile.here"
  }
}

if not API_KEY
    console.log("Please request an API KEY from info@thingchain.com")
    process.exit(0)

thingchain.init(API_KEY)

data =
  idPrivate:"" #private key of identity address
  value:  #integer
  popcode:popcode
  #metadata: (optional)
  #  info: "here"
  #
  txId: ""
  txHex: ""

releasehex = thingchain.popcode.release.prepareTx(data)
thingchain.tx.broadcast(releasehex, (err, resp) ->
    if !err
        console.log "Successfully Released Popcode"
        console.log resp
    else
        console.log "There was an error"
)

reversebytes = (string) ->
    list = (x for x in [0..string.length-1])
    string_rev = ''
    for x in list by -2
        string_rev = string_rev + string[x-1] + string[x]
    return string_rev
