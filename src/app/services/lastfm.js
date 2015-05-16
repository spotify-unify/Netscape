'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.lastfm
 * @description Deals with the requests made to the Lastfm API.
 * # lastfm
 * Factory in the meetTheTurtleApp.
 */
var LastFMService = ["$http", function($http) {

    // Config variables
    var base_url = 'http://ws.audioscrobbler.com/2.0/',
      api_key = '8e42a9ee1b0ad55844dec79c08a9de43',
      format = 'json';

    var lastfm =  {

      // API call to get the top tracks
      getEvents: function(location) {

        var promise = $http.get(base_url,{
          params: {
            'api_key': api_key,
            'method': 'geo.getEvents',
            'format': format,
            'location': location
          }
        }).then(function (response) {
          return response.data;
        });

        return promise;
      }

    };
    return lastfm;

}];

export default LastFMService;
