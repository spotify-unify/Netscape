'use strict';

var MainCtrl = ["$scope", function($scope) {

  $scope.buttonClicked = function() {
    console.log("hello");
  }
  $('.selectpicker').selectpicker();
}];


MainCtrl.$inject = ['$scope'];

export default MainCtrl;
