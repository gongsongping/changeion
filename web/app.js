require('angular/angular.min.js');
require('angular-ui-router/release/angular-ui-router.min.js');
require('angular-md5/angular-md5.min.js');
require('angular-resource/angular-resource.js');
require("ng-file-upload/ng-file-upload.min.js");

var app = angular.module('app', ['ui.router','ngResource']);
app.run(function($http, $window, $rootScope, $state, $resource) {

    // $rootScope.baseUrl = "http://changiif.com"
    $rootScope.baseUrl = "http://127.0.0.1:5000"
    console.log($rootScope.baseUrl)
})

app.config(function($stateProvider, $urlRouterProvider) {
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'tpls/home.html'
        })
        .state('home.rt1', {
            url: '/rt1',
            templateUrl: 'tpls/home.rt1.html'
        })
        .state('home.rt2', {
            url: '/rt2',
            templateUrl: 'tpls/home.rt2.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'tpls/login.html'
        })
        .state('login.signup', {
            url: '/sugnup',
            templateUrl: 'tpls/login.signup.html'
        });

});
module.exports = app;