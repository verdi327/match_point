var app = angular.module("app");

app.controller('MessagesCtrl', function($scope, $filter) {
  $scope.messages = [
    {name: "Rafael Nadal", photo: "http://placehold.it/50x50", lastMessage: "1288323623006"},
    {name: "Roger Federer", photo: "http://placehold.it/50x50", lastMessage: "1288323623006"},
    {name: "Maria Sharapova", photo: "http://placehold.it/50x50", lastMessage: "1288323623006"},
    {name: "Joe Flacco", photo: "http://placehold.it/50x50", lastMessage: "1288323623006"},
  ]
})