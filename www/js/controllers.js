angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('ChatsCtrl', function ($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })

    .controller('LoginCtrl', function ($scope, $state, $ionicLoading, $timeout, $http) {
        $scope.signIn = function (user) {
            $ionicLoading.show({
                template: 'Loading ...'
            });
            //console.log('user', user);
            //
            //var uri = 'http://172.24.0.225:9000/api/mobile/login';
            //$http({url: uri, method: 'POST', data: angular.toJson(user), cache: false}).then(function (res) {
            //    console.log('res', res.data);
            //    $ionicLoading.hide();
            //    $state.go('tab.calendar');
            //}, function (err) {
            //    console.log(err);
            //    $ionicLoading.hide();
            //});


            $timeout(function() {
                $state.go('tab.calendar');
                $ionicLoading.hide();
            }, 2000);

    };
})

    .controller('CalendarDetailCtrl', function ($scope, $stateParams,Events) {

        $scope.event = Events.get($stateParams.eventId);
        console.log('$scope.event', $scope.event);

    })

    .controller('CalendarCtrl', function($scope, $stateParams, $modal, $http, $state, events) {

        var currentYear = moment().year();
        var currentMonth = moment().month();
        var currentDay = moment().date();

       // $scope.title = calendarControl.getTitle();
        $scope.getTitle = function(title){
          $scope.title =  title;
            console.log($scope.title);
        };

        $scope.events = events;
        console.log($scope.events);



        //Events.getHttp().then(function(res){
        //    $scope.events = res;
        //   console.log($scope.events);
        //});

        //$scope.events = [
        //  {
        //    title: 'hackathon',
        //    type: 'info',
        //    starts_at: new Date(currentYear,currentMonth,currentDay),
        //    ends_at: new Date(currentYear,currentMonth,currentDay+2),
        //    editable: false,
        //    deletable: false
        //  },
        //    {
        //        title: 'hackathonII',
        //        type: 'info',
        //        starts_at: "2015-03-16T05:30:00.000Z",
        //        ends_at: '2015-03-16T06:00:00.000Z',
        //        editable: false,
        //        deletable: false
        //    },
        //  {
        //    title: 'hackathon 2',
        //    type: 'warning',
        //    starts_at: moment(new Date()).add(1, 'month'),
        //    ends_at: moment(new Date()).add(1, 'month').add(5, 'days'),
        //    editable: true,
        //    deletable: false
        //  }
        //
        //];

        $scope.calendarView = 'month';
        $scope.calendarDay = new Date();

       // console.log($scope.calendarDay);

        $scope.setCalendarToToday = function() {
            $scope.calendarDay = new Date();
            console.log($scope.calendarDay);
        };



        $scope.eventClicked = function(event) {
            console.log(event);
            $state.go('tab.calendar-detail', {eventId: event.id});
        };


        function showModal(action, event) {
            $modal.open({
                templateUrl: 'modalContent.html',
                controller: function($scope, $modalInstance) {
                    $scope.$modalInstance = $modalInstance;
                    $scope.action = action;
                    $scope.event = event;
                }
            });
        }

        //$scope.eventClicked = function(event) {
        //    //showModal('Clicked', event);
        //};

        $scope.eventEdited = function(event) {
           console.log('edit');
           // showModal('Edited', event);
        };

        $scope.eventDeleted = function(event) {
           // showModal('Deleted', event);
            console.log('del');
        };

        $scope.setCalendarToToday = function() {
            $scope.calendarDay = new Date();
        };

        $scope.toggle = function($event, field, event) {
            $event.preventDefault();
            $event.stopPropagation();

            event[field] = !event[field];
        };
})
;
