app.controller('HomeCtrl', ['$scope', '$interval', 'Afterload', function($scope, $interval, Afterload){

  $scope.$watch('$viewContentLoaded', function() {
    $interval(function(){
      if (!$('.main-container section:first-child').hasClass('first-child')) {
        Afterload();
      }
    }, 100, 10);
  });

}]);
