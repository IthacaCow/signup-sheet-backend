'use strict';

angular.module( 'signup', [
  'signup.home',
  'signup.login',
  'signup.signup',
  'angular-jwt',
  'angular-storage'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $jwtInterceptorProvider, $locationProvider) {

    jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('jwt');
    }

    $locationProvider.interceptors.push('jwtInterceptor');

    $routeProvider.
	  // The index page
	  // Load all records
      when('/', {
        templateUrl: 'records',
        controller: ShowAllRecord
      }).
      when('/login', {
        templateUrl: 'login',
        controller: Login
      }).
      when('/events', {
        templateUrl: 'events',
        controller: ShowAllEvents
      }).
      when('/event/:id', {
        templateUrl: 'show_event',
        controller: ShowEvent
      }).
      when('/record/:id', {
        templateUrl: 'show_record',
        controller: ShowRecord
      }).
      when('/record/:id', {
        templateUrl: 'delete_record',
        controller: DeleteRecord
      }).
      otherwise({
        redirectTo: '/login'
      });
    $locationProvider.html5Mode(true);
  }]);



.config( function myAppConfig ($urlRouterProvider, jwtInterceptorProvider, $httpProvider) {
})
.run(function($rootScope, $state, store, jwtHelper) {
  $rootScope.$on('$stateChangeStart', function(e, to) {
    if (to.data && to.data.requiresLogin) {
      if (!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
        e.preventDefault();
        $state.go('Login');
      }
    }
  });
})

;

