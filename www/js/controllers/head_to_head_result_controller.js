var app = angular.module("app");

app.controller('HeadToHeadResultCtrl', function($scope, Players, $state, MatchupResults) {
  $scope.matchup = MatchupResults.getPlayers();

  MatchupResults.results().then(
    function(results) {
      $scope.data = results
    }
  )


})