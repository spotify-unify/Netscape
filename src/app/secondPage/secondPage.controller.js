'use strict';

class SecondPageCtrl {
    constructor ($scope, $state, $stateParams) {
        console.log("From first page: ", $stateParams);
        $scope.date = $stateParams.date;
        $scope.details = $stateParams.details;
    }
}

SecondPageCtrl.$inject = ['$scope', '$state', '$stateParams'];

export default SecondPageCtrl;
