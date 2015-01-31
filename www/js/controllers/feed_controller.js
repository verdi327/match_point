var app = angular.module("app");

app.controller('FeedCtrl', function($scope, $filter, $state, $timeout) {
  var matchResults = [
    { date: "1288323623006", score: "6-3 2-6 7-5", type: "match-result",
      winner: {shortName: "R. Nadal", photo: "http://placehold.it/50x50", rating: "Advanced 7.0", id: "1"},
      loser: {shortName: "R. Federer", photo: "http://placehold.it/50x50", rating: "Advanced 7.0", id: "2"}
    },

    { date: "1288323623006", score: "7-6 7-6", type: "match-result",
      winner: {shortName: "M. Verdi", photo: "http://placehold.it/50x50", rating: "Advanced 4.0", id: "10"},
      loser: {shortName: "G. Longasslastnam", photo: "http://placehold.it/50x50", rating: "Advanced 5.0", id: "3"}
    },

    { date: "1288323623006", score: "7-6 2-6 6-3", type: "match-result",
      winner: {shortName: "M. Verdi", photo: "http://placehold.it/50x50", rating: "Advanced 4.0", id: "10"},
      loser: {shortName: "G. Mueller", photo: "http://placehold.it/50x50", rating: "Advanced 5.0", id: "4"}
    },
  ]

  var playerRatings = [
    {fullName: "Rafael Nadal", photo: "http://placehold.it/50x50", oldRating: "Starting 7.0", newRating: "Advanced 7.0", change: "up", type: "player-rating", id: "3"},
    {fullName: "Michael Verdi", photo: "http://placehold.it/50x50", oldRating: "Starting 4.0", newRating: "Starting 3.5", change: "down", type: "player-rating", id: "10"},
    {fullName: "Roger Federer", photo: "http://placehold.it/50x50", oldRating: "Starting 5.0", newRating: "Advanced 7.0", change: "up", type: "player-rating", id: "3"},
    {fullName: "Andy Murray", photo: "http://placehold.it/50x50", oldRating: "Advanced 5.0", newRating: "Starting 5.0", change: "down", type: "player-rating", id: "2"}
  ]

  $scope.feed = _.shuffle(matchResults.concat(playerRatings))

  $scope.viewProfile = function(playerId){
    $state.go('app.profile', {userId: playerId })
  }

  $scope.loadMore = function() {
    console.log('Loading more!');
    $timeout(function() {
      $scope.feed.push({
        fullName: "Andy Murray",
        photo: "http://placehold.it/50x50",
        oldRating: "Advanced 5.0",
        newRating: "Starting 5.0",
        change: "down",
        type: "player-rating",
        id: "2"
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
    }, 1000);
  }

  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });
})