angular.module('kB');

app.controller('CategoriesCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('/categories').then(function(data){
       $scope.categories = data; 
    });
    
}]);