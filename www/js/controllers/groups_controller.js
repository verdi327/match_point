var app = angular.module("app");

app.controller('GroupsCtrl', function($scope, $ionicModal, $timeout, Groups, $ionicPopup) {

  Groups.groupNames().then(
    function(groups) {
      $scope.groups = groups;
    }
  )

  $scope.data = {player: $scope.player, newGroup: "", groupId: ""}

  $ionicModal.fromTemplateUrl('templates/modals/group-player.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openGroupModal = function(player) {
    $scope.player = player;
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  toggleFavorited = function(player){
    player.favorited = !player.favorited 
  }

  $scope.groupPlayer = function(player) {
    $timeout(function() {
      $scope.closeModal();
      $scope.data = {player: "", newGroup: "", groupId: ""}
      toggleFavorited(player);
    }, 1000);
  };

  $scope.confirmDelete = function(player) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Remove From Buddy List',
      template: 'Are you sure you want to remove ' + player.name + '?' 
    });
    confirmPopup.then(function(res) {
      if(res) {
        console.log('You are sure');
        toggleFavorited(player);
      } else {
        console.log('You are not sure');
      }
    });
  };

})