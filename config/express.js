//
// Configure express.js
//
// Christophe Hamerling - chamerling@linagora.com
//

var express = require('express');

module.exports = function (app, config) {

  app.set('showStackError', true)
  // should be placed before express.static
  app.use(express.compress({
    filter: function (req, res) {
      return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
    },
    level: 9
  }))

  app.set('port', config.port);

  app.use(express.static(config.root + '/public'))

  // don't use logger for test env
  if (process.env.NODE_ENV !== 'test') {
    app.use(express.logger('dev'))
  }

  // set views path, template engine and default layout
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'jade');
  app.set('config', config);

  app.configure(function () {
    // bodyParser should be above methodOverride
    app.use(express.bodyParser())
    app.use(express.methodOverride())

    // routes should be at the last
    app.use(app.router)

    // assume "not found" in the error msgs
    // is a 404. this is somewhat silly, but
    // valid, you can do whatever you like, set
    // properties, use instanceof etc.
    app.use(function(err, req, res, next){
      // treat as 404
      if (~err.message.indexOf('not found')) return next()

      // TODO : JSON error
      // log it
      console.error(err.stack)

      // error page
      res.json(500, { error: err.stack });
    })

    // assume 404 since no middleware responded
    app.use(function(req, res, next){
      // TODO : JSON error
      res.json(404, { url: req.originalUrl, error: 'Not found' })
    })

  })
}
