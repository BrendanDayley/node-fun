app.controller('supportController', function ($scope, $firebaseObject, $firebaseArray, fb) {
	console.log();

	var ref = new Firebase(fb.url);

	var obj = $firebaseObject(ref);

	obj.$loaded().then(function () {



		$scope.numbers = obj.numbers;
		console.log($scope.numbers);
	})
});
