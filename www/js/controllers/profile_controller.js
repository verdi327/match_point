var app = angular.module("app");

app.controller('ProfileCtrl', function($scope, $filter) {
  $scope.currentUser = {id: 1}

  $scope.user = {
    name: "Michael Verdi",
    photo: "http://placehold.it/100x100",
    rating: "Starting 4.5",
    record: "10-2",
    availability: "Weekdays after 5pm, Weekends anytime",
    id: 1
  }

  $scope.edit = function() {
    
  }

  $scope.matchResults = [
    {result: "W", score: "6-3 2-6 7-5", opponent: "R. Nadal", date: "1288323623006"},
    {result: "W", score: "6-3 6-4", opponent: "R. Federer", date: "1288323623019"},
    {result: "L", score: "6-4 2-6 7-5", opponent: "M. Sharapova", date: "1288323623106"},
    {result: "W", score: "2-6 6-4 7-5", opponent: "T. Bacon", date: "1288323625006"},
    {result: "L", score: "1-6 0-6", opponent: "C. Shooting-Star", date: "1288323623008"},
    {result: "W", score: "7-6 7-6", opponent: "L. Longasslastname", date: "1288623623003"},
  ]
})