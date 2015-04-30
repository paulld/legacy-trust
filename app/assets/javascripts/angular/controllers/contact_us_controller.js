app.controller('ContactUsCtrl', ['$scope', 'Afterload', function($scope, Afterload){

  $scope.$watch('$viewContentLoaded', function() {
    Afterload();
  });

}]);
