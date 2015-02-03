var app = angular.module("app");

app.factory("Groups", function($q, $timeout){
  var groups = {}

  var p1 = {name: "Rafael Nadal", photo: "http://placehold.it/50x50", id: 1}
  var p2 = {name: "Roger Federer", photo: "http://placehold.it/50x50", id: 2}
  var p3 = {name: "Maria Sharapova", photo: "http://placehold.it/50x50", id: 3}
  var p4 = {name: "Joe Flacco", photo: "http://placehold.it/50x50", id: 4}
  var p5 = {name: "Ray Lewis", photo: "http://placehold.it/50x50", id: 5}
  var p6 = {name: "Frank Lloyd Wright", photo: "http://placehold.it/50x50", id: 6}
  var p7 = {name: "President Obama", photo: "http://placehold.it/50x50", id: 7}
  var p8 = {name: "Keleman Papp", photo: "http://placehold.it/50x50", id: 8}
  var p9 = {name: "Greg Roberts", photo: "http://placehold.it/50x50", id: 9}

  var groupsList = [
    {name: "Single Buddies", players: [p1, p2, p3], id: 1},
    {name: "Doubles Buddies", players: [p4, p5, p6], id: 2},
    {name: "Greg's 4.0 Team", players: [p7, p8, p9], id: 3}
  ]

  groups.all = function() {
    var deferred = $q.defer();

    $timeout( function(){
      deferred.resolve( groupsList );
    }, 100);
    return deferred.promise;
  },

  groups.get = function(id){
    return _.select(groups.all(), function(friend) {return friend.id === parseInt(id)})[0]
  },

  groups.groupNames = function(){
    var groupNames = [
      {name: "Single Buddies", id: 1},
      {name: "Doubles Buddies", id: 2},
      {name: "Greg's 4.0 Team", id: 3}
    ]
    var deferred = $q.defer();

    $timeout( function(){
      deferred.resolve( groupNames );
    }, 100);
    return deferred.promise;
  }

  return groups
})