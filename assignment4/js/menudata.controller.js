(function () {
'use strict';

angular.module('data')
.controller('DataController', DataController);


DataController.$inject = ['foundItems'];
function DataController(foundItems) {
  var dataList = this;
  dataList.foundItems=foundItems;
}

})();
