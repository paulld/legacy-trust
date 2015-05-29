app.controller('PrivacyPolicyCtrl', ['$scope', 'Afterload', function($scope, Afterload){

  $scope.$watch('$viewContentLoaded', function() {
    Afterload();
  });

}]);
