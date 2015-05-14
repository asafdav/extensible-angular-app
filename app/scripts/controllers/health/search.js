/**
 * Created by asafdavid on 5/14/15.
 */
function HealthSearchCtrl($scope, $state) {
  // No need to explicitly pass the injected dependencies, provided they
  // are ordered consistently. otherwise, provide an order list.
  HealthSearchCtrl.super_.apply(this, arguments);
};
angular.inherits(HealthSearchCtrl, SearchCtrl);

HealthSearchCtrl.prototype.init = function() {
  this.categories = [
    {name: 'Primary Care'},
    {name: 'Cardiologists'},
    {name: 'Psychiatrists'}
  ];

  this.$scope.states.nextState = '^.hmo';
};

angular.module('healthApp').controller('health.searchCtrl', HealthSearchCtrl);
