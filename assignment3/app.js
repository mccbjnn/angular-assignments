(function(){
	'use strict';
	angular.module('NarrowItDownApp',[])
	.controller ('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItems', FoundItemsDirective )
	.constant('ApiUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");


	function FoundItemsDirective() {
	  var ddo = {
	  	templateUrl: 'list.html',
	    scope: {
	      found: '<',
	      onRemove: '&'
	    },
	    controller: NarrowItDownDirectiveController,
	    controllerAs: 'narrowCtrl',
	    bindToController: true
	  };

	  return ddo;
	}

	function NarrowItDownDirectiveController() {
	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var narrowCtrl=this;
		narrowCtrl.search="";
		narrowCtrl.getMatchedMenuItems=function(){
			var promise=MenuSearchService.getMatchedMenuItems(narrowCtrl.search);
			promise.then(function (response) {
		    narrowCtrl.found=response;
	 		return narrowCtrl.found;
		  })
		  .catch(function (error) {
		    console.log("Something went terribly wrong.");
		  });	
 		
		}
		narrowCtrl.removeItem = function () {
	    /*console.log("functia din controller");*/
	  	};

	 
	};
	MenuSearchService.$inject = ['$http', 'ApiUrl'];
	function MenuSearchService($http, ApiUrl){
		var service = this;
		var foundItems=[]
		service.getMatchedMenuItems=function(searchTerm){
			var search=searchTerm;
			console.log(searchTerm);
			var response= $http({
					      method: "GET",
					      url: ApiUrl
					    })
						.then(function (result) {
						    // process result and only keep items that match
						    var all=result.data.menu_items;
							for(var i = 0; i < all.length; i++){
						    	if(all[i].description.indexOf(searchTerm) !== -1){
						    		foundItems.push(all[i]);
						    		}
						    	}
						    // return processed items
						    return foundItems;
						});
			return response;
		};

	};
	
})();