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
        console.log("ajax"+JSON.stringify(response.data);
        var foundItems = response.data;
        return foundItems;
    }, function (error) {
        console.error("error"+error);
      });
  };
}

})();
