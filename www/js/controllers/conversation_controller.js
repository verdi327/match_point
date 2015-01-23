var app = angular.module("app");

app.controller('ConversationCtrl', function($scope, $filter, $stateParams, Conversations, $timeout, $ionicScrollDelegate) {
  $scope.user = Conversations.get($stateParams.conversationId);
  $scope.showTime = true;

  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  $scope.sendMessage = function() {
    alternate = !alternate;

    var d = new Date();
    d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    $scope.messages.push({
      userId: alternate ? '12345' : '54321',
      text: $scope.data.message,
      time: d
    });

    delete $scope.data.message;
    // scroll event causes message input field to lose focus
    // $ionicScrollDelegate.scrollBottom(true);
  };


  $scope.inputUp = function() {
    // if (isIOS) $scope.data.keyboardHeight = 216;
    // $timeout(function() {
    //   $ionicScrollDelegate.scrollBottom(true);
    // }, 300);

  };

  $scope.inputDown = function() {
    // if (isIOS) $scope.data.keyboardHeight = 0;
    // $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [{userId: '12345', text: "hi buddy", time: "4:02 PM"}, {userId: '54321', text: "what's up killa", time: "4:03 PM"}];

})