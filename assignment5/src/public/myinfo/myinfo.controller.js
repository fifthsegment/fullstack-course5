(function(){
	"use strict";
	angular.module('public')
	.controller('MyInfoController', MyInfoController);

	MyInfoController.$inject = ['getUserInfo'];
	function MyInfoController( getUserInfo ) {
	  var ctrl = this;


	  ctrl.userInfo = getUserInfo;

	}
})();