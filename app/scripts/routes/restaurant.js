/**
 * Created by asafdavid on 5/14/15.
 */
angular.module('restaurantApp', [])
  .config(function ($stateProvider, FEATURES) {
    if ('RESTAURANT' !== FEATURES.application) return;

    $stateProvider
      .state('main.search', {
        url: "/search",
        templateUrl: "views/search.html",
        controller: 'restaurant.searchCtrl as searchCtrl'
      })
      .state('main.results', {
        url: "/results",
        templateUrl: "views/results.html",
        controller: 'restaurant.ResultsCtrl'
      });

  });
