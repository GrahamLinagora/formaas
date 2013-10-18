// TODO : Detect apps from config

module.exports = function(app, conf) {

  app.get('/apps/modeler', function(req, res) {
    res.render('apps/modeler');
  })

  app.get('/apps/form/:id', function(req, res) {
    console.log(req)
    res.render('apps/form');
  })
}