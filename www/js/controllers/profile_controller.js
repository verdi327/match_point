var app = angular.module("app");

app.controller('ProfileCtrl', function($scope, $filter, $ionicModal, $timeout, $stateParams, Users) {
  $scope.currentUser = {id: 10}

  $scope.user = Users.get($stateParams.userId)

  $scope.matchResults = [
    {result: "W", score: "6-3 2-6 7-5", opponent: "R. Nadal", date: "1288323623006"},
    {result: "W", score: "6-3 6-4", opponent: "R. Federer", date: "1288323623019"},
    {result: "L", score: "6-4 2-6 7-5", opponent: "M. Sharapova", date: "1288323623106"},
    {result: "W", score: "2-6 6-4 7-5", opponent: "T. Bacon", date: "1288323625006"},
    {result: "L", score: "1-6 0-6", opponent: "C. Shooting-Star", date: "1288323623008"},
    {result: "W", score: "7-6 7-6", opponent: "L. Longasslastname", date: "1288623623003"},
  ]

  $ionicModal.fromTemplateUrl('templates/modals/edit-profile.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openEditModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.updateProfile = function() {
    $timeout(function() {
      $scope.closeModal();
    }, 1000);
  };
})