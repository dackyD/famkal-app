// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']).run(function ($ionicPlatform, $state, $rootScope, $timeout, $ionicPopup) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }


        $ionicPlatform.registerBackButtonAction(function (event) {
            var childStates = ['app.playerdetails', 'app.matchdetails'];
            if (childStates.indexOf($state.current.name) < 0) {
                $ionicPopup.confirm({
                    title: 'System varsel',
                    template: 'Er du sikker på at du skal lukke appen?',
                    okType: 'button-balanced'
                }).then(function (res) {
                    console.log('res', res);
                    if (res) {
                        $rootScope.$broadcast('onPause');
                        $timeout(function () {
                            navigator.app.exitApp();
                        }, 0);
                    }
                });
            }
            else {
                navigator.app.backHistory();
            }
        }, 100);


    });
});

angular.module('starter').config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })

        // setup an abstract state for the tabs directive
        .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })

        // Each tab has its own nav history stack:
        .state('tab.calendar', {
            url: '/calendar',
            views: {
                'tab-calendar': {
                    templateUrl: 'templates/tab-calendar.html'
                }
            }
        })
        .state('tab.family', {
            url: '/family',
            views: {
                'tab-family': {
                    templateUrl: 'templates/tab-family.html'
                }
            }
        })
        .state('tab.event', {
            url: '/event',
            views: {
                'tab-event': {
                    templateUrl: 'templates/tab-event.html'
                }
            }
        })
        .state('tab.settings', {
            url: '/settings',
            views: {
                'tab-settings': {
                    templateUrl: 'templates/tab-settings.html'
                }
            }
        })
        .state('tab.voicemail', {
            url: '/voicemail',
            views: {
                'tab-voicemail': {
                    templateUrl: 'templates/tab-voicemail.html'
                }
            }
        })

        .state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    templateUrl: 'templates/tab-dash.html',
                    controller: 'DashCtrl'
                }
            }
        })

        .state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/tab-chats.html',
                    controller: 'ChatsCtrl'
                }
            }
        })
        .state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/chat-detail.html',
                    controller: 'ChatDetailCtrl'
                }
            }
        })

        .state('tab.account', {
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: 'templates/tab-account.html',
                    controller: 'AccountCtrl'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise('/tab/dash');
    $urlRouterProvider.otherwise('/login');

});
