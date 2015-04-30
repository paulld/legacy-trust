app.controller('HomeCtrl', ['$scope', 'Afterload', function($scope, Afterload){

  $scope.$watch('$viewContentLoaded', function() {
    Afterload();
  });

}]);
