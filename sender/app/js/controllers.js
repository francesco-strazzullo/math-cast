angular.module('math-cast')
  .controller('Home', ['$scope', '$state', function($scope, $state) {
    $scope.start = function() {
      window.receiverGoTo('dwarfs');
      $state.go('dwarfs');
    };
  }]);