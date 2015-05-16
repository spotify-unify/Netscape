'use strict';

var MainCtrl = ["$scope", function($scope) {

	var bgPath = "./assets/images/";
	var bgs = ["background01.jpg", "background02.jpg", "background03.jpg", "background04.jpg",
		"background05.jpg", "background06.jpg", "background07.jpg"];

	var bgIdx = Math.floor(bgs.length * Math.random());

	$('body').css('background-image', 'url(' + bgPath + bgs[bgIdx] +')');

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
