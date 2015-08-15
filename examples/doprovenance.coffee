###
# Please modify API_KEY, user & popcode accordingly before running
#
###
#
thingchain = require("../index")

API_KEY = 'HpIgToxzaa'
user =
{
  "userId": "reidw",
  "userInfo": {
    "profileUrl": "http://your.profile.here"
  }
}

if not API_KEY
    console.log("Please request an API KEY from info@thingchain.com")
    process.exit(0)

thingchain.init(API_KEY)

thingchain.search.provenance({
    address: "1EPfPSiV5An9Eag84XHU6rY3xBrL6Zrvmk"
}, (err, resp) ->
    #resp.data is an array of transactions for the given popcode starting with the most recent
    console.log("Metadata:", resp.data[0].metadata)
)

