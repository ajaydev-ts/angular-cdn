var app = angular.module("twoway",[]);
app.controller("emp",["$scope",function($scope)
{
    $scope.x=10;
    $scope.y=20;
    $scope.sum=function()
    {
        $scope.s=$scope.x+$scope.y;
        
    }
}]);