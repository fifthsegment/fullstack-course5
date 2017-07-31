(function () {
	'use strict';
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
	  var itemBuyer = this;
	  itemBuyer.items_tobuy = ShoppingListCheckOffService.getItems('tobuy');
	  
	  itemBuyer.boughtItem = function ( index ) {
	  	ShoppingListCheckOffService.boughtItem(index)
	  }
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
	  var itemBought = this;
	  itemBought.items_bought = ShoppingListCheckOffService.getItems('bought');
	}

	function ShoppingListCheckOffService() {
	  var service = this;

	  // List of items to buy
	  var items_tobuy = [
	  		{name:'Cookies', quantity: 10},
		  {name:'Chips', quantity: 2},
		  {name:'Sugary Drinks', quantity: 1},
		  {name:'Pretzels', quantity: 3},
		  {name:'Granola Bars', quantity: 2},
		];
	  var items_bought = [];

	  service.boughtItem = function ( index ){
	  	var item = items_tobuy.splice(index, 1);
	  	items_bought.push(item[0]);
	  }

	  service.getItems = function ( listtype ) {
	  	if ( listtype === 'tobuy'){
	  		return items_tobuy;
	  	}else if ( listtype === 'bought' ){
	  		return items_bought;
	  	}
	  };
	}


})();
