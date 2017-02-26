(function () {
'use strict';
angular.module('data')
.service('MenuDataService', MenuDataService);
MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;
  var foundItems = [];
  var itemDetail=[];
  service.getAllCategories=function(){
    return $http({
      method:"GET",
      url:"https://davids-restaurant.herokuapp.com/categories.json"
      })
    .then(function (response) {
        var foundItems = response.data;
        return foundItems;
    }, function (error) {
        console.error("error"+error);
      });
  };

  service.getItemsForCategory=function(categoryShortName){
        return $http({
          method:"GET",
          url:("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
          })
        .then(function (response) {
            var itemDetail = response.data;
            return itemDetail;
        }, function (error) {
            console.error("error"+error);
        });
      };
}

})();
