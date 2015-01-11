angular.module('math-cast')
	.controller('Root', ['$scope', '$state', function($scope, $state) {
		var audioPath = "audio/";
		var manifest = [{
			id: "Good",
			src: "good.mp3"
		}, {
			id: "Bad",
			src: "bad.mp3"
		}];

		createjs.Sound.registerManifest(manifest, audioPath);

		$scope.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();


		// Chiudo l'applicazione quando non ci sono più sender collegati
		$scope.castReceiverManager.onSenderDisconnected = function(event) {
			console.log('Received Sender Disconnected event: ' + event.data);
			if ($scope.castReceiverManager.getSenders().length == 0) {
				window.close();
			}
		};

		$scope.stateBus = $scope.castReceiverManager.getCastMessageBus('urn:x-cast:it.strazz.cast.math.state');
		$scope.soundBus = $scope.castReceiverManager.getCastMessageBus('urn:x-cast:it.strazz.cast.math.sound');

		$scope.stateBus.onMessage = function(event) {
			$state.go(event.data);
		}

		$scope.soundBus.onMessage = function(event) {
			createjs.Sound.play('error' === event.data ? 'Bad' : 'Good');
		}

		$scope.castReceiverManager.start();
	}])
	.controller('Home', ['$scope', '$state', function($scope, $state) {

	}])
	.controller('Question1', ['$scope', '$state', function($scope, $state) {

	}]);