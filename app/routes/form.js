//
// Form routes.
//
// All the middleware stuff should be handled here, then the controller will not have to deal with that.
//
// Christophe Hamerling - chamerling@linagora.com
//

/**
 * Init routes for forms
 *
 * @param app
 */
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/partials/:name', function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
  });
}
