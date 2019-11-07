app.controller('IllController', ['$scope', function IllController($scope) {
  $scope.title = 'Illustrations';
  $scope.promo = 'Illustrations using pencil, pen, and/or marker';
  $scope.products = [
    {
      name: 'Untitled',
      cover: 'img/mash.jpg'
    },
    {
      name: 'Butterfly',
      cover: 'img/butterfly.png'
    },
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);
