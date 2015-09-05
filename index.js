var Ltxml = require('./ltxml');
var XEnumerate = require('./ltxml-extensions');

module.exports = function (extensions) {
  if (extensions === undefined) {
    return Ltxml;
  } else {
    return XEnumerate;
  }
}
