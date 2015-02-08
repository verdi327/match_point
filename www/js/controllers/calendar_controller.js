var app = angular.module("app");

app.controller('CalendarCtrl', function($scope, $ionicModal, $timeout, $ionicPopup, $filter) {

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

  $scope.$watch('data.startDateTime', function(unformattedDate){
    $scope.data.formattedStartDate = $filter('date')(unformattedDate, 'EEE, MMM d, y @ h:mm a');
  });

  $scope.$watch('data.endDateTime', function(unformattedDate){
    $scope.data.formattedEndDate = $filter('date')(unformattedDate, 'EEE, MMM d, y @ h:mm a');
  });

  $scope.datePicker = function(type){
    $scope.tmp = {};
    $scope.tmp.newDate = type === 'start' ? $scope.data.startDateTime : $scope.data.endDateTime ;
    
    var dateTimePopup = $ionicPopup.show({
     template: '<datetimepicker ng-model="tmp.newDate"></datetimepicker>',
     title: "Start Date",
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (type === 'start'){
            $scope.data.startDateTime = $scope.tmp.newDate; 
           } else {
            $scope.data.endDateTime = $scope.tmp.newDate; 
           }
         }
       }
     ]
    });
  }

})