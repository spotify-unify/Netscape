'use strict';

var MainCtrl = ["$scope", "$state", function($scope, $state) {

	var bgPath = "./assets/images/";
	var bgs = ["background01.jpg", "background02.jpg",  "background04.jpg",
	 "background06.jpg", "background07.jpg"];

	var bgIdx = Math.floor(bgs.length * Math.random());

	$('#first-page').css('background-image', 'url(' + bgPath + bgs[bgIdx] +')');

  $('.dropdown-menu li').on('click', function () {
    console.log("heyy");
  });

    $scope.details = "";

  $scope.buttonClicked = function() {
    console.log($scope.details);
    console.log($scope.duration);
    console.log($scope.timedwm);
    $state.go('second-page', {date: $scope.date, details: $scope.details,
      location: $scope.details.address_components[0].long_name});

  }
  $('.selectpicker').selectpicker();
}];


MainCtrl.$inject = ['$scope', '$state'];

export default MainCtrl;
