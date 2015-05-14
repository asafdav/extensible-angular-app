/**
 * Created by asafdavid on 5/14/15.
 */
function RestaurantSearchCtrl($scope, $state) {
  // No need to explicitly pass the injected dependencies, provided they
  // are ordered consistently. otherwise, provide an order list.
  RestaurantSearchCtrl.super_.apply(this, arguments);
};
angular.inherits(RestaurantSearchCtrl, SearchCtrl);

RestaurantSearchCtrl.prototype.init = function() {
  this.categories = [
    {name: 'Italian'},
    {name: 'Chinese'},
    {name: 'Fast Food'}
  ];

  this.$scope.states.nextState = '^.results';
};

angular.module('restaurantApp').controller('restaurant.searchCtrl', RestaurantSearchCtrl);
