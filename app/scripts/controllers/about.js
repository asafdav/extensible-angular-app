'use strict';

/**
 * @ngdoc function
 * @name extensibleAngularAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the extensibleAngularAppApp
 */
angular.module('extensibleAngularAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
