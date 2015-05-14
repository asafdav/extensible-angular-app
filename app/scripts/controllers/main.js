'use strict';

/**
 * @ngdoc function
 * @name extensibleAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the extensibleAngularAppApp
 */
angular.module('extensibleAngularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
