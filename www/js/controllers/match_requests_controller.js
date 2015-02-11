var app = angular.module("app");

app.controller('MatchRequestsCtrl', function($scope, $ionicModal, $timeout, $filter, Ratings) {
  var p1 = {name: "Maria Sharapova", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: false, id: 2 }
  var p2 = {name: "Roger Federer", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: false, id: 3 }
  var p3 = {name: "Rafael Nadal", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: false, id: 4 }
  
  $scope.matchRequests = [
    {player: p1, date: "1288323623006", message: "Looking to play today after 5pm.  Latest I can go is 9pm.  I don't have a court yet."},
    {player: p2, date: "1288323623006", message: "Looking to play today after 5pm.  Latest I can go is 9pm.  I don't have a court yet."},
    {player: p3, date: "1288323623006", message: "Looking to play today after 5pm.  Latest I can go is 9pm.  I don't have a court yet."}
  ]

  $scope.newMatchRequest = {gender: "", minRating: "", maxRating: "", date: "", message: ""}

  $ionicModal.fromTemplateUrl('templates/modals/match-request-form.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openMatchRequestModal = function(){
    $scope.modal.show();
  }

  $scope.closeMatchRequestModal = function() {
    $scope.modal.hide();
  }

  $scope.createMatchRequest = function() {
    $timeout(function() {
      console.log($scope.newMatchRequest);
      $scope.closeMatchRequestModal();
    }, 1000);
  }

  $scope.setMaxRatings = function() {
    console.log("rating", $scope.newMatchRequest.minRating);
    $scope.maxRatings = Ratings.limit($scope.newMatchRequest.minRating);
  }

  $scope.allRatings = Ratings.all();

  $scope.minSelected = function() {
    return ($scope.newMatchRequest.minRating === "") ? true : false
  }
})