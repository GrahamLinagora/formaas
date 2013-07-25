//
// Form routes.
//
// All the middleware stuff should be handled here, then the controller will not have to deal with that.
//
// Christophe Hamerling - chamerling@linagora.com
//

/**
 * Init routes for instances
 *
 * @param app
 */
module.exports = function(app) {
  app.get('/instances', function(req, res) {
    res.render('index');
  });
}
