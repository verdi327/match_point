var app = angular.module('app')

app.controller('LoginCtrl', function($scope, $rootScope, LoginService, $state, $ionicModal) {

  $scope.userLogin = {email: "", password: ""}

  $ionicModal.fromTemplateUrl('templates/modals/login.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openLoginModal = function(){
    $scope.modal.show();
  }

  $scope.closeLoginModal = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    LoginService.login($scope.userLogin.email, $scope.userLogin.password).then(function(player) {
      $rootScope.currentUser = player;
      $scope.closeLoginModal();
      $state.go("app.feed", {location: 'replace'});
    })
  }

})