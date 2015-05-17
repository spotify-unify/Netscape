'use strict';

class SecondPageCtrl {
    constructor ($scope, $state, $stateParams, d3, LastFMService, $Spotify) {

        var holidayDate = new Date($stateParams.date),
            holidayLocation = $stateParams.location,
            holidayDuration = $stateParams.duration,
            dwm = $stateParams.dwm,
            endDate = new Date($stateParams.date);

        $scope.concerts = [];

        if(dwm === "days") {
          endDate.setDate(endDate.getDate() + holidayDuration);
        } else
        if(dwm === "weeks")
          endDate.setDate(endDate.getDate() + holidayDuration*7);
        else if(dwm === "months")
          endDate.setDate(endDate.getDate() + holidayDuration*30);



        LastFMService.getEvents(holidayLocation)
          .then(function(data) {

            var tmp = data.events.event,
                i, concertDate;

            for(i=0;i<tmp.length;i++) {

              concertDate = new Date(tmp[i].startDate);

              if(concertDate >= holidayDate && concertDate <= endDate) {
                $scope.concerts.push(tmp[i]);

              }


            }


          });

        var playlist_songs = [];

        // undefined? concerts?
        console.log($scope.concerts);
        $scope.concerts.artists.headliner.forEach( function (artist) {
            $Spotify.search(artist, 'artist').then(function (data) {
                //var artist_id = data["artists"]["items"][0]["id"];
                var artist_id = data.artists.items[0].id;

                var top_tracks = $Spotify.getArtistTopTracks(artist_id, 'SE').then(function (data) {
                    var top_five_tracks = data.tracks.slice(0,5);
                    
                    top_five_tracks.forEach(function (track) {
                        playlist_songs.push(track.name);
                    });
                }); 
            });
        });

        console.log(playlist_songs);
        
    }
}

SecondPageCtrl.$inject = ['$scope', '$state', '$stateParams', 'd3','LastFMService', 'Spotify'];


export default SecondPageCtrl;
