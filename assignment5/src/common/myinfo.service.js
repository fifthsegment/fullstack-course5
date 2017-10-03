(function(){
	"use strict";
	angular.module("common")
	.service("MyInfoService", MyInfoService);


	MyInfoService.$inject = ['ApiPath', '$q', '$http'];
	function MyInfoService(ApiPath, $q, $http){
		var service = this;
		service.user = null;
		service.checkIfShortnameExists = function( short_name, callback ){
			short_name = short_name.toUpperCase();
			return $q(function(resolve, reject){
				$http.get(ApiPath + '/menu_items/'+short_name+'.json')
					.then(function (response) {
						if (response.data.image_present){
							response.data.image_url = ApiPath+'/images/'+short_name+".jpg";
						}
		      			resolve(response.data);
		    		},function(response){
		    			reject("Not found");
		    		})

			})
		}

		service.saveInfo = function( user ){
	  		service.user = user;
	  	}

		service.getUserInfo = function(){

			return service.user;
		}
	}
})()