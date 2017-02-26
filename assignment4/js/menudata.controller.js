(function () {
'use strict';

angular.module('data')
.controller('DataController', DataController);

DataController.$inject = ['receivedItems'];
function DataController(receivedItems) {
  var dataList = this;
  dataList.foundItems=receivedItems;
  console.log("DataController"+JSON.stringify(receivedItems))
}

})();
