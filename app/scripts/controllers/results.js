/**
 * Created by asafdavid on 5/14/15.
 */
angular.module('extApp').controller('ResultsCtrl', function($scope, $modal) {
  $scope.resultObjects = {};

  $scope.contact = function() {
    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'views/contact.html',
      size: 'md'
    });
  };
});
