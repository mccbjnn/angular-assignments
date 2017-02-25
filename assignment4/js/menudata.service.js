(function () {
'use strict';
angular.module('data')
.service('MenuDataService', MenuDataService);
MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  console.log("intra in service");
  var service = this;
  var foundItems = [];
  service.getAllCategories=function () {
    return $http({
      method:"GET",
      url:("https://davids-restaurant.herokuapp.com/categories.json")
      })
    .then(function (response) {
      console.log("ajax");
        var items = response.data;
        console.log("raspuns"+items);
        for (var i = 0; i < items.length; i++) {
            foundItems.push(items[i]);
        }
        console.log("found items"+foundItems);
        return foundItems;
    });
  };
}

})();
