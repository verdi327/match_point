app = angular.module('app', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.messages', {
    url: "/messages",
    views: {
      'menuContent': {
        templateUrl: "templates/messages.html",
        controller: "MessagesCtrl"
      }
    }
  })

  .state('app.profile', {
    url: "/profile",
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
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
