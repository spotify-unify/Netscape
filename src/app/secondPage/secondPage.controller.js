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

        $Spotify.search('Nirvana', 'artist').then(function (data) {
            //var artist_id = data["artists"]["items"][0]["id"];
            var artist_id = data.artists.items[0].id;

            console.log($Spotify.getArtistTopTracks(artist_id, 'SE'));
        });
        
    }
}

SecondPageCtrl.$inject = ['$scope', '$state', '$stateParams', 'd3','LastFMService', 'Spotify'];


export default SecondPageCtrl;
