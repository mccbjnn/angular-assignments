(function(){
	'use strict';
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var buyCTRl=this;
		buyCTRl.items=ShoppingListCheckOffService.getBuyList();
		buyCTRl.addToBoughtList = function (index) {
			 try {
			      ShoppingListCheckOffService.addToBoughtList(index);
			    } catch (error) {
			      buyCTRl.errorMessage = error.message;
			    }
    		
  		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var boughtCtrl=this;
		boughtCtrl.items=ShoppingListCheckOffService.getBoughtList();
		boughtCtrl.errorMessage="Nothing bought yet."
		
	}

	function ShoppingListCheckOffService(){
		var service = this;
		var buyItems=[{name:"milk",
		              quantity:2},
		             {name:"coffee",
		              quantity:1},
		             {name:"chocolate",
		              quantity:5},
		             {name:"sugar",
		              quantity:1},
		             {name:"cake",
		              quantity:1}];
		var boughtItems=[];
		service.addToBoughtList=function(index) {
				boughtItems.push(buyItems[index]);
				buyItems.splice(index, 1);
				if(buyItems.length==0){
					throw new Error("Everything is bought!");			
				}		
		} 
		service.getBuyList=function(){
			return buyItems;
		}
		service.getBoughtList=function(){
			return boughtItems;
		}
	}
})();