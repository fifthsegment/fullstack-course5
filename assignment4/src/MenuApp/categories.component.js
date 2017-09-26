(function(){
	angular.module('MenuApp')
	.component('categories',{
		templateUrl:'src/MenuApp/templates/categories.template.html',
		bindings: {
			items: '<'
		}
	})
})()