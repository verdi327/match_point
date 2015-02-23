var app = angular.module('app')

app.controller('SignupCtrl', function($scope, $state, Ratings) {

  $scope.newUser = {email: "", password: "", availability: "", rating: "4.0", photo: ""}
  $scope.ntrpRating = $scope.newUser.rating

  $scope.step = function(page){
    if(page === '2') {
      $state.go("signup.step-two")
    } else if (page === '3') {
      $state.go("signup.step-three")
    } else {
      $state.go("signup.step-one")
    }
  }

  $scope.$watch("newUser.rating", function(value) {
    value = Number(value).toFixed(1);
    $scope.newUser.rating = value;
    $scope.ntrpRating = Ratings.getNTRP(value)
  })

})