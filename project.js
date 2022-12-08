var app = angular.module("cart",[]);
app.controller("shop",["$scope",function($scope)
{
   // $scope.x=100;
    $scope.y;
    $scope.sum=function()
    {
        $scope.s=100*$scope.y;
        
    }
}]);