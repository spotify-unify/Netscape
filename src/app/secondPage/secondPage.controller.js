'use strict';

class SecondPageCtrl {
    constructor ($scope, $state, $stateParams, d3, LastFMService, $Spotify) {


        var holidayDate = new Date($stateParams.date),
            holidayLocation = $stateParams.location,
            holidayDuration = $stateParams.duration,
            dwm = $stateParams.dwm,
            endDate = new Date($stateParams.date);

        $scope.location = holidayLocation;
        $scope.backupConcerts = [];
        $scope.concerts = [];

        if(dwm === "days") {
          endDate.setDate(endDate.getDate() + holidayDuration);
        } else
        if(dwm === "weeks")
          endDate.setDate(endDate.getDate() + holidayDuration*7);
        else if(dwm === "months")
          endDate.setDate(endDate.getDate() + holidayDuration*30);

        function filterConcerts(concerts){
            var _ = window._
            var groups = _.groupBy(concerts, function(concert){
                return new Date((new Date(concert.startDate)).toDateString());
            });
            var newGroups = []
            for(var date in groups){
                console.log((new Date(date)).getDate())
                newGroups.push({
                    x: (new Date(date)).getTime(),
                    y: groups[date].length
                });
            }
            return newGroups
        }
        $scope.series = [{
            name:"Series",
            data:[]
        }]
        $scope.options = {
            renderer: 'bar'
        };

        LastFMService.getEvents(holidayLocation)
          .then(function(data) {

            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December"

            function addZero(i) {
              if (i < 10) {
                i = "0" + i;
              }
              return i;
            }

            var tmp = data.events.event,
                i, concertDate;

            for(i=0;i<tmp.length;i++) {

              concertDate = new Date(tmp[i].startDate);

              if(concertDate >= holidayDate && concertDate <= endDate) {
                tmp[i].day = concertDate.getDate();
                tmp[i].month = month[concertDate.getMonth()];
                tmp[i].timeHours = addZero(concertDate.getHours());
                tmp[i].timeMinutes = addZero(concertDate.getMinutes());
                $scope.concerts.push(tmp[i]);
              }
            }
              $scope.series = [{
                  name: "Series",
                  data: filterConcerts($scope.concerts)
              }]

              $scope.backupConcerts = $scope.concerts;

          });

      $scope.generatePlaylist = function() {
        getSongs();
      }

      var updateConcerts = function(startDate,finishDate) {

          var i,concertDate;

          $scope.concerts = [];

          for(i=0;i<$scope.backupConcerts.length;i++) {

            concertDate = new Date($scope.backupConcerts[i].startDate);

            if(concertDate >= startDate && concertDate <= finishDate) {
              $scope.concerts.push($scope.backupConcerts[i]);
            }
          }
      }

        function testsongs(){
            console.log($scope.backupConcerts);
            console.log($scope.artists.headliner);
        }


        var playlist_songs = [];
        // undefined? concerts?

        function getSongs() {

        $Spotify.login().then(function (data) {

          $Spotify.getCurrentUser().then(function (user_id) {
            console.log("User id: ", user_id);
            $Spotify.createPlaylist(user_id.id, { name: 'Unify - Venew' }).then(function (playlist) {
              console.log("Playlist id: ", playlist);
              console.log(playlist_songs);
              $Spotify.addPlaylistTracks(user_id.id, playlist.id, playlist_songs.slice(0,50));
            });
          });
        });

        console.log($scope.concerts);
        $scope.concerts
        for(var i = 0; i < $scope.concerts.length; i++){
            var artist = $scope.concerts[i].artists.headliner;
            console.log(artist);
            $Spotify.search(artist, 'artist').then(function (data) {
                //var artist_id = data["artists"]["items"][0]["id"];
                var artist_id = data.artists.items[0].id;

                var top_tracks = $Spotify.getArtistTopTracks(artist_id, 'SE').then(function (data) {
                    var top_five_tracks = data.tracks.slice(0,5);

                  top_five_tracks.forEach(function (track) {
                    playlist_songs.push(track.id);
                  });
                });
            });
        }
        }

        console.log(playlist_songs);
    }


}

SecondPageCtrl.$inject = ['$scope', '$state', '$stateParams', 'd3','LastFMService', 'Spotify'];


export default SecondPageCtrl;


