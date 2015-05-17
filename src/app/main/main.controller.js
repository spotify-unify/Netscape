'use strict';

var MainCtrl = ["$scope", "$state", function($scope, $state) {

	var bgPath = "./assets/images/";
	var bgs = ["background01.jpg", "background02.jpg", "background03.jpg", "background04.jpg",
		"background05.jpg", "background06.jpg", "background07.jpg"];

	var bgIdx = Math.floor(bgs.length * Math.random());

	$('#first-page').css('background-image', 'url(' + bgPath + bgs[bgIdx] +')');

    $scope.details = "";

  $scope.buttonClicked = function() {
    console.log($scope.details);
    console.log($scope.date);
    console.log("hello");
    console.log($scope.timedwm);
    //$scope.visible = false;
    // if scope > 0
    $state.go('second-page', {date: $scope.date, details: $scope.details});

  }
  $('.selectpicker').selectpicker();
}];


MainCtrl.$inject = ['$scope', '$state'];

export default MainCtrl;
