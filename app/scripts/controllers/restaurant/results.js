/**
 * Created by asafdavid on 5/14/15.
 */
angular.module('extApp').controller('restaurant.ResultsCtrl', function($scope, $controller) {
  $controller('ResultsCtrl', {$scope: $scope}); // Inherits ResultsCtrl

  // GET the result list
  $scope.resultObjects.results = [
    {logo: 'images/englishe-dalal-in.jpg', title: 'Sweet Dallal', description: "  Matan Talmon accompanied his princess on a fairy-tale through an entire meal of Dallal’s desserts and, in the process, discovered a splendid choice of dessert wines."},
    {logo: 'images/english-seatara-in.jpg', title: 'Seatara – the Winner', description: "Oded Pashtetzky visited Sitara-land and his joy knew no bounds."},
    {logo: 'images/english-pasha-in.jpg', title: 'Pasha: where the pleasure is all-included', description: "Roi Malka and his new roommate spent an evening in Istanbul at Pasha – Tel Aviv’s most authentically Turkish restaurant – which captured their heart."}
  ];

  // Add/override properties of the scope
});
