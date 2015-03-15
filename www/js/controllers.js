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

    .controller('LoginCtrl', function ($scope, $state, $ionicLoading, $timeout) {
        $scope.signIn = function () {
            $ionicLoading.show({
                template: 'Logger inn...'
            });

            $timeout(function() {
                $state.go('tab.calendar');
                $ionicLoading.hide();
            }, 2000);


    };
})
    .controller('CalendarCtrl', function($scope, $stateParams, $modal, $http) {

        var currentYear = moment().year();
        var currentMonth = moment().month();
        var currentDay = moment().date();

       // $scope.title = calendarControl.getTitle();
        $scope.getTitle = function(title){
          $scope.title =  title;
            console.log($scope.title);
        };

        //$http.get('http://172.24.0.225:9000/api/mobile/events').then(function(events){
        //    console.log('events', events.data);
        //    $scope.events = events.data;
        //
        //
        //});

        $scope.events = [
          {
            title: 'hackathon',
            type: 'info',
            starts_at: new Date(currentYear,currentMonth,currentDay),
            ends_at: new Date(currentYear,currentMonth,currentDay+2),
            editable: false,
            deletable: false
          },
            {
                title: 'hackathonII',
                type: 'info',
                starts_at: "2015-03-16T05:30:00.000Z",
                ends_at: '2015-03-16T06:00:00.000Z',
                editable: false,
                deletable: false
            },
          {
            title: 'hackathon 2',
            type: 'warning',
            starts_at: moment(new Date()).add(1, 'month'),
            ends_at: moment(new Date()).add(1, 'month').add(5, 'days'),
            editable: true,
            deletable: false
          }

        ];

        $scope.calendarView = 'month';
        $scope.calendarDay = new Date();

        console.log($scope.calendarDay);

        $scope.setCalendarToToday = function() {
            $scope.calendarDay = new Date();
            console.log($scope.calendarDay);
        };



        $scope.eventClicked = function(event) {
            console.dir(event);
        };
})
;