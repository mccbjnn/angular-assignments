(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['item'];
function ItemsController(item) {
  var itemsDetail = this;
  itemsDetail.itemDetail = item.menu_items;
  console.log("itemsCTRL"+item.menu_items);
}

})();