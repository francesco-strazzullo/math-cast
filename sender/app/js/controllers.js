angular.module('math-cast')
  .controller('Home', ['$scope', '$state', function($scope, $state) {
    $scope.start = function() {
      window.sendToReceiver('start');
      $state.go('questions');
    };
  }])
  .controller('Questions', ['$scope', '$state','QuestionsData', function($scope, $state,QuestionsData) {
    $scope.data = QuestionsData;
    $scope.currentQuestion = 0;

    $scope.answer = function(index){
    	 window.sendToReceiver(index);
    	 $scope.currentQuestion++;

    	 if($scope.currentQuestion >= QuestionsData.length){
    	 	$state.go('end');
    	 }
    };
  }]);