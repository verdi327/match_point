var app = angular.module("app");

app.factory("LoginService", function($q, $timeout){
  var loginService = {}

  loginService.login = function(email, password) {
    var deferred = $q.defer();

    player = {name: "Michael Verdi", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", id: 1 }

    $timeout( function(){
      deferred.resolve( player );
    }, 100);
    return deferred.promise;
  }

  return loginService
})