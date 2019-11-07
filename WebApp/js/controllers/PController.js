app.controller('PController', ['$scope', function GDController($scope) {
  $scope.title = 'Paintings';
  $scope.promo = '';
  $scope.products = [
    {
      name: 'Seudo Productions',
      cover: 'img/seudo-productions.jpg'
    },

  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);
