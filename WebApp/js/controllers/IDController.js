app.controller('IDController', ['$scope', function($scope) {
  $scope.title = 'InDesign Work';
  $scope.promo = 'Art And Newspaper Pages Made With InDesign';
  $scope.products = [
  	{
    	name: 'Stargazer',
    	cover: 'img/stargazer.png'
  	},

  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);
