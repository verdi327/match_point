var app = angular.module("app");

app.controller('MessageCtrl', function($scope, $ionicModal, $timeout, $ionicListDelegate) {

  $ionicModal.fromTemplateUrl('templates/modals/message-player.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openMsgModal = function(player) {
    $scope.player = player;
    $scope.data = {message: ("Hey, " + player.name)}
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.messagePlayer = function(Player) {
    $timeout(function() {
      $scope.closeModal();
    }, 1000);
  };

})