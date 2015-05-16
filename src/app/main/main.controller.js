'use strict';

var MainCtrl = ["$scope", function($scope) {


    $scope.result = '';
    $scope.options = null;
    $scope.details = '';

  $scope.buttonClicked = function() {
    console.log("hello");
  }
  $('.selectpicker').selectpicker();
}];


MainCtrl.$inject = ['$scope'];

export default MainCtrl;
