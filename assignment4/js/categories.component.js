(function () {
'use strict';

angular.module('data')
.component('categoriesList', {
  templateUrl:'templates/categories.html',
  bindings: {
    foundItems:'<'
  }
});

})();
