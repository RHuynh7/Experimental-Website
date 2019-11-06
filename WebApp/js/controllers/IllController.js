app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Artwork';
  $scope.promo = 'A combination of digital and traditional art';
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
