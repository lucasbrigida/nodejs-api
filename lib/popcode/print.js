module.exports = function (data, cb) {
    var jade = require('jade');

    if (typeof(data.rowstart)=='undefined') {
        data.rowstart = 1
    }
    if (typeof(data.colstart)=='undefined') {
        data.colstart = 1
    }

    try {
        var html = jade.renderFile('../lib/popcode/popcodes.jade',data);
        cb(null, html);
    }
    catch (err) {
        cb("malformed data -  could not generate HTM:. Example of proper format: { popcodes: [ { address: '19VS4e4tuvb3Rpy91rLmcVzRagmtwaYU9q', privatekey: 'L5Dg8L5snHngBykdFuXY1BVtq3VeenpEvZiW92nTe9Cr4xCVbd9V',sequenceNum: '812064' } ] }", null);
    }

}
