/**
 * Created by asafdavid on 5/14/15.
 */
angular.module('healthApp').controller('health.hmoCtrl', function($scope, $state) {
  $scope.hmos = [
    {logo: 'images/maccabi.jpg', name: 'Maccabi'},
    {logo: 'images/clalit.gif', name: 'Clalit'},
    {logo: 'images/meuhedet.jpeg', name: 'Meuhedet'}
  ];

  $scope.selectHmo = function() {
    $state.go('^.results');
  }
});
