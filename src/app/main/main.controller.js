'use strict';

var MainCtrl = ["$scope", "$state", function($scope, $state) {

	var bgPath = "./assets/images/";
	var bgs = ["background01.jpg", "background02.jpg", "background03.jpg", "background04.jpg",
		"background05.jpg", "background06.jpg", "background07.jpg"];

	var bgIdx = Math.floor(bgs.length * Math.random());

	$('#first-page').css('background-image', 'url(' + bgPath + bgs[bgIdx] +');');

  $scope.details = "";

  $scope.buttonClicked = function() {
    $state.go('second-page', {date: $scope.date, location: $scope.details.address_components[0].long_name,
      duration: $scope.duration, dwm: $scope.timedwm});
  }

  $('.selectpicker').selectpicker();

}];


MainCtrl.$inject = ['$scope', '$state'];

export default MainCtrl;
