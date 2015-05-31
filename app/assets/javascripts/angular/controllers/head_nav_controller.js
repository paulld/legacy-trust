app.controller('HeadNavCtrl', ['$scope', '$location', '$rootScope', 'smoothScroll', function($scope, $location, $rootScope, smoothScroll){

  $scope.isActive = function(route) {
    return (route === $location.path())? 'active' : '';
  };

  $scope.openNav = function () {    
    $('nav').toggleClass('open-nav');
  };

  $scope.goTo = function(link, anchor, offset) {
    if ($location.path() === '/'+link) {
      var element = document.getElementById(anchor);
      smoothScroll(element, {offset: offset});
    } else {
      $location.path(link);
      $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        var element = document.getElementById(anchor);
        smoothScroll(element, {offset: offset});
      });
    }
  };
  
}]);
