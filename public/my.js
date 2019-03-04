var app = angular.module('app', []);

app.factory('$Data',['$http',function($http){
  var data ={}
  url='https://test-zypher.herokuapp.com/test/test'
  data.fetch=function(cb){
    $http({
     method: 'GET',
     url: url,
    }).then(function(response){
      cb(response.data)
    })
  }
  return data;
}])

app.controller('main',['$scope',"$http","$Data",function($scope,$http,$Data){
  $Data.fetch(function(data){
    $scope.authors=data.authors
    $scope.themes=data.themes
    $scope.categories=data.category
  })

}])
