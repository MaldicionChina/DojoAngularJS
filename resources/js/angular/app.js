'use strict';

var spinnerBankAngularApp = angular.module('spinnerBankAngularApp', [
    'ngRoute',
    'productos.controllers',
    'productos.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../../pages/Principal.html',
        controller: 'prodControler'
      })
<<<<<<< HEAD
      .when('/productos',{
        templateUrl: '../../pages/Producto.html',
        controller: 'prodControler'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
=======
      .otherwise({
        redirectTo: '/'
      });
>>>>>>> master
