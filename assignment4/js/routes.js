(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

//Redirect to home page if no other URL matches
 $urlRouterProvider.otherwise('/');

 $stateProvider
  // Home page
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories.html',
    controller: 'DataController as dataList',
    resolve: {
      receivedItems: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    },function(err){
      return err;
    }
  })

    .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'templates/items.html',
    controller: "ItemsController as itemsDetail",
    resolve: {
      item: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.itemId);
            }]
    },function(err){
      return err;
    }
  });

}

})();
