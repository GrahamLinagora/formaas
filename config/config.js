//
// Configuration settings
//
// Christophe Hamerling - chamerling@linagora.com
//

var path = require('path')
  , rootPath = path.normalize(__dirname + '/..');

module.exports = {
  development: {
    root: rootPath,
    port: process.env.PORT || 3001,
    host: process.env.HOSTNAME || 'localhost'
  },
  test: {
    root: rootPath,
    port: process.env.PORT || 3001,
    host: process.env.HOSTNAME || 'localhost'
  },
  production: {}
}