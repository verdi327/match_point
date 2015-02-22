app = angular.module('app', ['ionic', 'ngCordova', 'ionic.contrib.ui.cards'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// All this does is allow the message
// to be sent when you tap return
app.directive('input', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      'returnClose': '=',
      'onReturn': '&',
      'onFocus': '&',
      'onBlur': '&'
    },
    link: function(scope, element, attr) {
      element.bind('focus', function(e) {
        if (scope.onFocus) {
          $timeout(function() {
            scope.onFocus();
          });
        }
      });
      element.bind('blur', function(e) {
        if (scope.onBlur) {
          $timeout(function() {
            scope.onBlur();
          });
        }
      });
      element.bind('keydown', function(e) {
        if (e.which == 13) {
          if (scope.returnClose) element[0].blur();
          if (scope.onReturn) {
            $timeout(function() {
              scope.onReturn();
            });
          }
        }
      });
    }
  }
})

app.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

app.directive('closeOption', function($ionicGesture, $ionicListDelegate) {
  return {
    restrict :  'A',

    link : function(scope, elem, attrs) {
     $ionicGesture.on('touch', function(e){
       $ionicListDelegate.closeOptionButtons();
     }, elem);

    }
  }
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.feed', {
    url: "/feed",
    views: {
      'menuContent': {
        templateUrl: "templates/feed.html"
      }
    }
  })

  .state('signup', {
    url: "/signup",
    templateUrl: "templates/signup.html"
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.match-requests', {
    url: "/match-requests",
    views: {
      'menuContent': {
        templateUrl: "templates/match-requests.html"
      }
    }
  })

  .state('app.conversations', {
    url: "/messages",
    views: {
      'menuContent': {
        templateUrl: "templates/conversations.html",
        controller: "ConversationsCtrl"
      }
    }
  })

  .state('app.conversation', {
    url: "/messages/:conversationId",
    views: {
      'menuContent': {
        templateUrl: "templates/conversation.html",
        controller: "ConversationCtrl"
      }
    }
  })

  .state('app.profile', {
    url: "/profile/:userId",
    views: {
      'menuContent': {
        templateUrl: "templates/profile.html",
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('app.submit-score', {
    url: "/submit-score",
    views: {
      'menuContent': {
        templateUrl: "templates/submit-score.html",
        controller: 'SubmitScoreCtrl'
      }
    }
  })

  .state('app.buddy-list', {
    url: "/buddy-list",
    views: {
      'menuContent': {
        templateUrl: "templates/buddy-list.html",
        controller: 'BuddyListCtrl'
      }
    }
  })

  .state('app.head-to-head', {
    url: "/head-to-head",
    views: {
      'menuContent': {
        templateUrl: "templates/head-to-head.html",
        controller: 'HeadToHeadCtrl'
      }
    }
  })

  .state('app.head-to-head-result', {
    url: "/head-to-head/result",
    views: {
      'menuContent': {
        templateUrl: "templates/head-to-head-result.html",
        controller: 'HeadToHeadResultCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/signup');
});
