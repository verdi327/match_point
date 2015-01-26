var app = angular.module("app");

app.controller('BuddyListCtrl', function($scope, Friends, $ionicModal, $timeout, $state) {
  $scope.data = {
    showDelete: false
  }

  $scope.friends = Friends.all();

  $ionicModal.fromTemplateUrl('templates/modals/message-all-friends.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.messageAll = function() {
    $timeout(function() {
      $scope.closeModal();
    }, 1000);
  };

  $scope.showProfile = function(friend){
    $state.go('app.profile', {userId: friend.id })
  };
})