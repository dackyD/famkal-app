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
;