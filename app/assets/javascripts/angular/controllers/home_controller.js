app.controller('HomeCtrl', ['$scope', '$interval', 'Afterload', function($scope, $interval, Afterload){

  $scope.$watch('$viewContentLoaded', function() {
    // var x = 0;
    $interval(function(){
      // x++;
      if (!$('.main-container section:first-child').hasClass('first-child')) {
        Afterload();
        // console.log('DONE', x);
      // } else {
        // console.log('already done', x);
      }
      $('.slides li.overlay').each(function(){
        console.log('hi');
        $(this).css('height', $(window).height());
      });
    }, 100, 20);
  });

}]);
