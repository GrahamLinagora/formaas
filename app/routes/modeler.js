module.exports = function(app, conf) {

  app.get('/modeler', function(req, res) {
    res.render('apps/modeler.jade');
  })
}