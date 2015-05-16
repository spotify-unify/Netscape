'use strict';

var MainCtrl = ["$scope", function($scope) {

    $scope.details = "";

  $scope.buttonClicked = function() {
    console.log($scope.details);
    console.log($scope.date)
    console.log("hello");
    //$scope.visible = false;

  }
  $('.selectpicker').selectpicker();
}];


MainCtrl.$inject = ['$scope'];

export default MainCtrl;
