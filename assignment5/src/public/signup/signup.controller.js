(function(){
	"use strict";
	angular.module("public")
	.controller("SignupController", SignupController);

	SignupController.$inject = ['MyInfoService'];
	function SignupController( MyInfoService ){
		var ctrl = this;
		ctrl.user = {
			menu_short_name: "",
		}
		ctrl.short_name_msg = ""
		ctrl.form_final_message = ""
		ctrl.submitSignupForm = function(){
			MyInfoService.checkIfShortnameExists(ctrl.user.menu_short_name)
			.then(function(data){
					ctrl.short_name_msg = "";
					ctrl.user.favItem = data;
					MyInfoService.saveInfo(ctrl.user);
					ctrl.form_final_message="Your Information has been saved"
			},function(failure){
				ctrl.form_final_message=""
				ctrl.short_name_msg = "No such menu number exists";
			})
		}
	}
})()