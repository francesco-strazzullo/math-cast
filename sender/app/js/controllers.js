angular.module('math-cast')
  .controller('Home', ['$scope', '$state', function($scope, $state) {
    $scope.start = function() {
      window.receiverGoTo('question1');
      $state.go('question1');
    };
  }])
  .controller('Question1', ['$scope', '$state', function($scope, $state) {
    
  }]);