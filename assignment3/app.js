(function(){
	'use strict';
	angular.module('NarrowItDownApp',[])
	.controller ('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItems', FoundItemsDirective )
	.constant('ApiUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");


	function FoundItemsDirective() {
	  var ddo = {
	    scope: {
	      items: '<',
	      onRemove: '&'
	    },
	    controller: NarrowItDownDirectiveController,
	    controllerAs: 'narrowCtrl',
	    bindToController: true
	  };

	  return ddo;
	}

	function NarrowItDownDirectiveController() {
		var found=this;
		console.log("directive controller"+found);
	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var narrowCtrl=this;
		var promise=MenuSearchService.getMatchedMenuItems();

		promise.then(function (response) {
		    narrowCtrl.found = response;
			console.log("found in ctrl"+narrowCtrl.found);

		  })
		  .catch(function (error) {
		    console.log("Something went terribly wrong.");
		  });	

		narrowCtrl.removeItem = function () {
	    console.log("functia din controller");
	  	};
	};
	MenuSearchService.$inject = ['$http', 'ApiUrl'];
	function MenuSearchService($http, ApiUrl){
		var service = this;
		service.getMatchedMenuItems=function(searchTerm){
			var response= $http({
					      method: "GET",
					      url: ApiUrl
					    })
					.then(function (result) {
						    // process result and only keep items that match
						    var foundItems=result.data;
                             console.log(JSON.stringify(result.data));
						    // return processed items
						    return foundItems;
						});

			return response;
		};
	};


})();