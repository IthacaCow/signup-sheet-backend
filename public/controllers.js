'use strict';

/* Controllers */

function ShowAllRecord($scope, $http) {
  $http.get('/web/signup/records').
    success(function(data, status, headers, config) {
      $scope.records = data;
    });
}
function ShowRecord($scope, $http, $routeParams) {
  $http.get('/web/signup/' + $routeParams.id).
    success(function(data) {
      $scope.record = data;
    });
}

function Login($scope, $http) {
  $scope.user = {};
  $scope.login = function() {
    $http({
      url: 'http://localhost:3001/sessions/create',
      method: 'POST',
      data: $scope.user
    }).then(function(response) {
      store.set('jwt', response.data.id_token);
      $state.go('home');
    }, function(error) {
      alert(error.data);
    });
  }
}
function ShowAllEvents($scope, $http) {

}
function ShowEvents($scope, $http) {

}
function Login($scope, $http) {

}
function AddPost($scope, $http, $location) {
  $scope.form = {};
  $scope.submitPost = function () {
    $http.post('/api/post', $scope.form).
      success(function(data) {
        $location.path('/');
      });
  };
}

function ReadPost($scope, $http, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });
}

function EditPost($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.form = data.post;
    });

  $scope.editPost = function () {
    $http.put('/api/post/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/readPost/' + $routeParams.id);
      });
  };
}

function DeletePost($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });

  $scope.deletePost = function () {
    $http.delete('/api/post/' + $routeParams.id).
      success(function(data) {
        $location.url('/');
      });
  };

  $scope.home = function () {
    $location.url('/');
  };
}

