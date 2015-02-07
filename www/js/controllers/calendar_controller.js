var app = angular.module("app");

app.controller('CalendarCtrl', function($scope, $ionicModal, $timeout, $cordovaDatePicker, $ionicPlatform) {

  $ionicModal.fromTemplateUrl('templates/modals/calendar.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.data = {title: "", location: "", notes: "", startDateTime: "", endDateTime: ""};

  $scope.openCalendarModal = function(playerName) {
    $scope.playerName = playerName;
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.addToCalendar = function() {
    $timeout(function() {
      $scope.closeModal();
    }, 1000);
  };

  $scope.datePicker = function(){
    var options = {
      date: new Date(),
      mode: 'datetime',
      minDate: new Date(),
      allowOldDates: false,
      allowFutureDates: true,
      doneButtonLabel: 'DONE',
      doneButtonColor: '#F2F3F4',
      cancelButtonLabel: 'CANCEL',
      cancelButtonColor: '#000000'
    };

    $ionicPlatform.ready(function() {
      $cordovaDatePicker.show(options).then(function(date){
        alert(date);
      });
    });
  }

})