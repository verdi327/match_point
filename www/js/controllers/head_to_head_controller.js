var app = angular.module("app");

app.controller('HeadToHeadCtrl', function($scope, Players, $state, MatchupResults) {
  $scope.matchup = {player1: "", player2: ""}
  $scope.player1 = { "players" : [], "search" : '' };
  $scope.player2 = { "players" : [], "search" : '' };

  $scope.player1Search = function() {
    Players.search($scope.player1.search).then(
      function(matches) {
        $scope.player1.players = matches;
      }
    )
  }

  $scope.player2Search = function() {
    Players.search($scope.player2.search).then(
      function(matches) {
        $scope.player2.players = matches;
      }
    )
  }

  $scope.findResults = function(){
    MatchupResults.set($scope.matchup);
    $scope.matchup = {player1: "", player2: ""}
    $scope.player1 = { "players" : [], "search" : '' };
    $scope.player2 = { "players" : [], "search" : '' };
    $state.go("app.head-to-head-result");
  }

})