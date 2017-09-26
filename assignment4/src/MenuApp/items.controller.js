(function(){
	angular.module('MenuApp')
	.controller('ItemsCtrl', ItemsCtrl);


	ItemsCtrl.$inject = ['items'];
	function ItemsCtrl(items){
		var itemList = this;
		itemList.items = items;
	}

})()