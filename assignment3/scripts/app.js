(function () {
	'use strict';
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController )
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);

	function FoundItemsDirective(){
		var ddo = {
			templateUrl:'foundItems.html',
			scope: {
				found:'<',
				onRemove:'&',
				message: '<'
			},
			controller:FoundItemsDirectiveController,
			controllerAs: 'items',
			bindToController:true,
		}
		return ddo;
	}

	function FoundItemsDirectiveController(){
		var items = this;

	}

	NarrowItDownController.$inject=['MenuSearchService']
	function NarrowItDownController (MenuSearchService, $http) {
	  var NID = this;
	  NID.searchTerm = "";
	  NID.found = []; 
	  NID.searching = false;
	  NID.systemMessage = "";

	  NID.performSearch= function(){
	  	NID.systemMessage = "";
	  	NID.searching = true;
	  	NID.found = [];
	  	var search = NID.searchTerm;
	  	if ( search.length == 0 ){
	  		NID.searching = false;
	  		NID.systemMessage = "Nothing Found";
	  		return;
	  	}
	  	var p = MenuSearchService.getMatchedMenuItems(search);
	  	p.then(function(data){
	  		NID.found = data;
	  		if ( data.length == 0 ){
	  			NID.systemMessage = "Nothing Found";
	  		}
	  		NID.searching = false;
	  	});
	  }

	  NID.removeItem=function(index){
	  	NID.found.splice(index, 1);
	  	if ( NID.found == 0 ){
	  		NID.systemMessage="You've removed all items from your list.";
	  	}
	  }
	}

	MenuSearchService.$inject=['$http']
	function MenuSearchService( $http ){
		var service = this;
		service.getMatchedMenuItems = function(searchTerm){
			searchTerm = searchTerm.toLowerCase();
			return $http({
			  method: 'GET',
			  url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
			})
			.then(function (result) {
				var foundItems = [];
				for (var i = result.data.menu_items.length - 1; i >= 0; i--) {
					var item = result.data.menu_items[i];
					var description = item.description.toLowerCase();
					if ( description.indexOf(searchTerm) !== -1 ){
						foundItems.push(item);
					}
				}
			    // process result and only keep items that match
			    

			    // return processed items
			    return foundItems;
			});
		}
	}




})();
