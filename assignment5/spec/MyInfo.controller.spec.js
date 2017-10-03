describe("SignupController", function() {




  beforeEach(module('public'));

  var $controller;
  var signupController; 
  var $q;
  var $scope;
  var deferred;

  beforeEach(inject(function($controller, _$q_, _$rootScope_) {

    // $controller_ = _$controller_;
    $q = _$q_;
    $scope = _$rootScope_.$new()
    deferred = _$q_.defer();
    
    // Use a Jasmine Spy to return the deferred promise
    

    var myInfoServiceMock = {};
    myInfoServiceMock.checkIfShortnameExists = function (short_name) {
        return 
    };

    myInfoServiceMock.saveInfo = function (data) {
        return 
    };

    spyOn(myInfoServiceMock, 'checkIfShortnameExists').and.returnValue(deferred.promise)
    signupController = $controller('SignupController',
                  {MyInfoService: myInfoServiceMock});
  }));



  it("data received from myInfo service should give no error messages in controller", function() {
    signupController.submitSignupForm();
    deferred.resolve([{ id: 1 }]);
    $scope.$apply();
    expect(signupController.short_name_msg).toBe("");
  });


  it("error in myInfo service should give error message in controller", function() {
    signupController.submitSignupForm();
    deferred.reject([]);
    $scope.$apply();
    expect(signupController.short_name_msg).toBe("No such menu number exists");
  });

});
