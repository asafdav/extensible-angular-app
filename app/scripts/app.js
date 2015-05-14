'use strict';

/**
 * @ngdoc overview
 * @name extApp
 * @description
 * # extApp
 *
 * Main module of the application.
 */
angular
  .module('extApp', [
    'ui.router',
    'ui.bootstrap',
    'extApp.constants',
    'restaurantApp',
    'healthApp'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    // For any unmatched url, redirect to the default state
    $urlRouterProvider.otherwise("/search");

    $stateProvider
      .state('main', {
        abstract: true,
        controller: 'MainCtrl',
        url: "",
        templateUrl: "views/layout.html"
      });
  })

  .run(function($rootScope, FEATURES) {
    $rootScope.$features = FEATURES;
  });

/**
* A clone of the Node.js util.inherits() function. This will require
* browser support for the ES5 Object.create() method.
*
* @param {Function} ctor
*   The child constructor.
* @param {Function} superCtor
*   The parent constructor.
*/
angular.inherits = function (ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false
    }
  });
};
