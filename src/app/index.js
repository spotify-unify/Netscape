'use strict';

import MainCtrl from './main/main.controller';
import SecondPageCtrl from './secondPage/secondPage.controller';

angular.module('methuselah', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'mgcrea.ngStrap'])
  .controller('MainCtrl', MainCtrl)
  .controller('SecondPageCtrl', SecondPageCtrl)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('second-page', {
        url: '/second-page',
        templateUrl: 'app/secondPage/secondPage.html',
        controller: 'SecondPageCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
