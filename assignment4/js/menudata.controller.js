(function () {
'use strict';

angular.module('data')
.controller('DataController', DataController);


DataController.$inject = ['MenuDataService','foundItems'];
function DataController(MenuDataService,foundItems) {
  var dataList = this;
  dataList.foundItems=foundItems;
 
}

})();
