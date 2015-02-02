(function(){
  var app = angular.module('store', []);
  app.config(function ($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });
    
  app.controller('StoreController', function($scope, $http){
    $scope.location = {};
    $scope.location.latitude = "44.444";
    $scope.location.longitude = "-73.6311421";
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
      console.log(position.coords.latitude);
      $scope.location.longitude = position.coords.longitude;
      $http.get('http://www.troutprostore.com/streams-services?distance%5Blatitude%5D=' + $scope.location.latitude +'&distance%5Blongitude%5D=' + '-73.6311421' + '&distance%5Bsearch_distance%5D=' + $scope.location.miles + '&distance%5Bsearch_units%5D=mile').
      
      success(function(data, status, headers, config){
        $scope.nodes = data.nodes
        console.log('YES!');
      }); 
      }
      getLocation();
      console.log('hello');
      
    }
  });
  
  
})();