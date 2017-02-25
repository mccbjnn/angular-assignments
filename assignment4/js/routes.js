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
      foundItems: ['MenuDataService ', function (MenuDataService ) {
        console.log('intra aici;');
        return MenuDataService.getAllCategories();
      }]
    }
  })



}

})();
