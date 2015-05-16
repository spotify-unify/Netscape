'use strict';

var MainCtrl = ["$scope", "$state", function($scope, $state) {

    $scope.details = "";

  $scope.buttonClicked = function() {
    console.log($scope.details);
    console.log($scope.date)
    console.log("hello");
    //$scope.visible = false;
    $state.go('second-page', {date: $scope.date, details: $scope.details});

  }
  $('.selectpicker').selectpicker();
}];


MainCtrl.$inject = ['$scope', '$state'];

export default MainCtrl;
