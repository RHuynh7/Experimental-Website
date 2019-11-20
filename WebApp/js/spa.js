var app = angular.module('spaApp',['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      controller:'HomeController',
      templateUrl: 'app/views/home.html'
    })
    .when('/about',
      {
        controller: 'AboutController',
        templateUrl: 'app/views/about.html'
      })
   .when('/contact',
      {
        controller: 'ContactController',
        templateUrl: 'app/views/contact.html'
      })
    .when('/illustrations',
      {
        controller: 'IllController',
        templateUrl: 'app/views/illustrations.html'
      })
   .when('/digital',
      {
        controller: 'MainController',
        templateUrl: 'app/views/digital.html'
      })
  .when('/graphic',
     {
       controller: 'GDController',
       templateUrl: 'app/views/graphic.html'
     })
   .when('/indesign',
      {
        controller: 'IDController',
        templateUrl: 'app/views/graphic.html'
      })
    .when('/paintings',
       {
         controller: 'PController',
         templateUrl: 'app/views/paintings.html'
       })
});
app.controller('IllustrationsController', function($scope){
  $scope.customerID = 5;
});
app.controller('AboutController', function($scope){
  $scope.customerID = 5;
});
app.controller('MainController', function($scope){
  $scope.customerID = 5;
});
app.controller('ContactController', function($scope){
  $scope.customerID = 5;
});
app.controller('GDController', function($scope){
  $scope.customerID = 5;
});
app.controller('IDController', function($scope){
  $scope.customerID = 5;
});
app.controller('PController', function($scope){
  $scope.customerID = 5;
});
app.controller('HomeController', function($scope) {
  $scope.customers = [
      {"id": 1, "name":"Ted", "total": 5.996},
      {"id": 2, "name":"Michelle", "total": 10.994},
      {"id": 3, "name":"Zed", "total": 10.99},
      {"id": 4, "name":"Tina", "total": 15.994}
    ];
  });
