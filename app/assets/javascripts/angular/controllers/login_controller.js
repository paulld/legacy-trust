app.controller('LoginCtrl', ['$scope', 'Afterload', function($scope, Afterload){

  $scope.$watch('$viewContentLoaded', function() {
    Afterload();
  });

}]);
