(function () {
'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController)

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
		$scope.lunchMenuString = ""

		$scope.message = ""
		$scope.CheckIfTooMuch = function(){
			if ($scope.lunchMenuString == ""){
				$scope.message = "Please enter data first"
				return;
			}
			var totalItems = 0;
			var menuitems = $scope.lunchMenuString.split(",");
			for (var i = 0; i < menuitems.length; i++) {
				if (menuitems[i] != "" ){
					totalItems++;
				}
			}
			if ( totalItems <= 3 ){
				$scope.message = "Enjoy!"
			}
			if ( totalItems > 3 ){
				$scope.message = "Too much!"
			}
		}

		$scope.getMessage = function(){
			return $scope.message;
		}
	}

})();