app.controller('AboutLegacyCtrl', ['$scope', 'Afterload', function($scope, Afterload){

  $scope.$watch('$viewContentLoaded', function() {
    Afterload();
  });

}]);
