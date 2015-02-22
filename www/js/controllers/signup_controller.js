var app = angular.module('app')

app.controller('SignupCtrl', function($scope, $state) {

  $scope.newUser = {email: "", password: "", availability: "", rating: "", photo: ""}

  // $scope.login = function() {
  //   LoginService.login($scope.userLogin.email, $scope.userLogin.password).then(function(player) {
  //     $rootScope.currentUser = player;
  //     $state.go("app.feed", {location: 'replace'});
  //   })
  // }
})