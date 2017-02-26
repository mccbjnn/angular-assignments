(function () {
'use strict';

angular.module('data')
.component('itemsList', {
  templateUrl: 'templates/items.html',
  bindings: {
    itemDetail: '<'
  }
});

})();