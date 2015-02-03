var app = angular.module("app");

app.controller('SubmitScoreCtrl', function($scope, Players, $filter, $state, $timeout, $ionicHistory, $ionicSlideBoxDelegate) {
  currentUser = {name: "Michael Verdi", photo: "http://placehold.it/50x50", id: 10}
  $scope.matchResult = {
    players: [],
    score: [],
    date: ""
  };

  $scope.data = { "players" : [], "search" : '' };

  $scope.resetSearch = function(){
    $scope.data = { "players" : [], "search" : '' };
  }

  $scope.search = function() {
    Players.search($scope.data.search).then(
      function(matches) {
        $scope.data.players = matches;
      }
    )
  }

  buildSets = function(){
    $scope.matchResult.score = [];
    _($scope.sets).times(function(n){
      n++
      var result = {}
      result["set"] = n
      result[$scope.currentUserId] = ""
      result[$scope.oppId] = ""
      $scope.matchResult.score.push(result);
    });
  };

  $scope.setSets = function(number) {
    $scope.sets = number;
    buildSets();
  };

  $scope.isActive = function(number) {
    return number === $scope.sets;
  };

  $scope.selectOpponent = function(player){
    $scope.selectedOpponent = player;
    $scope.matchResult.players = [];
    $scope.oppId = "p" + player.id;
    $scope.currentUserId = "p" + currentUser.id;
    $scope.matchResult.players.push($scope.oppId);
    $scope.matchResult.players.push($scope.currentUserId);
  };

  $scope.showObj = function() {
    console.log($scope.matchResult);
  };

  $scope.formatSetScore = function() {
    var score = ""
    _.each($scope.matchResult.score, function(set){
      var cleaned = _.omit(set, "set", "$$hashKey")
      var stringified = _.values(cleaned).join("-");
      score = score + (stringified + " ");
    });
    return score;
  }

  resetForm = function() {
    $scope.matchResult = {
      players: [],
      score: [],
      date: ""
    };
    $scope.selectedOpponent = '';
    $ionicSlideBoxDelegate.slide(0);
  }

  $scope.submitScore = function(){
    $timeout( function(){
      resetForm();
      $ionicHistory.currentView($ionicHistory.backView());
      $state.go("app.feed", {location: 'replace'});
    }, 1000);
  }


})