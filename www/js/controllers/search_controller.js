var app = angular.module("app");

app.controller('SearchCtrl', function($scope, $ionicModal, $timeout) {

  $scope.players = [
    {name: "Michael Verdi", photo: "http://placehold.it/50x50", availability: "Weekdays after 5pm, anytime on weekends", rating: "Starting 4.5", record: "6-12", favorited: true },
    {name: "Rafael Nadal", photo: "http://placehold.it/50x50", availability: "All the time, I prefer mornings though", rating: "Advanced 7.0", record: "200-18", favorited: false },
    {name: "Roger Federer", photo: "http://placehold.it/50x50", availability: "I have a very limited schedule. Mostly between 2pm-3pm weekdays", rating: "Advanced 7.0", record: "500-100", favorited: false }
  ]

  $scope.toggleFavorite = function(index){
    var player = $scope.players[index]
    player.favorited = player.favorited === false ? true : false;
  }

  $ionicModal.fromTemplateUrl('templates/message_new_player_modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function(player) {
    $scope.player = player;
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.messagePlayer = function() {
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeModal();
      $scope.players
    }, 1000);
  };
  

})