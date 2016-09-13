/**
 * Main AngularJS Web Application
 */
angular.module('app', ['ngRoute']);

/**
 * Configuring the Routes
 */
angular.module('app').config(function ($routeProvider, $locationProvider) {

  /* Enabling HTML5 routes ( Removing #! ) */
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
    .when('/', routeConfig('Home'))
    .when('/page', routeConfig('Page'))
    .otherwise({
      redirectTo: '/'
    });

});

function routeConfig (name) {

  var template = name.charAt(0).toLowerCase() + name.slice(1);
  var controller = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    templateUrl: 'components/' + template + '/' + template + '.html',
    controller: controller + 'Controller'
  }
}