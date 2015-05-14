/**
 * Created by asafdavid on 5/14/15.
 */
angular.module('extApp').controller('health.ResultsCtrl', function($scope, $controller, $state, FEATURES) {
  $controller('ResultsCtrl', {$scope: $scope}); // Inherits ResultsCtrl

  // GET the result list
  $scope.resultObjects.results = [
    {logo: 'images/Dr._Cristina_Yang.jpg', title: 'Dr. Cristina Yang', description: "is a fictional character from the medical drama television series Grey's Anatomy, which airs on the American Broadcasting Company (ABC) in the United States. The character was created by series' producer Shonda Rhimes, and is portrayed by actress Ellen Pompeo. Meredith is the series' protagonist, and was introduced as a surgical intern at the fictional Seattle Grace Hospital (later Seattle Grace-Mercy West Hospital, and still later Grey Sloan Memorial Hospital), eventually obtaining the position of resident, and later attending."},
    {logo: 'images/Greys-Anatomy-Season-7-Promo-9.jpg', title: 'Dr. Meredith Grey', description: "s a fictional character from the medical drama television series Grey's Anatomy, which airs on the American Broadcasting Company (ABC) in the United States. The character was created by series producer Shonda Rhimes, and is portrayed by actress Sandra Oh. Introduced as a surgical intern at the fictional Seattle Grace Hospital, Yang worked her way up to resident level, eventually becoming a cardiothoracic surgical fellow, while her relationships with colleagues Meredith Grey (Ellen Pompeo), George O'Malley (T. R. Knight), Izzie Stevens (Katherine Heigl), and Alex Karev (Justin Chambers) formed a focal point of the series"},
    {logo: 'images/Dr._Alex_Karev.jpg', title: 'Dr. Alex Karev', description: "is a fictional character on the ABC television series Grey's Anatomy, portrayed by actor Justin Chambers.[2] Introduced as a surgical intern at the fictional Seattle Grace Hospital, Karev eventually obtained the position of resident, later becoming a pediatric surgical fellow."}
  ]
});
