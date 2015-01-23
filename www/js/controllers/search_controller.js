var app = angular.module("app");

app.controller('SearchCtrl', function($scope) {

  $scope.players = [
    {name: "Michael Verdi", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: true },
    {name: "Rafael Nadal", photo: "http://placehold.it/50x50", availability: "All the time, I prefer mornings though", rating: "Advanced 7.0", record: "200-18", favorited: false },
    {name: "Roger Federer", photo: "http://placehold.it/50x50", availability: "I have a very limited schedule. Mostly between 2pm-3pm weekdays", rating: "Advanced 7.0", record: "500-100", favorited: false }
  ]

})