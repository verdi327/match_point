var app = angular.module("app");

app.controller('MatchRequestsCtrl', function($scope, $ionicModal, $timeout, $filter) {
  var p1 = {name: "Maria Sharapova", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: false, id: 2 }
  var p2 = {name: "Roger Federer", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: false, id: 3 }
  var p3 = {name: "Rafael Nadal", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: false, id: 4 }
  
  $scope.matchRequests = [
    {player: p1, date: "1288323623006", message: "Looking to play today after 5pm.  Latest I can go is 9pm.  I don't have a court yet."},
    {player: p2, date: "1288323623006", message: "Looking to play today after 5pm.  Latest I can go is 9pm.  I don't have a court yet."},
    {player: p3, date: "1288323623006", message: "Looking to play today after 5pm.  Latest I can go is 9pm.  I don't have a court yet."}
  ]
})