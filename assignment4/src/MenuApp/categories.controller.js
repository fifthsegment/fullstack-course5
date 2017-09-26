(function(){
	angular.module('MenuApp')
	.controller('CategoriesCtrl', CategoriesCtrl);


	CategoriesCtrl.$inject = ['items'];
	function CategoriesCtrl(items){
		var catList = this;
		
		catList.items = items;
	}

})()