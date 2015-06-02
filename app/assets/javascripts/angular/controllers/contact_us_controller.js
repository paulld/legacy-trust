app.controller('ContactUsCtrl', ['$scope', '$http', '$timeout', 'Afterload', function($scope, $http, $timeout, Afterload){

  $scope.$watch('$viewContentLoaded', function() {
    Afterload();

    $scope.sentWithSuccess = false;
    $scope.sentWithError = false;
    $scope.formClass = 'not-sent';
    $scope.postData = {};

    $scope.postMail = function (contact) {
      if ($scope.contactForm.$invalid === true) {
        return;
      }

      $scope.postData = angular.copy(contact);

      $http.post('/contact', $scope.postData)
        .success(function() {
          // Success message already sent
        })
        .error(function() {
          // Revert Success message if error
          $scope.sentWithError = true;
          $scope.sentWithSuccess = false;
          $scope.contat = angular.copy($scope.postData);
        });
      
      // Show Success message before asynchronous response
      $timeout(function(){
        $scope.sentWithSuccess = true;
        $scope.contact.name = '';
        $scope.contact.email = '';
        $scope.contact.message = '';
        $scope.formClass = '';
      }, 1000);

    };
  });

}]);
