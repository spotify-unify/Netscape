'use strict';

var city, date, days = 1,dwm = "days",details;

var MainCtrl = ["$scope", "$state", function($scope, $state) {

	var bgPath = "./assets/images/";
	var bgs = ["background01.jpg", "background02.jpg",  "background04.jpg",
	 "background06.jpg", "background07.jpg"];

	var bgIdx = Math.floor(bgs.length * Math.random());

	$('#first-page').css('background-image', 'url(' + bgPath + bgs[bgIdx] +')');

  $scope.destination = city;
  $scope.details = details;
  $scope.timedwm = dwm;
  $scope.date = date;
  $scope.duration = days;

  $scope.buttonClicked = function() {

    details = $scope.details;
    city =  $scope.details.address_components[0].long_name;
    date = $scope.date;
    days = $scope.duration;
    dwm = $scope.timedwm;

    $state.go('second-page', {date: $scope.date, location: $scope.details.address_components[0].long_name,
      duration: $scope.duration, dwm: $scope.timedwm});
  }

  $('.selectpicker').selectpicker();

}];


MainCtrl.$inject = ['$scope', '$state'];

export default MainCtrl;
