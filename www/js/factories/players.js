var app = angular.module("app");

app.factory("Players", function($q, $timeout){
  var players = {}

  var playerList = [
    {name: "Michael Verdi", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: false, id: 1 },
    {name: "Maria Sharapova", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: false, id: 2 },
    {name: "Roger Federer", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: false, id: 3 },
    {name: "Rafael Nadal", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: false, id: 4 },
    {name: "Serena Williams", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: true, id: 5 },
    {name: "Greg Roberts", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: true, id: 6 },
    {name: "Keleman Papp", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: true, id: 7 },
    {name: "Stan Wawrinka", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: false, id: 8 },
    {name: "Novak Djokovic", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: true, id: 9 },
  ]

  players.search = function(searchFilter) {
    var deferred = $q.defer();

    var matches = playerList.filter( function(player) {
      if (searchFilter.length === 0) {
        return false
      } else {
        if(player.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) return true;  
      }
    })

    $timeout( function(){
      deferred.resolve( matches );
    }, 100);
    return deferred.promise;
  },

  players.all = function() {
    var deferred = $q.defer();

    $timeout( function(){
      deferred.resolve( playerList );
    }, 100);
    return deferred.promise;
  },

  players.get = function(id){
    var deferred = $q.defer();

    players.all().then(
      function(players) {
        var foundPlayer = _.select(players, function(player){
          return player.id === parseInt(id)
        })[0]
        deferred.resolve(foundPlayer)
      }
    )
    return deferred.promise;
  }

  return players
})