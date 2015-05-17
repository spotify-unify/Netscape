'use strict';

class SecondPageCtrl {
    constructor ($scope, $state, $stateParams, d3, LastFMService, $Spotify) {

        var holidayDate = new Date($stateParams.date),
            holidayLocation = $stateParams.location,
            holidayDuration = $stateParams.duration,
            dwm = $stateParams.dwm,
            endDate = new Date($stateParams.date);

        $scope.backupConcerts = [];
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

            $scope.backupConcerts = $scope.concerts;
          });

        function updateConcerts(startDate,finishDate) {

        }

        $Spotify.search('Nirvana', 'artist').then(function (data) {
            //var artist_id = data["artists"]["items"][0]["id"];
            var artist_id = data.artists.items[0].id;

            console.log($Spotify.getArtistTopTracks(artist_id, 'SE'));
        });

    }
}

SecondPageCtrl.$inject = ['$scope', '$state', '$stateParams', 'd3','LastFMService', 'Spotify'];


export default SecondPageCtrl;
