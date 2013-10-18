require.config({
  baseUrl: "/components/form-client-lib/src/static/js/lib/"
  , shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: '$.fn.popover'
    }
  }
  , paths: {
    app         : ".."
    , collections : "../collections"
    , data        : "../data"
    , models      : "../models"
    , helper      : "../helper"
    , templates   : "../templates"
    , views       : "../views"
    //NEW : add the rest related js files to the require config
    , rest				:	"../rest"
    //TODO should not be here
    , display 		: "../display"
  }
});
require(['app/app'], function(app){
  console.log('Init form client')
  app.initialize();
});
