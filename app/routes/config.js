//
// Get configuration values for the client
// TODO : Find another way to do that...
//
// @author Christophe Hamerling - chamerling@linagora.com
//

module.exports = function(app) {
  app.get('/config', function(req, res) {

    console.log('config', app.get('config'))

    res.json({
      api : app.get('config').api
    });
  })
}