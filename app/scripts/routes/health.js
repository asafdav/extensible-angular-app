/**
 * Created by asafdavid on 5/14/15.
 */
angular.module('healthApp', [])
  .config(function ($stateProvider, FEATURES) {
    console.log('FEATURES', FEATURES);
    if ('HEALTH' !== FEATURES.application) return;

    $stateProvider
      .state('main.search', {
        url: "/search",
        templateUrl: "views/search.html",
        controller: 'health.searchCtrl as searchCtrl'
      })
      .state('main.hmo', {
        url: "/hmo",
        templateUrl: "views/hmo.html",
        controller: 'health.hmoCtrl'
      })
      .state('main.results', {
        url: "/results",
        templateUrl: "views/results.html"
      });

  });
