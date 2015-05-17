'use strict';

import MainCtrl from './main/main.controller';
import SecondPageCtrl from './secondPage/secondPage.controller';
import LastFMService from './services/lastfm';
import StateService from './services/stateService';
import d3Service from './services/d3Service';

angular.module('methuselah', ['spotify', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'mgcrea.ngStrap', 'ngAutocomplete', 'angular-rickshaw'])
  .factory('d3',d3Service)
  .factory('LastFMService',LastFMService)
  .controller('MainCtrl', MainCtrl)
  .controller('SecondPageCtrl', SecondPageCtrl)
  .config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('70a0a5a24d3d48c4869c40e118968036');
    SpotifyProvider.setRedirectUri('http://localhost:3000');
    SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
    // If you already have an auth token
    SpotifyProvider.setAuthToken('85afc505f1394ef4a38f2a427002e705');
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('second-page', {
        url: '/second-page?date&location&duration&dwm',
        templateUrl: 'app/secondPage/secondPage.html',
        controller: 'SecondPageCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
