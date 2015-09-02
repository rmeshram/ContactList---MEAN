angular.module('myApp', []).controller('AppCtrl', function($scope, $http) {

	console.log("controller started");
	var refresh = function() {

		$http.get('/contactlist').success(function(response) {
			console.log("Got response")
			$scope.contactlist = response;
		})
	}
	refresh()

	$scope.addContact = function() {
		console.log("now seding the req for the adding contact")
		$http.post('/contactlist', $scope.contact).success(function(response) {
			refresh()
		})

	}

	$scope.remove = function(id) {
		console.log(id)
		console.log("now seding the req for the REMOVING contact" + id)
		$http.delete('/contactlist/' + id).success(function(response) {
			refresh()
		})

	}

	$scope.edit = function(id) {

		console.log(id);
		$http.get('/contactlist/' + id).success(function(response) {
			$scope.contact = response;
		})
	}

	$scope.update = function() {
		$http.put('/contactlist/' + $scope.contact._id,$scope.contact).success(function(response) {
			refresh()
		});

	};
	
});