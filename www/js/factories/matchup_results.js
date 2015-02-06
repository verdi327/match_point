var app = angular.module("app");

app.factory("MatchupResults", function($q, $timeout){
  var matchup = {}

  var matchResults = {
    results: [
      {result: "W", score: "6-3 2-6 7-5", winner: "Maria Sharapova", date: "1288323623006"},
      {result: "W", score: "6-3 6-4", winner: "Maria Sharapova", date: "1288323623019"},
      {result: "W", score: "6-4 2-6 7-5", winner: "M. Sharapova", date: "1288323623106"},
      {result: "W", score: "2-6 6-4 7-5", winner: "Serena Williams", date: "1288323625006"},
      {result: "W", score: "1-6 0-6", winner: "Serena Williams", date: "1288323623008"}
    ],

    leadingPlayer: "Maria Sharapova",
    record: "5-3",
    tied: false
  }

  matchup.set = function(players){
    matchup["players"] = players
  }

  matchup.getPlayers = function(){
    return matchup.players
  }

  matchup.results = function(){
    var deferred = $q.defer();

    $timeout( function(){
      deferred.resolve( matchResults );
    }, 100);
    return deferred.promise;
  }

  return matchup
})