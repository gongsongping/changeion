// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js ,'ngIOS9UIWebViewPatch'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives', 'ngResource','ngCordova','ngFileUpload','pascalprecht.translate']) //'firebase',

.run(function($ionicPlatform, $http, $window, $rootScope, $state, $resource, $translate) {
  // $rootScope.baseUrl = "http://localhost:3000"
  //  $rootScope.baseUrl = "http://162.243.143.15"
  $rootScope.baseUrl = "http://changiif.com"
  $rootScope.$on('qiniuUPdate', function() {
    $resource('http://changiif.com/uptoken').get().$promise.then(function(data) {
      $window.localStorage.qiniuToken = data.uptoken
      console.log('qiniuT  ' + $window.localStorage.qiniuToken)
    })
  })
  $rootScope.$broadcast('qiniuUPdate')
  console.log($window.localStorage.token)
  if ($window.localStorage.token) {
    $http.defaults.headers.common["Authorization"] = "Token token=" + $window.localStorage.token
  }

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault()
    }

    if(typeof navigator.globalization !== "undefined") {
      navigator.globalization.getPreferredLanguage(function(language) {
        // $rootScope.language = language.value.split("-")[0]
        $translate.use(language.value.split("-")[0])
      }, null);
    }

    $rootScope.deviceInformation = ionic.Platform.device();
    $rootScope.isWebView = ionic.Platform.isWebView();
    $rootScope.isIPad = ionic.Platform.isIPad();
    $rootScope.isIOS = ionic.Platform.isIOS();
    $rootScope.isAndroid = ionic.Platform.isAndroid();
    $rootScope.isWindowsPhone = ionic.Platform.isWindowsPhone();
    $rootScope.currentPlatform = ionic.Platform.platform();
    $rootScope.currentPlatformVersion = ionic.Platform.version();
    // console.log(JSON.stringify($rootScope.deviceInformation) + $rootScope.isWebView + $rootScope.isIPad + $rootScope.isIOS + $rootScope.isAndroid + $rootScope.currentPlatform + $rootScope.currentPlatformVersion);
    if ($rootScope.isIOS || $rootScope.isAndroid || $rootScope.isWindowsPhone) {
      $rootScope.isMobile = true; $rootScope.isDT = false
    } else {
      $rootScope.isMobile = false; $rootScope.isDT = true
    }
  })
})


.config(function($stateProvider, $urlRouterProvider, $httpProvider,$ionicConfigProvider, $translateProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  // RestangularProvider.setBaseUrl("http://162.243.143.15/api")
  // RestangularProvider.setBaseUrl("http://localhost:3000/api")
  $ionicConfigProvider.tabs.position("bottom") //Places them at the bottom for all OS
  $ionicConfigProvider.views.swipeBackEnabled(false)
  $ionicConfigProvider.views.forwardCache(true)

  $translateProvider.translations('en', {
    log_in: "log in",
    sign_up: "sign up",
    name: "name",
    email: "email",
    nationality: "nationality",
    password: "password",
    password_confirmation: "password confirmation",
    set_avatar: "set avatar",
    asker: "people who are asking for you",
    askee: "people you are asking for",
    partners: "your partners",
    upload: "upload photo",
    edit_profile: "edit profile",
    sign_out: "sign out",
    ask: "ask",
    agree: "agree",
    cancel_relationship: "cancel relationship",
    more: "more",
    goodbye_message: "Goodbye"
  });
  $translateProvider.translations('zh', {
    log_in: "登录",
    sign_up: "注册",
    name: "用户名",
    email: "邮箱",
    nationality: "国籍",
    password: "密码",
    password_confirmation: "重复密码",
    set_avatar: "设置头像",
    asker: "询问者",
    askee: "你询问的对象",
    partners: "伙伴",
    upload: "上传照片",
    edit_profile: "编辑个人信息",
    sign_out: "退出",
    ask: "询问",
    agree: "同意",
    cancel_relationship: "取消关系",
    more: "更多",
    goodbye_message: "拜拜"
  });
  $translateProvider.translations('vi', {
    log_in: "dang nhap",
    sign_up: "dang ky",
    name: "ten",
    email: "email",
    nationality: "quoc tich",
    password: "mat khau",
    password_confirmation: "mat khau nua",
    set_avatar: "anh ca nhan",
    asker: "nguoi dang hoi minh",
    askee: "nguoi minh dang hoi",
    partners: "ban",
    upload: "up anh",
    edit_profile: "su thong tin",
    sign_out: "huy",
    ask: "hoi",
    agree: "dong y",
    cancel_relationship: "cancel relationship",
    more: "them nua",
    goodbye_message: "bai"
  });
  // $translateProvider.preferredLanguage("en");
  $translateProvider.fallbackLanguage("en");
  // $ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
  $stateProvider
  // setup an abstract state for the tabs directive
  .state('forms', {
    url: "/forms",
    cache: false,
    // abstract: true,
    views: {
      '@': {
        templateUrl: 'templates/forms.html',
        controller: 'FormsCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    cache: false,
    views: {
      '@': {
        templateUrl: 'templates/form-login.html',
        controller: 'FormsCtrl'
      }
    }
  })

  .state('signup', {
    url: '/signup',
    cache: false,
    views: {
      '@': {
        templateUrl: 'templates/form-signup.html',
        controller: 'FormsCtrl'
      }
    }
  })

  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html",
    controller: 'AppCtrl'
  })

  // Each tab has its own nav history stack:
  .state('tab.home', {
    url: '/home',
    cache: false,
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.uphoto', {
    url: '/uphoto',
    cache: false,
    views: {
      'tab-uphoto': {
        templateUrl: 'templates/tab-uphoto.html',
        controller: 'UphotoCtrl'
      }
    }
  })
  .state('tab.change', {
    url: '/change',
    // cache: false,
    views: {
      'tab-change': {
        templateUrl: 'templates/tab-change.html',
        controller: 'ChangeCtrl'
      }
    }
  })
  .state('tab.change-strangers-id', {
    url: '/change/strangers/:id',
    cache: false,
    views: {
      'tab-change': {
        templateUrl: 'templates/change-strangers-id.html',
        controller: 'StrangersIdCtrl'
      }
    }
  })
  .state('tab.home-strangers-id', {
    url: '/home/strangers/:id',
    cache: false,
    views: {
      'tab-home': {
        templateUrl: 'templates/home-strangers-id.html',
        controller: 'StrangersIdCtrl'
      }
    }
  })
  .state('tab.home-partners-id', {
    url: '/home/partners/:id',
    cache: false,
    views: {
      'tab-home': {
        templateUrl: 'templates/home-partners-id.html',
        controller: 'PartnersIdCtrl'
      }
    }
  })
  .state('tab.account', {
    url: '/account',
    cache: false,
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.account-userup', {
    url: '/account/userup',
    cache: false,
    views: {
      'tab-account': {
        templateUrl: 'templates/account-userup.html',
        controller: 'UserupCtrl'
      }
    }
  })

  .state('tab.message', {
    url: '/message',
    // cache: false,
    abstract: true,
    views: {
      'tab-message': {
        templateUrl: 'templates/tab-message.html',
        controller: 'MessageCtrl'
      }
    }
  })
  .state('tab.message.mes1', {
    url: '/mes1',
    cache: false,
    views: {
      'message-mes@tab.message': {
        templateUrl: 'templates/mes1.html'
        // controller: 'MessageCtrl'
      }
    }
  })
  .state('tab.message.mes2', {
    url: '/mes2',
    // cache: false,
    views: {
      'message-mes@tab.message': {
        templateUrl: 'templates/mes2.html'
        // controller: 'MessageCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
