/**
 * Created by asafdavid on 5/14/15.
 */
function SearchCtrl($scope, $state) {
  this.$scope = $scope;
  this.$state = $state;
  $scope.states = {};

  this.init();
};

SearchCtrl.prototype.search = function() {
  this.$state.go(this.$scope.states.nextState);
};

SearchCtrl.prototype.init = function() {
  this.categories = [];
};

angular.module('extApp').controller('SearchCtrl', SearchCtrl);
