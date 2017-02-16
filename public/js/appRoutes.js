// public/js/appRoutes.js

  angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

          // home page
          .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
          })

          // photos page that will use the PhotoController
          .when('/photos', {
            templateUrl: 'views/photo.html', 
            controller: 'PhotoController'
          });

      $locationProvider.html5Mode(true);

          ]);