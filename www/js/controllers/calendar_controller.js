var app = angular.module("app");

app.controller('CalendarCtrl', function($scope, $ionicModal, $timeout, $cordovaCalendar, $ionicPlatform) {

  $ionicModal.fromTemplateUrl('templates/modals/calendar.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.data = {title: "", location: "", notes: "", startTime: "", endTime: "", date: ""};

  $scope.openCalendarModal = function(playerName) {
    $scope.playerName = playerName;
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  setTime = function(hours, minutes) {
    var date  = $scope.data.date;
    date.setHours(hours);
    date.setMinutes(minutes);
    return date
  }

  calcStartAndEndTime = function() {
    var start = $scope.data.startTime;
    var end   = $scope.data.endTime;

    $scope.data.startDateTime = setTime(start.getHours(), start.getMinutes())
    $scope.data.endDateTime = setTime(end.getHours(), end.getMinutes())
  }

  $scope.addToCalendar = function() {
    $timeout(function() {
      calcStartAndEndTime()
      console.log($scope.data);
      $scope.closeModal();
    }, 1000);
  };

  // $ionicPlatform.ready(function() {
  //   $cordovaCalendar.createEvent({
  //      title: 'Space Race',
  //      location: 'The Moon',
  //      notes: 'Bring sandwiches',
  //      startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
  //      endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  //    }).then(function (result) {
  //      // success
  //    }, function (err) {
  //      // error
  //    });
  // });

  

})