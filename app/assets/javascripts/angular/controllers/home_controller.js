app.controller('HomeCtrl', ['$scope', function($scope){
  
  $scope.welcome = 'Hello World';

  $scope.users = [
    {
      first_name: 'Adrien',
      last_name: 'lopez'
    },
    {
      first_name: 'Paul',
      last_name: 'LD'
    }
  ];

}]);
