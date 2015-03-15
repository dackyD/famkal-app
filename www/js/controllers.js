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
            console.log('user', user);

            var uri = 'http://172.24.0.225:9000/api/mobile/login';
            $http({url: uri, method: 'POST', data: angular.toJson(user), cache: false}).then(function (res) {
                console.log('res', res.data);
                $ionicLoading.hide();
                $state.go('tab.calendar');
            }, function (err) {
                console.log(err);
                $ionicLoading.hide();
            });


            //$timeout(function() {
            //    $state.go('tab.calendar');
            //    $ionicLoading.hide();
            //}, 2000);


        };
    });