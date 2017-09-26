(function () {
'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		
		// Redirect to home page if no other URL matches
  		$urlRouterProvider.otherwise('/');

  		$stateProvider.state('home', {
		    url: '/',
		    templateUrl: 'src/MenuApp/templates/home.template.html'
		});

		$stateProvider.state('category', {
		    url: '/categories',
		    templateUrl: 'src/MenuApp/templates/categories.template.html',
		    controller: 'CategoriesCtrl as catList',
		    resolve: {
		      items: ['MenuDataService', function (MenuDataService) {

		        return MenuDataService.getAllCategories();
		      }]
		    }
		});

		$stateProvider.state('items', {
		    url: '/items/{short_name}',
		    templateUrl: 'src/MenuApp/templates/items.template.html',
		    controller: 'ItemsCtrl as itemList',
		    resolve: {
		      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService ) {
		      	var sn = $stateParams.short_name;
		        return MenuDataService.getItemsForCategory(sn);
		      }]
		    }
		});

	}
})();