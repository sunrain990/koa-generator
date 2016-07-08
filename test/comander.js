/**
 * Created by kevin on 16/6/25.
 */
var sortedObject = require("sorted-object");
var fs = require('fs');

var objectToSerialize = require('./test.json');

console.log(objectToSerialize);

// Before:
fs.writeFileSync("dest.json", JSON.stringify(objectToSerialize));

// After:
var sortedVersion = sortedObject(objectToSerialize);
fs.writeFileSync("dest1.json", JSON.stringify(sortedVersion));