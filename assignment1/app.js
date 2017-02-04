(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject['$scope'];
	function LunchCheckController($scope){
		$scope.imparte=function(){
			var sir=$scope.name;
		if ($scope.name==undefined ||$scope.name==''){
			$scope.message="Please enter data first";
		}
			else{
				var rezultat=sir.split(',');
				if (rezultat.length<=3){
					return $scope.message="Enjoy!";
				}
				else{
					return $scope.message="Too much!";
				}
			}
		}

	}


})();