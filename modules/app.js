(function(){
  var troutPro = angular.module('troutPro', ['ngRoute']);

    troutPro.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    troutPro.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        setInterval(function() {
        $('.carousel').carousel('next');
        }, 5000);
    });

    troutPro.controller('aboutController', function($scope, $http) {
      $scope.location = [];
      $scope.location.miles = "1000";
      $scope.location.submitForm = function() {
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
        function showPosition(position) {
        $scope.location.latitude = position.coords.latitude;
        console.log($scope.location.latitude);
        $scope.location.longitude = position.coords.longitude;
        console.log($scope.location.longitude);
        $http.get('http://www.troutprostore.com/streams-services?distance%5Blatitude%5D=' + $scope.location.latitude +'&distance%5Blongitude%5D=' + $scope.location.longitude + '&distance%5Bsearch_distance%5D=' + $scope.location.miles + '&distance%5Bsearch_units%5D=mile').
        
        success(function(data, status, headers, config){
          $scope.nodes = data.nodes
          console.log('YES!');
        }); 
        }
        getLocation();
        console.log('hello');
        
      }
      $scope.location.submitForm();
    });

    troutPro.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
  
})();