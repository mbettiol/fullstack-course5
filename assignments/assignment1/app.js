(function(){
'use scrict'

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  
    $scope.dishes = ''
    $scope.message = ''
    
    $scope.checkIfTooMuch = function() {
        let length = ($scope.dishes || '').split(',').filter(
            word => word.trim().length > 1
        ).length;
        if(length>3){
            $scope.color ='green';
            $scope.message = 'Too much!';
        }else if(length>0){
            $scope.color ='green';
            $scope.message = 'Enjoy!';
        }else {
            $scope.color ='red';
            $scope.message = 'Please enter data first'
        }
    };
  }

})();
