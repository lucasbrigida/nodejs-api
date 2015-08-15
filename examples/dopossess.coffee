###
# Please modify API_KEY, user & popcode accordingly before running
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

thingchain.popcode.possess({
    popcode: popcode
    idAddress: idkey.address
    userId: user.userId
}, (err, resp) ->
    console.log err, resp)

