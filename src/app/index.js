'use strict';

import MainCtrl from './main/main.controller';
import SecondPageCtrl from './secondPage/secondPage.controller';
import LastFMService from './services/lastfm';
import StateService from './services/stateService';

angular.module('methuselah', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'mgcrea.ngStrap', 'ngAutocomplete'])
  .factory('LastFMService',LastFMService)
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
        url: '/second-page?date',
        templateUrl: 'app/secondPage/secondPage.html',
        controller: 'SecondPageCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
