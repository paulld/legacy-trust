app.controller('HeadNavCtrl', ['$scope', '$location', function($scope, $location){

  $scope.isActive = function(route) {
    return (route === $location.path())? 'active' : '';
  };

  $scope.openNav = function () {    
    $('nav').toggleClass('open-nav');
  }
  
}]);
