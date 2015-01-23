var app = angular.module("app");

app.controller('ConversationsCtrl', function($scope, $filter, Conversations) {
  $scope.conversations = Conversations.all();
})